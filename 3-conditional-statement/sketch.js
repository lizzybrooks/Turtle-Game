//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;


function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 4);

}

function draw(){
	background(220);

  me.drawMe();
  me.moveMe();

  if (frameCount % 35 == 0) {
      let  b = new Ball(random(0,width), 0, -3);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("green");
        strokeWeight(5);
    		fill("green");
		    ellipse(this.x,this.y,20,20);

	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move left by speed
       this.y = this.y - 15;
    }

    if (keyIsDown(RIGHT_ARROW)) { //if you hold the up arrow, move left by speed
       this.x += this.speed;
  	}

  if (keyIsDown(LEFT_ARROW)) { //if you hold the up arrow, move left by speed
     this.x = this.x - this.speed;
   }
}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(0);
    	fill("blue");
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x;
		this.y = this.y-this.speed;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
    		}
  	}

}
