function preload(){
  bgimg=loadImage("snow2.jpg")
  sprite = loadImage("boy.png")
}



function setup() {
  createCanvas(1000,400);
  boy=createSprite(400,300);
  boy.addImage(sprite)
  boy.scale=0.5
}


function draw() {
  background(bgimg);
  if(keyDown === "left"){
    boy.x = boy.x-5
 
   }
   if(keyDown === "right"){
    boy.x = boy.x+5
 
   }
   if(keyDown === "up"){
    boy.y = boy.y+5
 
   }
  drawSprites();

}

  

  
  


