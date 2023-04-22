let slider;
let sliderValue = 0;
let mouseValue = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
  frameRate(30);
}

function mouseDragged(){
  mouseValue = mouseY;
  if(mouseValue > 90 && mouseValue < 200 && mouseIsPressed === true){
    sliderValue = map(mouseValue, 90, 200, 0, 255);
  }
}

function draw() {
  background(100, 100, 255);

  textSize(30);
  noStroke();

  //empty syringe
  //0,255,0
  fill(100,255,100,100);
  rotateX(0.5);
  rotateZ(0.5);
  cylinder(40, 180);

  //extra cylinder
  fill(150);
  translate(0, 90, 0);
  cylinder(30, 20);

  //needle
  translate(0, 0, 0);
  fill(100);
  cylinder(3, 240);

  //ass
  fill(
    map(sliderValue, 0, 255, 250, 200),
    map(sliderValue, 0, 255, 128, 100),
    map(sliderValue, 0, 255, 114, 128),
  );
  translate(0, 280, 0);
  sphere(200, 24, 24);
  translate(0, -280, 0);

  //movable objects

  //syringe stick
  translate(0, -250, 0);
  translate(0, map(sliderValue, 0, 255, 0, 114), 0);
  fill(150);
  cylinder(12, 130);

  //syringe hat
  translate(0, -70, 0);
  fill(100, 100, 100);
  if (
    mouseX > 230 
    && mouseX < 420 
    && mouseY > 30 
    && mouseY < 170 
    || mouseX > width/2 
    && mouseX < width 
    && mouseY > 0 
    && mouseY < height/2 
    && mouseIsPressed === true
    ) {
    cylinder(80,10);
  } else {
    cylinder(70,10);
  }
  translate(0, (map(sliderValue, 0, 255, 0, 114))*-1, 0);
  translate(0,70,0);

  //syringe filling
  translate(
    0,
    map(sliderValue,0,255,171,246),
    0
  );
  fill(
    map(sliderValue, 0, 255, 0, 255),
    map(sliderValue, 0, 255, 255, 0),
    0
  );
  cylinder(41,map(sliderValue,0,255,160,10));
}
