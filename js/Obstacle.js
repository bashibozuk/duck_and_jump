/**
 * 
 */

Obstacle.Level = {
	Top: 2,
	Middle: 1,
	Bottom: 0
};

Obstacle.Dom = {
	Width: 70,
	Height: 70,
	BgColor: 'red'
};

function Obstacle($dom) {
	
	var _$dom = $dom;
	var _level = this.generateLevel();
	var _isActive = false;
	
	this.getDom = function() {
		return _$dom;
	}
	
	this.setDom = function($dom) {
		_$dom = $dom;
	}
	
	this.getLevel = function() {
		return _level;
	}
	
	this.setLevel = function(level) {
		_level = level;
	}
	
	this.getIsActive = function() {
		return _isActive;
	}
	
	this.setIsActive = function(isActive) {
		_isActive = isActive;
	}
}

Obstacle.prototype.appear = function() {
	this.getDom().css({
		position: 'absolute',
		right: '-10px',
		bottom: this.getBottom() + 'px' ,
		width: Obstacle.Dom.Width + 'px',
		height: Obstacle.Dom.Height + 'px',
		'background-color': Obstacle.Dom.BgColor,
		'display' : 'block'
	});
	
	this.setIsActive(true);
}

Obstacle.prototype.hide = function() {
	console.log(this);
	this.getDom().css({
		'display' : 'none'
	});
	this.setLevel(this.generateLevel());
	this.setIsActive(false);
}

Obstacle.prototype.move = function() {
	
	var _this = this;
	
	this.getDom().animate({
		right: '100%'
	},1500, function() {
		_this.hide()
	});
}

Obstacle.prototype.getBottom = function() {
	var initialBottom = 20;
	
	return initialBottom + (this.getLevel() * Obstacle.Dom.Height);
}

/**
 * Randomly geenerates number between 1-3 
 * @returns {Number}
 */
Obstacle.prototype.generateLevel = function() {
	var rand = Math.floor(Math.random() * 10) % 3;
	
	if (rand == 2) {
		return Obstacle.Level.Top;
	}
	
	if (rand == 1) {
		return Obstacle.Level.Middle;
	}
	
	return Obstacle.Level.Bottom;
}