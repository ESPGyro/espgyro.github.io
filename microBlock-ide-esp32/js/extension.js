// let extensionIndexURL = "https://api.github.com/repos/microBlock-IDE/microBlock-extension-index/contents/main.json";
let extensionIndexURL = "https://api.github.com/repos/ESPGyro/esp32_extension_url/contents/main-url.json";

// let extensionIndexURL = "https://github.com/ESPGyro/esp32_extension_url/blob/main/main-url.json";
let extensionIndex = null;
console.log("11");
let updateExtensionIndex = async () => {
    let extensionIndexFromAPI = await fetch(extensionIndexURL, { 
        redirect: "follow",
        headers: { 
            "Accept": "application/vnd.github.v3.raw" 
        },
    });
    if (!extensionIndexFromAPI.ok) {
        NotifyE("Load extension index fail");
        return false;
    }
    extensionIndexFromAPI = await extensionIndexFromAPI.json();
    extensionIndex = extensionIndexFromAPI;

    return true;
}

// install all extensions 
let all_install_flag = false
if (all_install_flag) {
let all_extension = "ESPGyro_esp32_extensions";
let all_extensionLocalPath = `/extension/esp32_extensions`;
let all_downloadRepo = downloadRepoFromGitHubStoreInFS("https://github.com/ESPGyro/esp32_extensions", all_extensionLocalPath, msg => NotifyE(msg));
if (!all_downloadRepo) {
    NotifyE("Download esp32_extensions fail");
 //   return false;
}

let all_blocksFile = fs.walk(`${all_extensionLocalPath}/blocks`);
for (const file of all_blocksFile) {
    if (file.endsWith(".js")) {
        let jsContent = fs.read(`${all_extensionLocalPath}/blocks/${file}`);
        try {
            eval(jsContent);
        } catch (e) {
            NotifyE("Script run error: " + e.toString());
            console.error(e);
        }
    } else {
        console.warn("Why file " + file + " in blocks ? support .js only so skip it");
    }
}

updateBlockCategory();

NotifyS(`Install ESP32_extension successful`);

saveCodeToLocal();
}


let installExtension = async (extensionId) => {
    if (typeof extensionIndex[extensionId] === "undefined") {
        NotifyE("Not found " + extensionId + " in extension index");
        return false;
    }
    let extension = extensionIndex[extensionId];
    let extensionLocalPath = `/extension/${extensionId}`;
    console.log(extension.github);
    let downloadRepo = await downloadRepoFromGitHubStoreInFS(extension.github, extensionLocalPath, msg => NotifyE(msg));
    if (!downloadRepo) {
        NotifyE("Download " + extension.name + " fail");
        return false;
    }

    let blocksFile = fs.walk(`${extensionLocalPath}/blocks`);
    for (const file of blocksFile) {
        if (file.endsWith(".js")) {
            let jsContent = fs.read(`${extensionLocalPath}/blocks/${file}`);
            try {
                eval(jsContent);
            } catch (e) {
                NotifyE("Script run error: " + e.toString());
                console.error(e);
            }
        } else {
            console.warn("Why file " + file + " in blocks ? support .js only so skip it");
        }
    }

    updateBlockCategory();

    NotifyS(`Install ${extension.name} extension successful`);
    saveCodeToLocal();

    return true;
}

let removeExtension = async (extensionId) => {
    fs.remove(`/extension/${extensionId}`);
    if (isElectron) {
        let path = `${rootPath}/../extension/${extensionId}`;
        if (nodeFS.existsSync(path)) {
            nodeFS.rmdirSync(path, { recursive: true });
        }
    }

    updateBlockCategory();

    NotifyS(`Uninstall ${extensionId} successful`);
    saveCodeToLocal();

    return true;
}

$("#open-extension-dialog").click(async () => {
    $("#extension-dialog .extension-list").html('');

    ShowDialog($("#extension-dialog"));

    Notiflix.Block.Standard("#extension-dialog > section", 'Loading...');

    if (!extensionIndex) {
        if (!(await updateExtensionIndex())) {
            Notiflix.Block.Remove("#extension-dialog > section");
            return;
        }
    }

    $(".extension-category-list > li:first-child").click();
    
    Notiflix.Block.Remove("#extension-dialog > section");
});

let uploadModuleList = [];

Blockly.Python.addUploadModule = (module) => {
    uploadModuleList.push(module);
}

