video = ""
objects = [];
status_model = "";
function setup(){
canvas = createCanvas(640, 420)
canvas.center()
video.hide()
}
function preload (){
    video = createVideo('video.mp4')
}
function start(){
objectDetector = ml5.objectDetector('cocossd', modelLoaded)
document.getElementByID("status").innerHTML = "Status : Detecting Objects"
}

function modelLoaded(){
    console.log("Model Loaded!")
    status_model = true;
    video.loop()
    video.speed(1)
    video.volume(0)
}



function draw(){
    image(video, 0, 0, 640, 420)
    if(status_model != ""){
        objectDetector.detect(video, gotResults)
    }
}
function gotResults(error, results){
   if(error){
console.error(error)
   }
   else{
       console.log(results)
   }
}
