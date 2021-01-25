const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground, ball;

function setup(){
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var options={
  isStatic:true
  }


  ground=Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);

  var ball_options={
    restitution:2.0
  }
  ball=Bodies.rectangle(200,100,20,20,ball_options);
  World.add(world,ball);

 // console.log(object);
 // console.log(object.position.x);
  //console.log(object.position.y);
}
function draw()
{
  background(0);
  rectMode(CENTER);
  Engine.update(engine);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
  
}
