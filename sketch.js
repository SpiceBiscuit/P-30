const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var stand,box1,box2,box3,box4;
var box5,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28;
var box24,box25,slingshot,stand2;
var polygon,polygonimg,stand1;
var score = 0;
var bgColour = 255;

function preload(){
  polygonimg=loadImage("polygon.png");
  
  getTime();
}

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;
  
  //Create the Bodies Here.
stand1=new Stand(420,550,350,20);

//level 1
box1=new Box(420,525,30,40);
box2=new Box(380,525,30,40);
box3=new Box(340,525,30,40);
box4=new Box(300,525,30,40);
box5=new Box(460,525,30,40);
box6=new Box(500,525,30,40);
box7=new Box(540,525,30,40);

box8=new Box(320,485,30,40);
box9=new Box(360,485,30,40);
box10=new Box(400,485,30,40);
box11=new Box(440,485,30,40);
box12=new Box(480,485,30,40);
box13=new Box(520,485,30,40);

box14=new Box(340,445,30,40);
box15=new Box(380,445,30,40);
box16=new Box(420,445,30,40);
box17=new Box(460,445,30,40);
box18=new Box(500,445,30,40);

box19=new Box(360,405,30,40);
box20=new Box(400,405,30,40);
box21=new Box(440,405,30,40);
box22=new Box(480,405,30,40);

box23=new Box(380,365,30,40);
box24=new Box(420,365,30,40);
box25=new Box(460,365,30,40);

box26=new Box(400,325,30,40);
box27=new Box(440,325,30,40);

box28=new Box(420,285,30,40);






ground=new Ground(100,337,2000,20);

polygon = Bodies.circle(50,200,22);
World.add(world,polygon);

slingshot= new Slingshot(polygon,{x:100,y:450});

Engine.run(engine);
}

function draw() {
  background(bgColour);
  
  drawSprites();

  stand1.display();

  fill(rgb(30, 100, 252));

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill("grey");

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  fill(rgb(30, 100, 252));

  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  fill("grey");

  box19.display();
  box20.display();
  box21.display();
  box22.display();

  fill(rgb(30, 100, 252));

  box23.display();
  box24.display();
  box25.display();

  fill("grey");

  box26.display();
  box27.display();

  fill(rgb(30, 100, 252));

  box28.display();

  textSize(20);

  box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();

box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();

box14.score();
box15.score();
box16.score();
box17.score();
box18.score();

box19.score();
box20.score();
box21.score();
box22.score();

box23.score();
box24.score();
box25.score();

box26.score();
box27.score();

box28.score()


  slingshot.display();
  ground.display();

  imageMode(CENTER)
  image(polygonimg ,polygon.position.x,polygon.position.y,40,40);

  fill("white")
  text("Score : "+ score, 750, 40);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var day = responseJSON.datetime;
  var hour = day.slice(11,13);
  

  if (hour > 06 && hour < 18){
      //background(rgb(147, 180, 255));
      bgColour = rgb(147, 180, 255);
  } else {
      bgColour = "black";
  }
}