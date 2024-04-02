nosex = 0;
nosey = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup(){
video = createCapture(VIDEO);
video.size(550,500);
video.position(200,150)

canvas = createCanvas(550,500);
canvas.position(800,150);

poseNet = ml5.poseNet(video,modelLoaded);

poseNet.on('pose',gotPoses);
}

function draw(){
background('#80d180');
document.getElementById("square_side").innerHTML = "Width And Height Of The Square Will Be = "+difference+"px";
fill('#000000');
stroke('#80d180');
text('Shana',nosex,nosey);
textSize(difference);
}

function modelLoaded(){
console.log('PoseNet is Initialized');
}

function gotPoses(results){
if(results.length>0){
console.log(results);
nosex = results[0].pose.nose.x;
nosey = results[0].pose.nose.y;
console.log("nosex = "+nosex+"nosey = "+nosey)

leftwristX = results[0].pose.leftWrist.x;
rightwristX = results[0].pose.rightWrist.x;
difference = floor(leftwristX - rightwristX);

console.log("leftwristX = "+leftwristX+"rightwristX = "+rightwristX+"difference = "+difference);
}
}