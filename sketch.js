const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine, world;
var ground, ball;
var Canvas;

function setup() {
  Canvas=createCanvas(1000,1000);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(500, 950, 1000, 20, options);
  var option1={
    restitution:0.8
  }
  ball=Bodies.circle(500, 500, 50, option1);
  World.add(world,ball);
  World.add(world,ground);
 // console.log(object.type);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  //rect(400, 200, 100, 100);
  rect(ground.position.x, ground.position.y, 1000, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y, 50, 50);
}