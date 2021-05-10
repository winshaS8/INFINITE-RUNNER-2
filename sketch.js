 //Create variables here
var girl,bgImg,backGround1,backGround2,background3,girlImage1,girlImg,coinImg
var gameState = 0;
var score = 0;
var coin1,coin2,coin3,coin1Group,coin2Group; 

function preload()
{
  //load images here 
  girlImage1 = loadAnimation('Girl1.png','Girl2.png','Girl1.png','Girl2.png');
  girlImg = loadImage("Girl1.png");
  coinImg = loadAnimation('c1.png','c2.png','c3.png','c4.png','c5.png','c6.png','c7.png','c8.png','c9.png','c10.png'); 
  bgImg = loadImage("track.png");
  
}

function setup() {
 createCanvas(1000,700);

  backGround2 = createSprite(500,-6600);
  backGround2.addImage(bgImg);
  backGround2.scale = 1.5; 
  backGround2.velocityY = 2;
 

  /* coin1 = createSprite(240,20,20,10);
  coin1.addAnimation("coin",coinImg);
  coin1.scale = 1;
  coin1.shapeColor = "pink";
  coin1.velocityY = 2;

 coin2 = createSprite(500,20,20,10);
  coin2.addAnimation("coin",coinImg);
  coin2.scale = 1
  coin2.shapeColor = "pink";
  coin2.velocityY = 2;

  coin3 = createSprite(800,20,20,10);
  coin3.addAnimation("coin",coinImg);
  coin3.scale = 1;
  coin3.shapeColor = "pink";
  coin3.velocityY = 2;*/

  girlImage1.frameDelay = 13;
  girl = createSprite(500,600,50,50);
  girl.shapeColor = "red";  
  girl.setCollider("circle",5,-300,30);  
  //girl.debug = true;
  girl.addAnimation('running',girlImage1);
  girl.scale = 0.5; 

  coin1Group = new Group();
  coin2Group = new Group();
}


function draw()
 {   
  background("black");  

  text("SCORE : " + score,70,100);
  /* if(coin1.y > 300)
   {
     coin1.y = coin1.height/2;
   }*/

   /*if(coin2.y > 500)
   {
     coin2.y = coin2.height/2;
     console.log("coin");
   }

   if(coin3.y > 500)
   {
     coin3.y = coin3.height/2;
     console.log("coin");
   }*/ 

  
  if(keyDown ("space"))
  {
    girl.velocityY = girl.velocityY - 4;  
   // gameState = "start"; 
    console.log("ndfauh")
  }
  //if(gameState == "start")
  //{
    if(keyIsDown(RIGHT_ARROW))
    {
      girl.x = girl.x + 3;
    } 

    if(keyDown((LEFT_ARROW)))
    {
      girl.x = girl.x-3;
    }
    
   if(girl.y == 200)
   {
     camera.position.x = 300;
     camera.position.y = girl.y; 
   }

   if(frameCount % 60 == 0)
   {
     coin1 = createSprite(Math.round(random(280,450)),20);
     coin1.addAnimation("coin",coinImg);
     coin1.velocityY = 4;
     girl.depth = coin1.depth;
     girl.depth = girl.depth +1;
    // coin1.debug = true;
     coin1Group.add(coin1);
   }
   if(frameCount % 130 == 0)
   {
     coin2 = createSprite(Math.round(random(500,750)),20)
     coin2.addAnimation("coin",coinImg);
     coin2.velocityY = 4;
     //coin2.debug = true;
     girl.depth = coin2.depth;
     girl.depth = girl.depth + 1;
     coin2Group.add(coin2);
   }
   for(var i = 0; i < coin1Group.length; i = i +1)
   {
   if(girl.isTouching(coin1Group[i]))
   {
     score = score + 1;
     // console.log("score");
     coin1Group[i].destroy();
   }
  }
  for(var i = 0; i < coin2Group.length; i = i +1)
   {
   if(girl.isTouching(coin2Group[i]))
   {
     score = score + 1;
     // console.log("score");
     coin2Group[i].destroy();
   }
  }
  //}

  //if(score == 100)
  //{
    //coin1 = createSprite(Math.round(random(280,450)),20);
    //coin1.addAnimation("coin",coinImg);
    //coin1.velocityY = 4;
  //}
  drawSprites();
}