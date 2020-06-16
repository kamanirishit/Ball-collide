//Global Variables
var ball,wall,speed,weight,ball2;
function setup() {
  createCanvas(1600,400);
  ball2=createSprite(200,200);
  ball2.visible=false;
  //assign speed and weight to random number
  speed=Math.round(random(45,90));
  weight=Math.round(random(700,3200));
 ball= createSprite(100, 200, 20, 20);
 ball.shapeColor=color(255);
 //assign the speed to velocityX
 ball.velocityX=speed;
 wall=createSprite(1500,height/2,20,400);
 wall.shapeColor="green";
}

function draw() {
  //make background black
 background(0);  
  if(wall.x-ball.x <= (ball.width/2+wall.width/2)){
    ball2.velocityX=2;
    //reset ball to the skin of the wall
  ball.x=wall.x-(wall.width/2+ball.width/2);
  //stop the ball
    ball.velocityX=0;
    //calculate deformation
   var deformation=Math.round(0.5*weight*speed*speed/22500 );
   //give different color to ball according to deformation
   if(deformation<100){
    ball.shapeColor=color(0,255,0);
  }
  if(deformation>100 && deformation<180){
ball.shapeColor=color(230, 230, 0);
  }
  if(deformation>180){
    ball.shapeColor=ball.shapeColor=color(255, 3, 3);
}
  }
    //draw all componenets of game
  drawSprites();
  //text score
  if(ball2.velocityX>0)
{
  textSize(20);
  text("Deformation is :"+deformation,400,300);
}
  }
  
 
  