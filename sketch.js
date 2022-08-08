var dino 
var cactus 

var dinoimage 
var cactusimage 

var cactuses = []

function setup() {
	createCanvas(500,300)
	frameRate(75)
	dino = new Dino()
	dino.increment()

	for(var i = 0; i < cactuses.length; i++){
		cactuses[i] = new Cactus()
	}



}
var generate = true 

var score = 0



setInterval(()=> {
	if (generate) {
		cactuses.push(new Cactus())
	};
}, 1200)

function preload() {
	dinoimage = loadImage("trex.png")
	cactusimage = loadImage("cactus.png")
}




function keyPressed() {
	if (keyCode == 32 ) {
		dino.jump()
	};
}




 
var asd = true
function draw() {



	background(255)
	
	dino.show()
	dino.down()






	for(var i = 0; i < cactuses.length; i++){
		cactuses[i].show()
		cactuses[i].move()
	}
	
	dino.detect()
	dino.displayscore()	
	

}


var times = 100
var intervalid

var jumpky = true 

function Dino() {
	this.x = 0
	this.y = 245
	this.w = 65
	this.h = 55


	this.yspeed = 7
	this.gravity = 0.5

	this.lift = -10

	this.show = function () {
		image(dinoimage,this.x,this.y,this.w,this.h)

	}
	this.down = function () {
		this.y += this.yspeed
		this.yspeed += this.gravity

		if (this.y + this.h >= height) {
			this.y = 245
		};
	}
	this.jump = function () {
		if (this.y + this.h == height) {
			if (jumpky) {
				this.yspeed = this.lift
			};
		};
	}
	this.detect = function () {
		for(var i = 0; i < cactuses.length; i++){


			if ((this.x + this.w >= cactuses[i].x && this.x + this.w < cactuses[i].x + cactuses[i].w) || (this.x > cactuses[i].x && this.x <= cactuses[i].x + cactuses[i].w)) {
				if (this.y + this.h >= cactuses[i].y && this.y + this.h < cactuses[i].y + cactuses[i].h) {
						

					this.yspeed = 0

					asd = false 
					generate = false 
					jumpky = false 

					clearInterval(intervalid)
				};
			};

			
		}
	}
	this.displayscore = function () {
		textSize(40);
		text(score, 15, 35)
	}
	this.increment = function () {
		intervalid = setInterval(()=> {
			score += 1 
		},times)
	}
	this.clear = function () {
		if (restart == false ) {
			score = 0
			cactuses = []
			cactuses.push(new Cactus())
		};
	}





}

function Cactus() {
	this.x = random(480,500)
	this.y = 247
	this.w = 30  
	this.h = 55

	this.xspeed = -6

	this.show = function () {
		image(cactusimage,this.x,this.y,this.w,this.h)

	}
	this.move = function () {
		if (asd) {
			this.x += this.xspeed
		};
	}

	
}