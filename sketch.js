const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var ball,groundObj,leftSide,rightSide;
var radius = 40

function preload() {
 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

  var options = {
    isStatic:true,
  }
	ball = Bodies.circle(260,100,20,ball_options);
	World.add(world,ball);
 
  groundObj = Bodies.rectangle(width/2,570,width,20, options);
  World.add(world,groundObj);

  leftSide = Bodies.rectangle(900,500,20,120, options);
  World.add(world,leftSide);

 rightSide = Bodies.rectangle(1150,500,20,120, options);
  World.add(world,rightSide);
rectMode(CENTER);
}

function draw() {
  background(189);
 
  Engine.update(engine);
  

  ellipse(ball.position.x,ball.position.y,radius,radius);
  rect(groundObj.position.x,groundObj.position.y,1200,20);
  rect(leftSide.position.x,leftSide.position.y,20,120);
  rect(rightSide.position.x,rightSide.position.y,20,120);

   
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball, ball.position, {x: 85, y: -85})
  }
}
