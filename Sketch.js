const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
 img = loadImage("boy.png");
 imge = loadImage("tree.png");
}

function setup(){
    var canvas = createCanvas(1100,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(550, 780, 1100, 20);
    mango1 = new Mango(690, 400);
    mango2 = new Mango(720, 420);
    mango3 = new Mango(790, 490);
    mango4 = new Mango(850, 400);
    mango5 = new Mango(890, 440);
    stone = new Stone(150,640);
    slingshot1 = new Slingshot(stone.body,{x:150,y:640});

}

function draw(){

  background(200);

  image(img, 100, 600, 300, 200);
  image(imge, 500, 220, 700, 550);
  Engine.update(engine);  
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  slingshot1.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
 slingshot1.fly ();
}

function keyPressed(){
  if(keyCode === 32 ){
    Matter.Body.setPosition(stone.body,{x:150,y:640});
    slingshot1.attach(stone.body);
  }
}

function detectcollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;
                                                                            
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y);
  console.log(distance);
  if(distance<=lmango.radius+lstone.radius){
    Matter.Body.setStatic(lmango.body,false);
  }
}