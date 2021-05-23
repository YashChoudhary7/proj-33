var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

//var snow = [];
function preload(){
  backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1500,700);
  engine = Engine.create()
  world = engine.world;
  createSprite(400, 200, 50, 50);
snow1 = new Snow(500, 100, 20, 20);
}

function draw() {
  background(backgroundImg); 
  snow1.display(); 
  //if(frameCount%60===0){
    //snow.push(new Snow(random(width/2-30, width/2+30), 10,10));
  
  //}

 //for (var j = 0; j < snow.length; j++) {
  
   // snow[j].display();
  //}
  drawSprites();
}
