var helicopterIMG, helicopterSprite, packageSprite,packageIMG,a1,a2,a3,a;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    helicopterIMG=loadImage("helicopter.png")
    packageIMG=loadImage("package.png")
}

function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);
        
    packageSprite=createSprite(width/2, 80, 10,10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale=0.2

    helicopterSprite=createSprite(width/2, 200, 10,10);
    helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale=0.6

    groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color(255)

    engine = Engine.create();
    world = engine.world;

    
    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
    World.add(world, packageBody);
    

    //Create a Ground
    ground = Bodies.rectangle(width/2, 550, width, 20 , {isStatic:true} );
    World.add(world, ground);

    /*
     a1 = new Zone(width/2-100,height-50,200,20);

     a2 = new Zone(300,height-90,20,100);
     
     a3 = new Zone(500,height-90,20,100);
    */

    
    boxPosition=width/2-100
    boxY=530;

    boxleftSprite=createSprite(boxPosition, boxY, 20,100);
    boxleftSprite.shapeColor=color(255,0,0);

    boxLeftBody = Bodies.rectangle(boxPosition, boxY, 20,100 , {isStatic:true} );
    World.add(world, boxLeftBody);

    boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
    boxBase.shapeColor=color(255,0,0);

    boxBottomBody = Bodies.rectangle(boxPosition-100, boxY+45, 200,20 , {isStatic:true} );
    World.add(world, boxBottomBody);

    boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
    boxleftSprite.shapeColor=color(255,0,0);

    boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
    World.add(world, boxRightBody);
    

    Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  /*
  a1.display();
  a2.display();
  a3.display();
  */
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Body.setStatic(packageBody,false);
  }
}




