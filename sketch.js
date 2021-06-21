
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var page;
var groundUp,groundLeft,groundRight, invisibleG;
var bgImg;

function preload(){
	bgImg = loadImage("bg2.jpeg");
}

function setup() {
	createCanvas(1365, 653);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,643,width,20);
	invisibleG=new ground(width/2,620,width,20);
	groundUp=new ground(width/2,9,width,20);
	groundLeft=new ground(10,630,20,width);
	groundRight=new ground(1353,630,20,width);
	dustbinObj=new dustbin(1100,595);
	page = new Paper(300,200,70)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  page.display();
  groundObject.display();
  groundLeft.display();
  groundRight.display();
 
  groundUp.display();
  dustbinObj.display();
  keyPressed()
}


function keyPressed(){
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(page.body,page.body.position,{x:10,y:-10})
	}
	if (keyCode === LEFT_ARROW ){
		Matter.Body.applyForce(page.body,page.body.position,{x:-10,y:10})
	}
}
