class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.pathy = [];  //empty array
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    
    //tracking the bird in every frame
    this.pathy.push([this.body.position.x, this.body.position.y]);
    for (var i = 0; i < this.pathy.length; i=i+1){
      image(this.smoke, this.pathy[i][0], this.pathy[i][1]);
    } 
    
    
  }
}

/*
pathy[0][0], pathy[0][1]
pathy[1][0], pathy[1][1]
pathy[2][0], pathy[2][1]
pathy[3][0], pathy[3][1]
.
.
.
pathy[length-1][0], pathy[length-1][1]

var i = 0;
i = i + 1;
i < length;

for(var i = 0; i < length; i++){}

Whenever trying to access every element of an array ---> FOR LOOP

*/
