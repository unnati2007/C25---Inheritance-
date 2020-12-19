//extends -  create a child class
class Bird extends Baseclass{
    constructor(x, y) {
      /*super - transfer all the properties of parent class 
      to child class through parent class constructor*/
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");
    };
    //override the display function
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      //used to refer to parent class display function
      super.display();
    }
  };
  