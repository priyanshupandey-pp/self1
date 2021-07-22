var ball,stand,net;
function preload(){
  ball1=loadImage("100742.png")
  stand1=loadImage("stand.png")
  net1=loadImage("net.png")
}
function setup() {
  createCanvas(1000,650);
 ball=createSprite(520, 600, 50, 50);
 ball.addImage("asdf",ball1)
 ball.scale=0.1

 net=createSprite(500,70,10,10)
 net.addImage("asd",net1)
 net.scale=0.5

 for (var i = 50; i < 1000; i=i+120) {
  var stand = createSprite(i, 160, 20, 20);
  stand.addImage(stand1);
  stand.scale=0.1
 }
  for (var i = 100; i < 1000; i=i+120) {
  var stand = createSprite(i, 290, 20, 20);
  stand.addImage(stand1);
  stand.scale=0.1
}
for (var i = 50; i < 1000; i=i+120) {
  var stand = createSprite(i,430, 20, 20);
  stand.addImage(stand1);
  stand.scale=0.1
 }
 for (var i = 100; i < 1000; i=i+120) {
  var stand = createSprite(i, 590, 20, 20);
  stand.addImage(stand1);
  stand.scale=0.1
}
}

function draw() {
  background("green");  
  if (keyDown("up")) {
    ball.velocityX = 0;
    ball.velocityY = -2;
  }
  drawSprites();
}