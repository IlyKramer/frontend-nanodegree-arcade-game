(function () {
   'use strict';
}());
var Enemy = function(x, y, speed) {
	this.speed = speed;
	this.x = x;
	this.y = y;
	this.width = 101;
	this.height = 171;
	this.sprite = 'images/enemy-bug.png';
};
Enemy.prototype.update = function(dt) {
	this.x += this.speed * dt;
	if (this.x > 500) {
		this.x = -100;
	}

};


Enemy.prototype.checkCollisions = function() {
	if (
		((this.x + this.width) >= player.x) &&
		(this.x <= (player.x + player.width)) &&
		((this.y + this.height )>= player.y) &&
		(this.y <= (player.y + player.height))
          
           ){
                player.x = 200;
                player.y = 400;
        }
}

Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite),
		this.x, this.y);
};
var Player = function(x, y, speed) {
	this.x = x;
	this.y = y;
	this.player = 'images/char-boy.png';
};
Player.prototype.update = function() {};
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.player),
		this.x, this.y);	
					

};
Player.prototype.handleInput = function(
	keys) {
	console.log('keys', keys);
	switch (keys) {
		case 'left':
			if (this.x > 50) {
				this.x = this.x - 100;
			}
			break;
		case 'right':
			if (this.x < 380) {
				this.x = this.x + 100;
			}
			break;
		case 'down':
			if (this.y < 380) {
				this.y = this.y + 100;
			}
			break;
		case 'up':
			if (this.y > 50) {
				this.y = this.y - 100;
		
			}
			break;
				 
				
	}
};
var allEnemies = [new Enemy(50, 50, 200),
	new Enemy(100, 100, 300), new Enemy(
		150, 150, 400), new Enemy(220, 220,
		500)
];
console.log(allEnemies);
var player = new Player(200, 380);
document.addEventListener('keyup',
	function(e) {
		var allowedKeys = {
			37: 'left',
			38: 'up',
			39: 'right',
			40: 'down'
		};
		player.handleInput(allowedKeys[e.keyCode]);
		player.prototype.reset = function (
			
		) {};
	});
