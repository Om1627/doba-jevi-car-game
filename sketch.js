var player;
var ground;
var playerImg,trackImg,groundImg,backgroundImg,enemyImg;
var state="start"
var bg;
var limit;
 
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10,enemy11,enemy12,enemy13,enemy14,enemy15,enemy16,enemy17,enemy18,enemy19,enemy20;

function preload(){
     playerImg =loadImage("car1.png");
     trackImg=loadImage("track.png");
     backgroundImg=loadImage("bg.jpg");
     groundImg=loadImage("ground.png")
     enemyImg=loadImage("car4.png");
}



function setup(){
   
    createCanvas(displayWidth-20,displayHeight-30);
  
   

    player = createSprite(700,500,200,50);
    enemy1= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy2= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy3= createSprite(random(350,1010), random(-4000,0),20,50);

    enemy4= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy5= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy6= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy7= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy8= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy9= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy10= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy11= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy12= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy13= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy14= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy15= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy16= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy17= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy18= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy19= createSprite(random(350,1010), random(-4000,0),20,50);
    enemy20= createSprite(random(350,1010), random(-4000,0),20,50);


    enemy1.addImage(enemyImg);
    enemy2.addImage(enemyImg)
    enemy3.addImage(enemyImg)
    enemy4.addImage(enemyImg)
    enemy5.addImage(enemyImg)
    enemy6.addImage(enemyImg)
    enemy7.addImage(enemyImg)
    enemy8.addImage(enemyImg)
    enemy9.addImage(enemyImg)
    enemy10.addImage(enemyImg)
    enemy11.addImage(enemyImg)

    enemy12.addImage(enemyImg)
    enemy13.addImage(enemyImg)
    enemy14.addImage(enemyImg)
    enemy15.addImage(enemyImg)
    enemy16.addImage(enemyImg)
    enemy17.addImage(enemyImg)
    enemy18.addImage(enemyImg)
    enemy19.addImage(enemyImg)
    enemy20.addImage(enemyImg)





 player.addImage("car",playerImg)
   
   
}

function draw(){
    background(backgroundImg);
    image(groundImg,0,200,displayWidth,displayHeight)
    image(trackImg,100,-displayHeight*5+200,displayWidth-200,displayHeight*5)

    camera.position.y=player.y;

 

    if(player.collide(enemy1)){
        player.visible=false;
    }
    if(player.collide(enemy2)){
        player.visible=false;
    }
    if(player.collide(enemy3)){
        player.visible=false;
    }
    if(player.collide(enemy4)){
        player.visible=false;
    }
    if(player.collide(enemy5)){
        player.visible=false;
    }
    if(player.collide(enemy6)){
        player.visible=false;
    }
    if(player.collide(enemy7)){
        player.visible=false;
    }
    if(player.collide(enemy8)){
        player.visible=false;
    }
    if(player.collide(enemy9)){
        player.visible=false;
    }
    if(player.collide(enemy10)){
        player.visible=false;
    }
    if(player.collide(enemy11)){
        player.visible=false;
    }
    if(player.collide(enemy12)){
        player.visible=false;
    }
    if(player.collide(enemy13)){
        player.visible=false;
    }
    if(player.collide(enemy14)){
        player.visible=false;
    }
    if(player.collide(enemy15)){
        player.visible=false;
    }
    if(player.collide(enemy16)){
        player.visible=false;
    }
    if(player.collide(enemy17)){
        player.visible=false;
    }
    if(player.collide(enemy18)){
        player.visible=false;
    }
    if(player.collide(enemy19)){
        player.visible=false;
    }
    if(player.collide(enemy20)){
        player.visible=false;
    }

        
      
      

    
    


    if(player.x>350&&keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    else if(player.x<1010&&keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    if(keyWentDown(32)&&state==="start"){

        state="pause"
    }
    
    else if(state==="pause"&&keyWentDown(32)) {
        state="start"

    }
    

    if(state==="start"&&player.y>-3500){
   
        writePosition(0,-5-Math.round(frameCount/50)/4)
    }


    
 
    drawSprites();
}

function writePosition(x,y){

       player.x=player.x+x
       player.y=player.y+y
   }



   
 


   




