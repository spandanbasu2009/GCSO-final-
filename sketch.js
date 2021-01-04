var body,tire1,tire2,tire3,tire4,top,carGroup;
var wall;
var speed, weight; 
var track; 
var roadSide1,roadSide2;

function preload(){

}

function setup() {
    createCanvas(1600,400);
 
    speed = random(55,90);
    weight = random(400,1500);

    
    wall = createSprite(1500,200,60,height/2);
    wall.shapeColor = color("blue");

    track = createSprite(770,200,1400,130);
    track.shapeColor = color("white");
    roadSide1 = createSprite(770,130,1400,20);
    roadSide2 = createSprite(770,260,1400,20);

    body = createSprite(50,200,80,50);
    //tire1 = createSprite(10,225,20,20);
    //tire2 = createSprite(10,225,20,20);
    tire3 = createSprite(20,225,20,20);
    tire4 = createSprite(80,225,20,20);
    //top = createSprite(50,170,50,20);
    body.velocityX = speed;
    //tire1.x = body.x;
    //tire2.x = body.x;
    tire3.velocityX = body.velocityX;
    tire4.velocityX = body.velocityX;
    //top.velocityX = body.velocityX;
    body.shapeColor = color("blue");
    //tire1.shapeColor = color("orange");
    //tire2.shapeColor = color("orange");
    tire3.shapeColor = color("orange");
    tire4.shapeColor = color("orange");
    //top.shapeColor = color("green");
}

function draw() {
 
    background(0);
     
    if(wall.x-body.x < (body.width+wall.width)/2){
        body.velocityX=0;
        tire3.velocityX=0;
        tire4.velocityX=0;
        var deformation = 0.5*weight*speed*speed/22509;

        if(deformation > 180){
            body.shapeColor = color(255,0,0);
        }
        if(deformation < 180 && deformation > 100){
            body.shapeColor = color(230,230,0);
        }
        if(deformation < 100){
            body.shapeColor = color(0,255,0);
        }
    }
    CAR();
    drawSprites();
}

function CAR(){
   
     
}