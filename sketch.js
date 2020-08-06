
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

var options={
	'isStatic':true
}
	engine = Engine.create();
	world = engine.world;

	paper=new Paper(50,30,10,options);
	
	leftbox1= new bin 	(725,616,20,100);              //set
	rightbox2= new bin  (625,616,20,100);
	box3= new bin 		(675,655,120,20);                  //set
	ground=Bodies.rectangle(400,675,800,20,options);
	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
 

  background(110);
  
  rectMode(CENTER);
  fill(255);
  rect(ground.position.x,ground.position.y,800,20);
  
  paper.display();
  leftbox1.display();
  rightbox2.display();
  box3.display();
  
  function keyPressed(){
	  if(keyCode === UP_ARROW){
		  Matter.Body.applyForce(paper.Object.body,paper.Object.body.position,{x:85,y:-85})
		  
	  }

  }
  drawSprites();
 
}


//The bottom is a static body which is 20 pixels tall and 200 pixels wide.
//The sides are 100 pixels tall and 20 pixels wide.
