
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground, dustbin1, dustbin2, dustbin3;
var wall1, wall2, wall3, wall4;
function preload()
{
	
}

function setup() {
	  createCanvas(1200, 600);


	  engine = Engine.create();
	  world = engine.world;

	  //Create the Bodies Here.
    paper = new Paper(100, 300, 15);
    ground = new Ground(600,450,1200,10);
    dustbin1 = new Dustbin(830, 395, 20, 100)
    dustbin2 = new Dustbin(925, 435, 170, 20)
    dustbin3 = new Dustbin(1015, 395, 20, 100)

    wall1 = new Ground(0, 300, 20, 1200)
    wall2 = new Ground(1200, 300, 20, 1200)
    wall3 = new Ground(600, 0, 1200,20)
    wall4 = new Ground(600, 00, 1200, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display()
  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
  drawSprites();
 
}

function keyPressed(){
   if(keyCode === UP_ARROW){

      Matter.Body.applyForce(paper.body, paper.body.position, {x: 0, y: -0.02});


   }
   if(keyCode === LEFT_ARROW){

    Matter.Body.applyForce(paper.body, paper.body.position, {x: -0.02, y: 0});


    }
    if(keyCode === DOWN_ARROW){

      Matter.Body.applyForce(paper.body, paper.body.position, {x: 0, y: 0.02});


    }
    if(keyCode === RIGHT_ARROW){

      Matter.Body.applyForce(paper.body, paper.body.position, {x: 0.02, y: 0});


    }
}