let loadScript = (f) => {
    /*let script = document.createElement("script");
    script.setAttribute("src", f);
    document.body.appendChild(script);*/
    document.write(`<script src="${f}"></script>`);
};

loadScript(`${rootPath}/boards/esp32-dev-board/index.js`);  // Add ESP32 Dev Board
// loadScript(`${rootPath}/boards/raspberry-pi-pico/index.js`);  // Add Raspberry Pi Pico
// loadScript(`${rootPath}/boards/raspberry-pi-pico-w/index.js`);  // Add Raspberry Pi Pico W
