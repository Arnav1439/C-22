const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground;
var engine,world;
var ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
   
  var groundOptions={
    isStatic:true
  }
  ground=Bodies.rectangle(200,350,400,10,groundOptions);
  World.add(world,ground);
console.log(ground.position.x);
console.log(ground.position.y);
var ballOptions={
restitution:1
}
ball=Bodies.circle(200,200,20,ballOptions);
World.add(world,ball);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);  
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}