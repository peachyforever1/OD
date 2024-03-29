
img = "";
objects = []; //why do i need the array?
statusnew = "";

function preload(){
  img = loadImage('turists.jpg');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();

  
  //classifier = ml5.imageClassifier('MobileNet',MODELOADED)
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  statusnew = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  else{
  console.log(results);
  objects = results;
}
}
function home(){
window.location="index.html"
}

function draw() {
  image(img, 0, 0, 640, 420);

      if(statusnew != "")
      {
        //for(){}
        //0,1,2
        for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status : Object Detected";
    
          fill("#FF0000");
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke("#FF0000");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }
}
