class Keith{
    constructor(x,y){
        this.body = createSprite(x,y,20,20);
        this.image = loadImage('images/keith.png');
        this.body.addImage('keith',this.image);
        this.body.scale = 0.5;
    }
keithActivity(){

if(keyDown(UP_ARROW) || keyDown('w'))
{
  this.body.y -= 4 

}

if(keyDown(DOWN_ARROW) || keyDown('s'))
{
  this.body.y += 4 

}

if(keyDown(RIGHT_ARROW) || keyDown('d'))
{
  this.body.x += 4 

}

if(keyDown(LEFT_ARROW) || keyDown('a'))
{
  this.body.x -= 4 

}

if(keyDown('space') && laserkGroup.length === 0){
    var laser = createSprite(395,200,5,50);
    
    laser.x = this.body.x;
    laser.y = this.body.y;
    laser.velocityY = -5;
    laser.lifetime = 90;   
    laserkGroup.add(laser);
}

    
    
  

}

    

}