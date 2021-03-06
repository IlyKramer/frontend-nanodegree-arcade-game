(function () {
   'use strict';
}());
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
	ctx.drawImage(Resources.get(this.sprite),
		this.x, this.y);
};
var Player = function(x, y) {
	this.x = x;
	this.y = y;
	this.player = 'images/char-boy.png';
};

Player.prototype.update = function() {};
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.player),
		this.x, this.y)
};

Player.prototype.checkCollisions = function () {
		var Player = {x: 5, y: 5 , width: 50, height: 50}
		var Enemy = {x: 20, y: 10, width: 10, height: 10}

		if (Player.x < Enemy.x + Enemy.width &&
		Player.x + Player.width > Enemy.x &&
		Player.y < Enemy.y + Enemy.height &&
			Player.height + Player.y > Enemy.y) {

			if (50 > 30 &&
			55 > 20 &&
			5 < 20 &&
			55 > 10) {
			}
      checkCollisions();
    }
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
		case 'up':
			if (this.y > 50) {
				this.y = this.y - 100;
			}
			break;
		case 'down':
			if (this.y < 380) {
				this.y = this.y + 100;
			}
			break;
		default:
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

  /* This function does nothing but it could have been a good place to
   * handle game reset states - maybe a new game menu or a game over screen
   * those sorts of things. It's only called once by the init() method.
   */
document.getElementByID(player).reset();

  });
