var boy,boyi,mother,motheri,groundi,ground,roomimage1,roomimage2,roomimage3, room,  roomimage1,  roomimage2,  roomimage3,bg;
var edges,hearti,heart1,heart2,heart3;
var bg1,bg;
var gameState="play"
var lives=3;
var msg;


function preload(){
motheri=loadAnimation("1-removebg-preview (1).png","2-removebg-preview.png","3-removebg-preview.png","4-removebg-preview.png","5-removebg-preview.png","6-removebg-preview.png")
bg=loadImage("road.png")  
roomimage1= loadImage("Room1.jpg");
roomimage2 = loadImage("Room2.jpg");
roomimage3 = loadImage("Room3.jpg");
boyi2=loadAnimation("b1.png","b2.png","b3.png","b4.png","b5.png","b6.png","b7.png","b8.png","b9.png","b10.png");
  hearti=loadImage("imagesu.png");
  boyi=loadImage("klipartz.com.png");
}

function setup() {
  // canvas
  createCanvas(windowWidth-20, windowHeight-80);
  
//sprites
bg1=createSprite(width/2,height/2,width,height)
bg1.addImage(bg);
bg1.scale=7
bg1.velocityX=-4
//bg1.x=width/2;
 mother=createSprite(100,100,10,10);
 mother.addAnimation("running",motheri);
 boy=createSprite(500,700,10,10);
boy.addAnimation("boy",boyi2)
boy.debug=true
heart1=createSprite(1000,50);
heart1.addImage(hearti);
heart2=createSprite(1040,50);
heart2.addImage(hearti);
heart3=createSprite(1080,50);
heart3.addImage(hearti);

//scaling
boy.scale= 1;
mother.scale=0.5
heart1.scale=0.125
heart2.scale=0.125
heart3.scale=0.125

//velocity for mother
mother.velocityX=10
mother.velocityY=10

//debug for the images
boy.debug= false
mother.debug=false
mother.setCollider("circle",0,0,50)
boy.setCollider("circle",0,0,50)
// edges
edges=createEdgeSprites()
}

function draw() {

   background(0,255,0);
   
   bg1.velocityX=-4
  //  roomImage();
//if (gameState==="play"){
  mother.velocityX=mother.velocityX+Math.random(2,20)
mother.velocityY=mother.velocityY+Math.random(2,20)

if (bg1.x<=100){
  bg1.x=bg1.width/2
}
if(boy.velocityY===0 && boy.velocityX===0  && gameState==="play"){
  boy.addImage(boyi)
}
else{
  boy.changeAnimation(boyi2);
}
//giving boy  movement on w,s,a,d;
if (keyDown("w")){
  boy.y= boy.y-7;
}

if (keyDown("s")){
  boy.y= boy.y+7;
}
if (keyDown("a")){
  boy.x= boy.x-7;
}
if (keyDown("d")){
  boy.x= boy.x+7;
}



mother.bounceOff(edges);
boy.collide(edges);

if(boy.isTouching(mother)){
textSize(50)
fill("red")
  lives--
  boy.x=500;
  boy.y=700;
 console.log(lives)

if (lives===0){
  gameState="Over"
  heart1.visible=false;
  heart2.visible=false;
  heart3.visible=false;
  stroke("red")
  strokeWeight("5")
  textSize(50)
  fill("blue")
  msg="YOU LOST"
                                                                                  
}
if (lives===1){
  gameState="play"
 heart1.visible=false;
 heart2.visible=false;
 stroke("red")
  strokeWeight("5")
  textSize(50)
  fill("blue")
 msg="YOU HAVE 1 LIFE LEFT"
}
if (lives===2){
  gameState="play"
 heart1.visible=false;
 stroke("red")
  strokeWeight("5")
  textSize(50)
  fill("blue")
 msg=("YOU HAVE 2 LIVES LEFT")
}
}

else if (gameState==="Over"){
  mother.velocityX=0
  mother.velocityY=0
  
   
}
   drawSprites();
   stroke("red")
  strokeWeight("5")
  textSize(50)
  fill("blue")
   text(msg,width/2,height/2)
}


function roomImage(){
//if(frameCount%500===0){
room=createSprite(600,400,width,height)
room.addImage(roomimage1)
var rand=Math.round(random(1,3))
switch(rand){
  case 1 : room.addImage(roomimage1);
  break;
  case 2 : room.addImage(roomimage2);
  break;
  case 3: room.addImage(roomimage3);
  break;
 
}
room.scale=(0.25)
//}
console.log(rand)
}