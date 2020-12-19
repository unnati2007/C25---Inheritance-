class Log extends Baseclass {
    constructor(x, y, height, angle) {
      super(x,y,20,height,angle);
      this.image = loadImage("sprites/wood2.png");
      //used to set the angle for log
      Matter.Body.setAngle(this.body, angle);
     }
}
  