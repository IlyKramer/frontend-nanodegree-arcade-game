'use strict';

var Enemy = function(x, y, speed) {
	this.speed = speed;
	this.x = x;
	this.y = y; 
	this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
	this.x += this.speed * dt;
	if (this.x > 500) {
		this.x = -100;
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

Player.prototype.update = function() {

};

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.player), this.x, this.y);	

};
Player.prototype.handleInput = function (keys) {
	console.log('keys', keys);
		switch(keys) {
			case 'left' : if (this.x > 100) { this.x = this.x - 83;
				break;		
			}  
			case 'right': if (this.x > 100) { this.x = this.x + 83;
				break;
			}
			case 'up': if (this.y > 100) { this.y = this.y - 83;
				break;
			}
			case 'down': if (this.y > 100) { this.y = this.y + 83;
				break;
			}
		};

var allEnemies = [new Enemy (400, 400, 125), new Enemy(300, 300, 126), new Enemy(200, 200, 127), new Enemy(100, 100, 128)];
console.log(allEnemies);
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





