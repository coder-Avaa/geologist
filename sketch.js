
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 500);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	Engine.run(engine);
  
    groundObj = new Ground(480,height,2000,20);
}


function draw() {
  rectMode(CENTER);
  background(60);
  

  ground.display();
  drawSprites();
 
}



