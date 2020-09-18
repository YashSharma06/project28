class Tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y, 700, 550, options);
      this.width = 700;
      this.height = 550;
      World.add(world, this.body);
      this.image = loadImage("tree.png");
    }
    display(){
      push ();  
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop ();
    }
  };