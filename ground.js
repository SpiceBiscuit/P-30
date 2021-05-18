class Ground{
          constructor(x,y,width,height,body) {
          var options = {
              isStatic: true
          }
          this.x=x;
          this.y=y;
          this.width = width;
          this.height = height;
          this.body = Bodies.rectangle(10,600,width,height,options);
          World.add(world,this.body);
        }
        display(){
          var pos =this.body.position;
          rectMode(CENTER);
          fill("brown");
          rect(pos.x, pos.y, this.width, this.height);
        }
}