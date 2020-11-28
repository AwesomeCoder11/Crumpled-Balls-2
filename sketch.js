const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3
var paper1
var ground
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;
//Create the Bodies Here.
	
ground = new Ground(750,675,1500,20);

	dustbin1 = new Dustbin(1400,615,200,100);
	//dustbin2 = new Dustbin(1300,600,20,100);
	//dustbin3 = new Dustbin(1500,600,20,100);

	paper1 = new Paper(40,630,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
dustbin1.display();
//dustbin2.display();
//dustbin3.display();
paper1.display();
ground.display();
KeyPressed();
}

function KeyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	
	}


}

