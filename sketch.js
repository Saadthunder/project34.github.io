const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var bg_img;
var fruit1;
var fruit2;
var fruit3;
var fruit4;
var fruit5;
var fruit6;
var fruit7;
var fruit8;
var fruit9;
var fruit10;
var fruit11;
var fruit12;
var fruit13;
var fruit14;
var fruit15;
var fruit16;
var fruit17;
var fruit18;
var fruit19;
var fruit20;
var fruit21;
var fruit22;
var fruit23;
var fruit24;
var fruit25;
var fruit26;
var fruit27;
var fruit28;
var fruit29;
var fruit30;
var fruit31;
var fruit32;
var fruit33;
var fruit34;
var fruit35;
var bunny;
var gardener;
function preload()
{
bg_img=loadImage("background.png");
carrotImg=loadImage("tu.png");
rabbit=loadImage("blink_1.png");
g_img=loadImage("maco.jpg")

} 

function setup() {
  createCanvas(1390,700);

  engine = Engine.create();
  world = engine.world;
  fruit = Bodies.circle(300,300,20);
  fruit2 = Bodies.circle(400,300,20);
  fruit3= Bodies.circle(500,300,20);
  fruit4 = Bodies.circle(600,300,20);
  fruit5 = Bodies.circle(700,300,20);
  fruit6= Bodies.circle(800,300,20);
  fruit7 = Bodies.circle(900,300,20);
  fruit8 = Bodies.circle(1000,300,20);
  fruit9 = Bodies.circle(100,300,20);
  fruit10 = Bodies.circle(200,300,20);
  fruit11 = Bodies.circle(1100,300,20);
  fruit12 = Bodies.circle(1200,300,20);
  fruit13 = Bodies.circle(100,500,20);
  fruit14 = Bodies.circle(200,500,20);
  fruit15 = Bodies.circle(300,500,20);
  fruit16 = Bodies.circle(400,500,20);
  fruit17 = Bodies.circle(500,500,20);
  fruit18 = Bodies.circle(600,500,20);
  fruit19 = Bodies.circle(700,500,20);
  fruit20 = Bodies.circle(800,500,20);
  fruit21 = Bodies.circle(900,500,20);
  fruit22 = Bodies.circle(1000,500,20);
  fruit23 = Bodies.circle(1100,500,20);
  
  fruit25 = Bodies.circle(100,100,20);
  fruit26 = Bodies.circle(200,100,20);
  fruit27 = Bodies.circle(300,100,20);
  fruit28 = Bodies.circle(400,100,20);
  fruit29 = Bodies.circle(500,100,20);
  fruit30 = Bodies.circle(600,100,20);
  fruit31 = Bodies.circle(700,100,20);
  fruit32 = Bodies.circle(800,100,20);
  fruit33 = Bodies.circle(900,100,20);
  fruit34 = Bodies.circle(1000,100,20);
  fruit35 = Bodies.circle(1100,100,20);




  bunny=Bodies.rectangle(1200,50,150,150);

  gardener=Bodies.rectangle(1200,500,120,120);
  
  
  rectMode(CENTER);
}


function draw() 
{
  background(51);
  image(bg_img,0,0,1900,700);

  image(carrotImg,fruit.position.x,fruit.position.y,70,70);
  image(carrotImg,fruit2.position.x,fruit.position.y,70,70);
  image(carrotImg,fruit3.position.x,fruit.position.y,70,70);
  image(carrotImg,fruit4.position.x,fruit.position.y,70,70);
  image(carrotImg,fruit5.position.x,fruit.position.y,70,70);
  image(carrotImg,fruit6.position.x,fruit.position.y,70,70);
  image(carrotImg,fruit7.position.x,fruit.position.y,70,70);
  image(carrotImg,fruit8.position.x,fruit.position.y,70,70);
  image(carrotImg,fruit9.position.x,fruit.position.y,70,70);
  image(carrotImg,fruit10.position.x,fruit.position.y,70,70);
  image(carrotImg,fruit11.position.x,fruit.position.y,70,70);
  image(carrotImg,fruit12.position.x,fruit.position.y,70,70);
  image(carrotImg,fruit13.position.x,fruit14.position.y,70,70);
  image(carrotImg,fruit14.position.x,fruit14.position.y,70,70);
  image(carrotImg,fruit15.position.x,fruit14.position.y,70,70);
  image(carrotImg,fruit16.position.x,fruit14.position.y,70,70);
  image(carrotImg,fruit17.position.x,fruit14.position.y,70,70);
  image(carrotImg,fruit18.position.x,fruit14.position.y,70,70);
  image(carrotImg,fruit19.position.x,fruit14.position.y,70,70);
  image(carrotImg,fruit20.position.x,fruit14.position.y,70,70);
  image(carrotImg,fruit21.position.x,fruit14.position.y,70,70);
  image(carrotImg,fruit22.position.x,fruit14.position.y,70,70);
  image(carrotImg,fruit23.position.x,fruit14.position.y,70,70);

  image(carrotImg,fruit25.position.x,fruit25.position.y,70,70);
  image(carrotImg,fruit26.position.x,fruit25.position.y,70,70);
  image(carrotImg,fruit27.position.x,fruit25.position.y,70,70);
  image(carrotImg,fruit28.position.x,fruit25.position.y,70,70);
  image(carrotImg,fruit29.position.x,fruit25.position.y,70,70);
  image(carrotImg,fruit30.position.x,fruit25.position.y,70,70);
  image(carrotImg,fruit31.position.x,fruit25.position.y,70,70);
  image(carrotImg,fruit32.position.x,fruit25.position.y,70,70);
  image(carrotImg,fruit33.position.x,fruit25.position.y,70,70);
  image(carrotImg,fruit34.position.x,fruit25.position.y,70,70);
  image(carrotImg,fruit35.position.x,fruit25.position.y,70,70);
 







  image(rabbit,bunny.position.x,bunny.position.y,150,150);

  image(g_img,gardener.position.x,gardener.position.y,120,120);


  imageMode("CENTER");
  Engine.update(engine);

  
}


function keyPressed(){

  if(keyCode===UP_ARROW){
  
  Matter.Body.applyForce(bunny,{x:0,y:0},{x:0,y:-5})
  
  
  }
}