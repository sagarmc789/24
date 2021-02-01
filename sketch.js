
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var paper;
var stone;
var rubber;
var iron;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8




function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer=new Hammer(200,200)

ground=new Ground(400,800,800,10)
	
paper=new Paper(200,500,80,120)

stone=new Stone(300,500,60,50)

rubber=new Rubber(400,500,50,50)

iron=new Iron(500,500,70,50)

sand1=new Sand(100,600)
sand2=new Sand(110,600)
sand3=new Sand(50,600)
sand4=new Sand(150,600)
sand5=new Sand(170,600)
sand6=new Sand(20,600)
sand7=new Sand(80,600)
sand8=new Sand(130,600)

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
    Engine.update(engine);
  
	hammer.display();
	ground.display();
	paper.display();
	stone.display();
	rubber.display();
	iron.display();
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
	sand7.display();
	sand8.display();

	drawSprites();
 
}



