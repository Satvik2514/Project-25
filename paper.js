class paper{
constructor(x,y){
var options = {
 isStatic:false,
 restitution:0.5,
friction:0.5,
density:1.2
}
this.body=Bodies.circle(x,y,50,50);
this.width=50;
this.height=50;
this.image = loadImage("sprites/paper.png");
;
World.add(world, this.body);
}

display(){
var pos=this.body.position;

push();
rotate();
stroke();
fill("lime");
Pop();
}

}
