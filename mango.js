class Mango {
    constructor(x, y){
     var options = {
         isStatic: true,
         restitution: 0,
         friction: 1,
     }
     this.body = Bodies.circle( x, y, 50, options);
     this.radius = 50;
     World.add(world,this.body);
     this.image = loadImage("mango.png");
     
    }
   display(){
     push();
     imageMode(CENTER);
     image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
     pop();
   }
  };