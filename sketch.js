const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var armyGroup;
var armySet = 1;
var edges;
var player;
var laserkGroup;
var laseraGroup;




function preload(){

  


}




function setup() {
  createCanvas(displayWidth-100,displayHeight);
  

armyGroup = new Group();
laserkGroup = new Group();
laseraGroup = new Group();

player = new Keith(displayWidth/2,displayHeight/2);



engine = Engine.create();
world = engine.world;
}
  
function draw() {
  background('black');
  edges = createEdgeSprites();
  camera.position.x = player.body.x;
  camera.position.y = player.body.y;

  edges[0].visible = false;
  edges[1].visible = false;
  edges[2].visible = false;
  edges[3].visible = false;

switch(armySet)
{
  case 1 :for(var i = 0;i<2;i++)
         {
          armyGroup.add(new Army(random(100,displayWidth-100),50).body);
         armySet = 'set1';
         }
         break;
 case 2 :for(var i = 0;i<2;i++)
        {
         armyGroup.add(new Army(random(100,displayWidth-100),-100).body);
         armySet = 'set2';
         }
         break; 

}
armyDestruction();
player.keithActivity();
armyDuty();
//console.log(armyGroup[5]);
  drawSprites();
}

function armyDuty(){

for(var j = 0; j<armyGroup.length && armyGroup.length>0 ; j++)
{
//armyGroup[j].armyActivity();
//console.log(armyGroup[j]);
armyGroup[j].bounceOff(edges);
console.log(frameCount);
if(frameCount%60 === 0){
  var laserA = createSprite(395,200,5,50);
  console.log('armyActiveted');
  laserA.x = armyGroup[j].x;
  laserA.y = armyGroup[j].y;
  laserA.velocityY = 5;
  laserA.lifetime = 90;   
  laseraGroup.add(laserA);
}

}

}

function armyDestruction(){

for(var i=0;i<armyGroup.length && laserkGroup.length>0; i++){
  if(armyGroup[i].isTouching(laserkGroup))
  {
    armyGroup[i].destroy();

    if(armyGroup.length === 0 && armySet === 'set1')
    {
    armySet = 2;
     } 

  }
}



}


