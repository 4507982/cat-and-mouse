var tom,jerry,jerryimg,tomimg;
function preload() {
    //load the images here
tomimg.loadImage=(cat1.png,cat2.png,cat3.png,cat4.png);
jerryimg.loadImage=(mouse1.png,mouse2.png,mouse3.png,mouse4.png);
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
jerry=createSprite(200,200,20,30);
tom=createSprite(100,200,30,50);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if tom.istouching jerry(changeAnimation(cat4.png))
 
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
tom=world.mousex;


}
