'use strict';
var Enemy = function(x, y, speed) {
	this.speed = speed;
	this.x = 400;
	this.y = 400;
	this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
	this.x += this.speed * dt;
	if (this.x > 100) {
		this.x = 100;
	}
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x, y, speed) {
	this.speed = speed;
	this.x = x;
	this.y = y;
	this.player = 'images/char-boy.png';
};

var Player 

Player.prototype.update = function() {
	
};

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.player), this.x, this.y);	

};
Player.prototype.handleInput = function (keys) {
	switch(keys) {
	case 'left' :
		this.x = this.x - 83;
		break;
	}
	
};

var allEnemies = [new Enemy (400, 400), new Enemy(300, 300), new Enemy(200, 200), new Enemy(100, 100)];
var player = new Player(200, 430);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});