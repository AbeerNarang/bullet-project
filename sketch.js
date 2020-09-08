var r1,r2;






function setup() {
 createCanvas(800,400);
r1= createSprite(400, 200, 60, 90);
r2= createSprite(400, 200, 90, 60);
r1.shapeColor="green";
r2.shapeColor="green";
r1.debug=true;
r2.debug=true;
}

function draw() {
  background(0,0,0);
  r2.x=World.mouseX ; 
  r2.y=World.mouseY;
if(isTouching(r1,r2)){


  r1.shapeColor="red";
  r2.shapeColor="red";
}
else{
  r1.shapeColor="green";
  r2.shapeColor="green";
} 
  drawSprites();
}

function isTouching(r1,r2){
  if(r1.x-r2.x<r1.width/2+r2.width/2&&
    r2.x-r1.x<r2.width/2+r1.width/2&&
    r1.y-r2.y<r1.height/2+r2.height/2&&
    r2.y-r1.y<r2.height/2+r1.height/2){
   return true; 
  }
  else{
  return false;  
  }

}