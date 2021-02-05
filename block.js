
  class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
         
        
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.visability=255
    }
    display(){
      if (this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke ('green')
      strokeWeight(5)
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        World.remove(world,this.body)
      this.visability=this.visability-10
      }
      
    }
    score(){
      if (this.visability<0&&this.visability>-10){
        score=score+1
      }
    }
  };
            