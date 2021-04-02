const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

var engine,world
var ground
var polygon


function setup(){
    createCanvas(800,500)
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(350,200,250,10)
    polygon=new Polygon(200,400,30)




}

function draw(){


ground.display()
polygon.display()







drawSprites()

}















