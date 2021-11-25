function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav")
	marion_kick=("kick.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
}

function draw() {
	game()
}






