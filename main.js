noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);
  canvas = createCanvas(550, 500);
  canvas.position(560, 150);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function draw() {
  background("blue");
  document.getElementById("squareSide").innerHTML = "Font size of the text will be  = " + difference + "px";
  textSize(difference);
  fill("green");
  text("Vihaan", noseX, noseY);
}
function modelLoaded() {
  console.log("PoseNet is Initialized");
}
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
  }
}
