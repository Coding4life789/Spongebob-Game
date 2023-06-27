var PLAY=1;
var END=0;
var gameState=PLAY;




var obstacle1, obstacle2, obstacle3
var crying_spongebob,excited_spongebob,happy_spongebob,thinking_spongebob,walking_santa_spongebob

var obstacle4
var obstacle5
var obstacle6,obstacle7
var groundImage,ground

function preload(){
    crying_spongebob = loadImage("crying spongebob.gif");
   happy_spongebob = loadImage("happy spongebob.png");
    thinking_spongebob = loadImage("homework-thinking.gif");
    walking_santa_spongebob = loadImage("p5.play-boilerplate-master/w1.png","p5.play-boilerplate-master/w2.png","p5.play-boilerplate-master/w3.png","p5.play-boilerplate-master/w4.png");
     obstacle1 = loadImage("1st level pirate.gif");
    obstacle2 = loadImage("captain jack sparrow.gif");
    obstacle4 = loadImage("boxing cat.gif");
   obstacle5 = loadImage("kevin hart spongebob.gif");
   groundImage = loadImage("ground2.png");
    
}






function setup() {
  createCanvas(1000,600);
  
 // ground = createSprite(200,180,400,20);
 // ground.addImage("ground",groundImage);
 // ground.x = ground.width /2;
  //ground.velocityX = -(6 + 3*score/100);




  spongebob = createSprite(145, 489, 50, 50);


  //spongebob.addAnimation("crying",crying_spongebob);
  //spongebob.addAnimation("excited",excited_spongebob);
  //spongebob.addAnimation("happy",happy_spongebob);
  spongebob.addAnimation("walking_santa",walking_santa_spongebob)



}

function draw() {
  background("green"); 
  text(mouseX+","+mouseY,mouseX,mouseY)
  drawSprites();
}


function spawnObstacles(){
  if (frameCount % 40 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true
    obstacle.velocityX = -(6 + 3*score/100);

    var rand = Math.round(random (1,6));
    switch (rand) {
      case 1: obstacle.addImage(obstacle1);
        break;
    }
  }
}