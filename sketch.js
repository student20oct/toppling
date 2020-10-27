const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, ball,box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new box(140,200,100,50);
    box2 = new box(100,300,50,100);
    ground1=new ground(200,390,400,10)

   

    
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);

    box1.display();
    box2.display();
    ground1.display();
}