var fixedRect, movingRect;
var hello, evanka, donald;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

   hello= createSprite(200,200, 46,24)
   hello.shapeColor="cyan"
   hello.debug=true

   evanka= createSprite(300,300, 50,96)
   evanka.shapeColor="purple"
   evanka.debug=true

   donald= createSprite(100,100, 50,96)
   donald.shapeColor="lightblue"
   donald.debug=true 
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(touch(movingRect, evanka)){
    movingRect.shapeColor = "blue";
    evanka.shapeColor = "blue";
  }
  else { 
    movingRect.shapeColor = "green";
    evanka.shapeColor = "purple";
  }

  if(touch(movingRect, donald)){
    movingRect.shapeColor = "blue";
    donald.shapeColor = "blue";
  }
  else { 
    movingRect.shapeColor = "green"; 
    donald.shapeColor = "lightblue";
  }


  drawSprites();
}

