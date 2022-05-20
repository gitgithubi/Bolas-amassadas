const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball, ground, leftSide, rightSide;

function setup() {
  createCanvas(1600, 700);

  engine = Engine.create();
  world = engine.world;


  ball = new Bola(300, 300, 30);
  ground = new Ground(width / 2, 695, width, 10);
  leftSide = new Ground(1100, 600, 15, 200);
  rightSide = new Ground(1350, 600, 15, 200);

  Engine.run(engine);
}


function draw() {
  background(0);

  rectMode(CENTER);

  Engine.update(engine);

  ball.display();
  ground.display();
  leftSide.display();
  rightSide.display();

  keyPressed();
}

function keyPressed() {

  if (keyCode === UP_ARROW) {
    ball.ballForce();
  }
}