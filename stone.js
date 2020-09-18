class Stone {
 constructor(x, y){
    //var options= {
    // isStatic: false,
    // restitution: 0,
    // friction: 1,
    // density: 1.2
    //}
    this.body = Bodies.circle( x, y, 50);
    this.radius = 50;
    World.add(world,this.body);
    this.image = loadImage("stone.png");
 }
  display() { 
    push ();
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
    pop ();
  }
};