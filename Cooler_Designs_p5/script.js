
let drop;
let drops = [];
// sets the rain drop to a location and speed with perpective.
function setup() {
	createCanvas(400, 400);
	for (let i = 0; i < width; i++) {
		drops[i] = new rainDrop(width / 2, height / 2, 1, 1, random(5, 6));
		if (drops[i].getSpeed() >= 3) {
			drops[i].setThick();
			drops[i].setLen();
		}
	}
}
// changes the location of each drop when it reaches the bottom.
function draw() {
	background(225);
	for (let i = 0; i < width; i++) {
		drops[i].show();
		drops[i].fall();
		if (drops[i].getY() > height) {
			drops[i].setY()
		}
	}
}
