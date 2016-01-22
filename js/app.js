commit

// Enemies our player must avoid

var Enemy = function(x, y, speed) {
	this.speed = speed;
	this.x = x;
	this.y = y;
    this.sprite = 'images/enemy-bug.png'; 
	this.water = 'images/water-block.png';
	this.grass = 'images/grass-block.png';
	this.stone = 'images/stone-block.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	this.x += this.speed * dt;
	if (this.x > 505) {
		this.x = 606;
	}
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite));
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
	this.player = 'images/char-boy.png';
	this.player = 'images/char-cat-girl.png';
	this.player = 'images/char-horn-girl.png';
	this.player = 'images/char-princess-girl.png';	
};

Player.prototype.update = function () {
	
};

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.boy), this.cat-girl, this.horn-girl, this.pink-girl, this.princess.girl);	

};
Player.prototype.handleInput = function (keys) {
	switch(keys) {
	case 'left' :
		this.x = this.x - 83;
		break;
	}
	
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [new Enemy ("water"), new Enemy("stone"), new Enemy("grass"), new Enemy("enemy-bug")];
// Place the player object in a variable called player
var player = new Player();


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


