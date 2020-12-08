var car1, car2, car3, car4, wall;
 var speed1,speed2,speed3,speed4, weight;

function setup() {
  createCanvas(1000,400);
  car1 = createSprite(40,45,50,20);
  car2 = createSprite(40,145,50,20);
  car3 = createSprite(40,245,50,20);
  car4 = createSprite(40,345,50,20);
  wall = createSprite(950,200,20,400);
  car1.shapeColor = "pink";
  car2.shapeColor = "pink";
  car3.shapeColor = "pink";
  car4.shapeColor = "pink";
  wall.shapeColor = "purple";
  speed1 = random(50,90);
  speed2 = random(70,110);
  speed3 = random(50,90);
  speed4 = random(70,120);
  weight = random(500,1500);
  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;
}

function draw() {
  if(wall.x - car1.x < (car1.width + wall.width)/2){
    
    var deformation1 = 0.5 * weight * speed1 * speed1 /22500; 
  if(deformation1 < 100){
    car1.shapeColor = "green";
    car1.velocityX = 0;
  }
  if(deformation1 < 180 && deformation1 > 100){
    car1.shapeColor = "yellow";
    car1.velocityX = 0;
  }
  if(deformation1 > 180){
    car1.shapeColor = "red";
    car1.velocityX = 0;
  }}

  if(wall.x - car2.x < (car2.width + wall.width)/2){
    car2.velocityX = 0;
    var deformation2 = 0.5 * weight * speed2 * speed2 /22500; 
  if(deformation2 < 100){
    car2.shapeColor = "green";
  }
  if(deformation2 < 180 && deformation2 > 100){
    car2.shapeColor = "yellow";
  }
  if(deformation2 > 180){
    car2.shapeColor = "red";
  }}

  if(wall.x - car3.x < (car3.width + wall.width)/2){
    car3.velocityX = 0;
    var deformation3 = 0.5 * weight * speed1 * speed1 /22500; 
  if(deformation3 < 100){
    car3.shapeColor = "green";
  }
  if(deformation3 < 180 && deformation3 > 100){
    car3.shapeColor = "yellow";
  }
  if(deformation3 > 180){
    car3.shapeColor = "red";
  }}

  if(wall.x - car4.x < (car4.width + wall.width)/2){
    car4.velocityX = 0;
    var deformation4 = 0.5 * weight * speed1 * speed1 /22500; 
  if(deformation4 < 100){
    car4.shapeColor = "green";
  }
  if(deformation4 < 180 && deformation4 > 100){
    car4.shapeColor = "yellow";
  }
  if(deformation4 > 180){
    car4.shapeColor = "red";
  }}

  background(0); 
  
  drawSprites();
  }