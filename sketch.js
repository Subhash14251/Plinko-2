var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions= [];

var divisionHeight=300;
var score =0;
var particle;
var turn=0; 
var count=0;
var  gameState="Play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
}
 

function draw() {
  background("black");
  
  Engine.update(engine);

 
  textSize(20)
   text("Score : "+score,20,30);

   text("500",25,700);
   text("500",100,700);
   text("500",175,700);
   text("500",245,700);
   text("100",330,700);
   text("100",405,700);
   text("100",485,700);
   text("200",565,700);
   text("200",645,700);
   text("200",735,700);

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   
 

   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

if(particle!= null)
{
  particle.display();
  if(particle.body.position.y>760){
    if(particle.body.position.x<300){
      score=score+500;
      particle=null;
      if(count>=5) gameState= "end";
    }
  

  else if(particle.body.position.x < 600 && particle.body.position.x > 301) {
    
      score=score+100;
      particle=null;
      if(count>=5) gameState= "end";
    }

    else if(particle.body.position.x>600 && particle.body.position.x<900){
      score = score+200;
      particle= null;
      if(count>=5) gameState= "end";
    }


}  
}
   
 if(gameState==="end"){
   textSize(13);
    text("GameOver",400,400);

 }

}

function mousePressed() {
  if(gameState!=="end"){
    count++
    particle=new Particle(mouseX,10,10,10);
  }
}




