
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bse
var r1;
var r2;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	var ball_options={ 
		isStatic:false,
		restitution:0.3,
		 friction:0,
		  density:1.2
		 }
		 		 ball = Bodies.circle(260,100,20,ball_options);
		  World.add(world,ball);
	//Create the Bodies Here.
bse = new Base(400,680,800,15);
r1 = new Base(500,600,20,140);
r2 = new Base(670,600,20,140);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bse.display();
  r1.display();
  r2.display();
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
 
}
function keyPressed() {
	 if (keyCode === UP_ARROW) 
	 {
		  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
		 }
		 }


