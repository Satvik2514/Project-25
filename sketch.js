
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Trash1,paper1,Ground1;	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	Trash1= new Trash (800,0,20,20);
	paper1= new paper(0,700,20,20);
	Ground1=new Ground(800,0,800,15);

	Engine.run(engine);

}
function keyPressed() {
	if(keyCode === "UP_ARROW") {


 

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  Trash1.display();
  paper1.display();
  Ground1.display();

 
}
function keyPressed() {
	if(keyCode === "UP_ARROW") {
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:75,y:-75}); }
}