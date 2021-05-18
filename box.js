class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.09,
        'density':1.0
    }
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.visibility = 255;
    World.add(world, this.body);
  }

  score(){
    if (this.visibility<0 && this.visibility>-105){
      score++;
      
    }
  }
  
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    
 
    if(this.body.speed < 3){
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }  
     else{
       World.remove(world, this.body);
       push();
       this.visibility = this.visibility -5;
       pop();
     }
  }
}