$("#open-extension-creator").click(() => {
    $(".add-extension-box").fadeIn();
});
console.log("22");
let showExtensionList = (extensionList) => {
    $("#extension-dialog .extension-list").html('');
    console.log("2a");
    let extensionInstalledList = fs.ls("/extension");
 //   let extensionInstalledList = fs.ls("${rootPath}/extension");
 //   extensionInstalledList = extensionInstalledList.concat(fs.ls(`${rootPath}/extension`));
    console.log("eeee");
    if (isElectron) {
        extensionInstalledList = extensionInstalledList.concat(nodeFS.ls(sharedObj.extensionDir));
    }
    let board = boards.find(board => board.id === boardId);
    for (const [id, info] of Object.entries(extensionList)) {
        if (Array.isArray(info?.chip) && (!info.chip.includes(board.chip))) { // Skip if chip not support
            continue;
        }

        $("#extension-dialog .extension-list").append(`
        <li>
            <div class="extension-box${extensionInstalledList.indexOf(id) >= 0 ? " installed" : ""}" data-extension-id="${id}">
                <div class="header">
                    <div class="cover">
                        <img src="${info.icon}" alt="${info.name}">
                    </div>
                    <div class="detail">
                        <div class="name">${info.name}<span class="installed-icon"><i class="fas fa-check-circle"></i></span></div>
                        <div class="author">${info.author ? info.author : 'None'}</div>
                        <div class="other">
                            <span class="version" style="background-color: ${info.color}">${info.version ? info.version : 'None'}</span>
                            <a href="${info.github ? info.github : '#'}" target="_blank"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div class="description">${info.description ? info.description : '<i>No description</i>'}</div>
                <div class="button">
                    <button class="extension-install"><i class="fas fa-download"></i> Install</button>
                    <button class="extension-uninstall"><i class="fas fa-trash-alt"></i> Uninstall</button>
                </div>
            </div>
        </li>
        `);
    }

    $(".extension-install").click(async function() {
        let extensionId = $(this).parents(".extension-box").attr("data-extension-id");
        let queryBox = `.extension-box[data-extension-id='${extensionId}']`;
        Notiflix.Block.Standard(queryBox, 'Installing...');

        if (await installExtension(extensionId)) {
            $(queryBox).addClass("installed");
        }

        Notiflix.Block.Remove(queryBox);
    });

    $(".extension-uninstall").click(async function() {
        let extensionId = $(this).parents(".extension-box").attr("data-extension-id");
        let queryBox = `.extension-box[data-extension-id='${extensionId}']`;

        if (removeExtension(extensionId)) {
            $(queryBox).removeClass("installed");
        }
    });
}
console.log("33");
$(".extension-category-list > li").click(function() {
    let categoryName = $(this).text();

    let extensionList = { };
    if (categoryName != "Installed") {
        for (const [id, info] of Object.entries(extensionIndex)) {
            if (categoryName !== "All" && categoryName !== info.category) {
                continue;
            }
            extensionList[id] = JSON.parse(JSON.stringify(info));
            extensionList[id].icon = `${info.github}/raw/master/${info.icon}`;
        }
    } else {
        for (const extensionId of fs.ls("/extension")) {
            let extension = fs.read(`/extension/${extensionId}/extension.js`);
            extension = eval(extension);
            extensionList[extensionId] = extension;
            extensionList[extensionId].icon = fs.read(`/extension/${extensionId}/${extension.icon}`);
        }
    }

    showExtensionList(extensionList);

    $(".extension-category-list > li").removeClass("active");
    $(this).addClass("active");
});

$("#extension-keyword").keyup(function() { 
    let keyword = $(this).val().toLowerCase();

    $(".extension-category-list > li").removeClass("active");

    let extensionList = { };
    for (const [id, info] of Object.entries(extensionIndex)) {
        if (info.name.toLowerCase().indexOf(keyword) < 0) {
            continue;
        }
        extensionList[id] = JSON.parse(JSON.stringify(info));
        extensionList[id].icon = `${info.github}/raw/master/${info.icon}`;
    }

    showExtensionList(extensionList);
});

$("#form-add-extension").submit(async function(e) {
    e.preventDefault();

    let gitHubURL = $("#extension-github-url").val().match(/https:\/\/github\.com\/[^\/]+\/[^\/]+/);
    if (gitHubURL == null) {
        NotifyE("GitHub url not match");
        return;
    }
    gitHubURL = gitHubURL[0];

    Notiflix.Block.Standard(".add-extension-box", 'Loading...');

    // Call to API, See microBlock Back-end: https://github.com/microBlock-IDE/microBlock-backend
    let addExtensionToIndex = await fetch("https://us-central1-ublock-c0a08.cloudfunctions.net/extension", { 
        method: "post",
        body: gitHubURL,
        redirect: "follow"
    });
    let rosAddExtension = await addExtensionToIndex.json();
    if (addExtensionToIndex.status !== 200) {
        console.log("Add extension error", rosAddExtension);
        NotifyE("Add extension error, See console to more detail");
    } else {
        NotifyS(`Add/Update ${rosAddExtension.extension.name} extension successful`);
        $("#extension-github-url").val("");
    }

    Notiflix.Block.Remove(".add-extension-box");
});

$("#form-add-extension button[type='reset']").click(() => {
    $(".add-extension-box").fadeOut();
});

// $("#open-extension-dialog").click();
