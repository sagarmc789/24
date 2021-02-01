class Sand {
    constructor(x, y) {
      var options = {
          'restitution':1.3,
          'friction':5,
          'density':1
          
      }
      this.body = Bodies.rectangle(x, y, 10, 10, options);
      this.width = 10;
      this.height = 10;
      this.image = loadImage("rc.jpg");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      /*rectMode(CENTER);
      fill("grey");
      strokeWeight(3);
      stroke("white");
      rect(0, 0, this.width, this.height);*/
      imageMode(CENTER);
     image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };
  