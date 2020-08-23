function rainDrop(x, y, yspeed, thick, len) {
	this.x = random(0, width);
	this.y = random(0, height);
	this.yspeed = random(2, 5);
	this.thick = thick;
	this.len = len;

	this.show = function() {
		strokeWeight(this.thick);
		stroke(0, 100, 200);
		line(this.x, this.y, this.x, this.y + this.len);
	}

	this.fall = function() {
		this.y += this.yspeed;
	}

	this.getY = function() {
		return this.y;
	}

	this.setY = function() {
		this.y = -30
		this.x = random(0, width);
	}

	this.getSpeed = function() {
		return this.yspeed;
	}

	this.setThick = function() {
		this.thick = 2;
	}

	this.setLen = function() {
		this.len = random(7, 10);
	}
}
