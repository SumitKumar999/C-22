const Engine = Matter.Engine; // help to work
const World = Matter.World; // canvas
const Bodies = Matter.Bodies; // bodies in the canvas

var myengine, myworld; 
var ground, box; 
var ball; 

function setup(){ 

  var canvas = createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;
  var option = {isStatic:true} 
  var boxOption = {restitution:1}

  ground = Bodies.rectangle(200,390,400,20,option); 
  box = Bodies.circle(200,200,50, boxOption);

  World.add(myworld,ground); console.log(ground); 
  World.add(myworld,box); console.log(box); 
} 
  
  function draw(){ 

    background(0); 
    Engine.update(myengine); 

    rectMode(CENTER); 
    rect(ground.position.x,ground.position.y,400,20); 

    ellipseMode(RADIUS);
    ellipse(box.position.x,box.position.y,50,50); 
    
  
  }