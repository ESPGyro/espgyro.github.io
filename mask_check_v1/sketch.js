// Train model using https://teachablemachine.withgoogle.com/
// By Mason 2021/3/4

  // Classifier Variable
let classifier;
  // Model URL
let imageModelURL = '';
let imageModelURL2 = '';
  // The video
let video;
  // To store the classification
let label = "";
var confidence;
let input, port_btn, path_btn;
let port;
let port_status = 0; 
let path_status = 0; 

const serialLEDController = new SerialLEDController();

  // Load the model first
function preload() {
	if(path_status) {
        imageModelURL = input.value();
	} else	{ 
	    imageModelURL = 'https://teachablemachine.withgoogle.com/models/_nD0V-gFn/';
		// text("請輸入 model link", width / 2, height / 2-20);
		}		 
   classifier = ml5.imageClassifier(imageModelURL + 'model.json');
   maxPredictions = model.getTotalClasses();
}

function setup() {
  createCanvas(640, 820);
  input = createInput();
  // Create the video
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // flip? 
  flippedVideo = ml5.flipImage(video);  
  
  // Start classifying
  classifyVideo();
}
function conn() {
   serialLEDController.init();
   port_status =1; 
}

function path() {
    imageModelURL = input.value();
    path_status =1; 
	 // reload the model
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
    maxPredictions = model.getTotalClasses();
}

function draw() {
  background(255);
  
  // Draw the video
//  image(video, 0, 0);  no flip 
  image(flippedVideo, 0, 40);

  // Draw the label
  textSize(64);
  textAlign(CENTER);
  
 // text(confidence, width / 2, height - 5);

  let show_state = "";
  if (label == "Class 1") {
    show_state = "🚫";
    fill(255,0,0);  // color : red 
	if (port_status){
	serialLEDController.write("1#");
	}
    text("請帶上口罩", width / 2, height-310);
  } else if (label == "Class 2") {
    show_state = "😁";
    fill(0,255,0);  // color : green 
	if (port_status){
	serialLEDController.write("2#");
	}
    text("通過", width / 2, height-310);
  } else if (label == "Class 3") {
    show_state = "";
	if (port_status){
	serialLEDController.write("3#");
	}
    text("", width / 2, 20);
  }

  // Draw the show_state
    textSize(256);
    text(show_state, width / 2, height / 2-20);
    textSize(16);
    text(imageModelURL, width / 2, height/2 +140);
}

// Get a prediction for the current video frame
function classifyVideo() {
   flippedVideo = ml5.flipImage(video)
        classifier.classify(flippedVideo, gotResult);
        flippedVideo.remove();
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
   // The results are in an array ordered by confidence.
    // console.log(results[0]);	
   	 confidence = 100 * nf(results[0].confidence, 0, 2);
     label = results[0].label;
      if ( confidence >= 80){    // 信心度 > 80 
        label = results[0].label;
      } else {
        label = "";		
      }
	 console.log(label);	 
    // Classifiy again!
    classifyVideo();
 }

