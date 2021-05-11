noseX = 0;
noseY = 0;
lefteye = 0;
righteye = 0;
function preload(){
moustache  = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
goggles = loadImage("https://i.postimg.cc/8CsVjfKp/lollllllllm.png")
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO)
video.size(300,300)
video.hide()


poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log("posenet is okkkkkkd")
}
function gotPoses(results){
  if(results.length > 0){
  console.log(results)
  noseX = results[0].pose.nose.x - 40;
  noseY = results[0].pose.nose.y;
  lefteye = results[0].pose.leftEye.x -80;
  righteye = results[0].pose.rightEye.y - 25;

  }
  }
function draw(){
image(video , 0,0, 300, 300);
image(moustache,noseX,noseY, 80,35)
image(goggles,lefteye,righteye, 100 ,35)
}

function takeSnapshot(){
    save('myFilterImage.png')
}
 