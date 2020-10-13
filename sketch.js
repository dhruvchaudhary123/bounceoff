var fixedRect, movingRect,ob1,ob2,ob3,ob4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1=createSprite(200,600,30,80);
  ob2=createSprite(500,600,30,80);
  ob3=createSprite(300,200,30,80);
  ob4=createSprite(350,200,30,80);
  ob1.velocityX=5;
  ob2.velocityX=-5;

  
  ob1.shapeColor="blue";
  ob2.shapeColor="blue";
  ob3.shapeColor="blue";
  ob4.shapeColor="blue";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(istouching(movingRect,ob3)){
  movingRect.shapeColor = "red";
 
  }
  else{
  movingRect.shapeColor = "green";
  
  }

bounceoff(ob1,ob2);
  drawSprites();
}





