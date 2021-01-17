var movingRect;
function setup() {
  createCanvas(800,400);
  movingRect= createSprite(400, 200, 80, 50);
}

function draw() {
  background("yellow");
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  drawSprites();
}
