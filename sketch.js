const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var plinko=[];
var divisions=[];
var divisionheight=300;




function setup() {
  createCanvas(800,800);
engine=Engine.create();
world=engine.world;

ground= new Ground(width/2,height,width,20);

for(var d=0;d<=width;d=d+80){
  divisions.push(new Division(d,height-divisionheight/2,10,divisionheight))

}

for(var p=75; p<=width ;p=p+50){
  plinko.push( new Plinko(p,50))
}

for(var p=50; p<=width -10;p=p+50){
  plinko.push( new Plinko(p,175))
}

for(var p=75; p<=width ;p=p+50){
  plinko.push( new Plinko(p,275))
}

for(var p=50; p<=width-10 ;p=p+50){
  plinko.push( new Plinko(p,375))
}

}

function draw() {
  background(0); 
  
  Engine.update(engine);
    ground.display()

    for( var i=0 ; i<plinko.length ; i++){
      plinko[i].display();
    }

    for( var i=0 ; i<divisions.length ; i++){
      divisions[i].display();
    }

    if(frameCount%60===0){
      particles.push( new Particle( random (width/2-30,width/2+30) ,10 ,10 ) )
    }

    for( var i=0 ; i<particles.length ; i++){
      particles[i].display();
    }

}