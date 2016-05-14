<<<<<<< HEAD
(function () {
   'use strict';
}());
||||||| merged common ancestors
'use strict';

=======
<<<<<<< HEAD
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
||||||| merged common ancestors
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
=======
'use strict';

>>>>>>> 228f1b1be76b7fd6965c95300cf12607189610b0
var Enemy = function(x, y, speed) {
	this.speed = speed;
	this.x = x;
	this.y = y; 
	this.sprite = 'images/enemy-bug.png';
>>>>>>> f4933e0d6f752590361c8372832677aa726b7cf4
};
<<<<<<< HEAD
||||||| merged common ancestors

=======
<<<<<<< HEAD
||||||| merged common ancestors

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
=======

>>>>>>> f4933e0d6f752590361c8372832677aa726b7cf4
>>>>>>> 228f1b1be76b7fd6965c95300cf12607189610b0
Enemy.prototype.update = function(dt) {
<<<<<<< HEAD
	this.x += this.speed * dt;
	if (this.x > 500) {
		this.x = -100;
	}
||||||| merged common ancestors
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};
<<<<<<< HEAD
||||||| merged common ancestors

=======
=======
	this.x += this.speed * dt;
	if (this.x > 500) {
		this.x = -100;
	}
};
>>>>>>> f4933e0d6f752590361c8372832677aa726b7cf4

<<<<<<< HEAD
||||||| merged common ancestors
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
=======
>>>>>>> 228f1b1be76b7fd6965c95300cf12607189610b0
Enemy.prototype.render = function() {
<<<<<<< HEAD
	ctx.drawImage(Resources.get(this.sprite),
		this.x, this.y);
||||||| merged common ancestors
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
=======
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
>>>>>>> f4933e0d6f752590361c8372832677aa726b7cf4
>>>>>>> 228f1b1be76b7fd6965c95300cf12607189610b0
};
<<<<<<< HEAD
||||||| merged common ancestors

=======

<<<<<<< HEAD
||||||| merged common ancestors
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
=======
>>>>>>> 228f1b1be76b7fd6965c95300cf12607189610b0
var Player = function(x, y, speed) {
	this.x = x;
	this.y = y;
	this.player = 'images/char-boy.png';
};
<<<<<<< HEAD
Player.prototype.update = function() {};
||||||| merged common ancestors

Player.prototype.update = function() {

};

=======

Player.prototype.update = function() {

};
>>>>>>> f4933e0d6f752590361c8372832677aa726b7cf4

<<<<<<< HEAD
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
||||||| merged common ancestors
=======
>>>>>>> 228f1b1be76b7fd6965c95300cf12607189610b0
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.player),
		this.x, this.y);

		var Player = {x: 5, y: 5 , width: 50, height: 50}
		var Enemy = {x: 20, y: 10, width: 10, height: 10}
		if (Player.x < Enemy.x + Enemy.width &&
		Player.x + Player.width > Enemy.x &&
		Player.y < Enemy.y + Enemy.height &&
			Player.height + Player.y > Enemy.y) {

			}
			if (50 > 30 &&
			55 > 20 &&
			5 < 20 &&
			55 > 10) {

			}
};
Player.prototype.handleInput = function(
	keys) {
	console.log('keys', keys);
<<<<<<< HEAD
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
||||||| merged common ancestors
		switch(keys) {
			case 'left' : if (this.x > 100) { this.x = this.x - 83;
				break;		
			}  
		case 'right': 
	case 'up': 
case 'down': 
	}
	
=======
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
>>>>>>> f4933e0d6f752590361c8372832677aa726b7cf4

<<<<<<< HEAD
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite),
		this.x, this.y);
>>>>>>> 228f1b1be76b7fd6965c95300cf12607189610b0
};
<<<<<<< HEAD
var allEnemies = [new Enemy(50, 50, 200),
	new Enemy(100, 100, 300), new Enemy(
		150, 150, 400), new Enemy(220, 220,
		500)
];
||||||| merged common ancestors

var allEnemies = [new Enemy (400, 400, 125), new Enemy(300, 300, 126), new Enemy(200, 200, 127), new Enemy(100, 100, 128)];
=======
var Player = function(x, y, speed) {
	this.x = x;
	this.y = y;
	this.player = 'images/char-boy.png';
};
Player.prototype.update = function() {};
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.player),
		this.x, this.y);	
					
||||||| merged common ancestors
=======
var allEnemies = [new Enemy (400, 400, 125), new Enemy(300, 300, 126), new Enemy(200, 200, 127), new Enemy(100, 100, 128)];
>>>>>>> 228f1b1be76b7fd6965c95300cf12607189610b0
console.log(allEnemies);
<<<<<<< HEAD
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
	});
||||||| merged common ancestors
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




=======
var player = new Player(200, 430);
>>>>>>> f4933e0d6f752590361c8372832677aa726b7cf4

<<<<<<< HEAD
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
||||||| merged common ancestors
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
=======
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});




>>>>>>> 228f1b1be76b7fd6965c95300cf12607189610b0

<<<<<<< HEAD
	
||||||| merged common ancestors
=======
>>>>>>> f4933e0d6f752590361c8372832677aa726b7cf4
>>>>>>> 228f1b1be76b7fd6965c95300cf12607189610b0
