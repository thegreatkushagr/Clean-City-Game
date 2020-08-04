class Paper {
    constructor(x,y,dia) {
      var options = {
          isStatic: false
         // restitution: 0.3
          //density: 1.2
      }
      this.body = Matter.Bodies.circle(x, y, dia, options)

      this.width = dia*2;
      this.height = dia*2;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      fill("blue");
      circle(pos.x, pos.y, this.width, this.height);
    }
  };