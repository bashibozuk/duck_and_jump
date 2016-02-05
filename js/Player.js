/**
 * 
 */

Player.States = {
	Jumped: 4,
	Standing: 3,
	Ducked: 2,
	Down: 1
};

Player.Defaults = {
	Health: 3,
	Points: 0,
	State: Player.States.Standing,
	Name: 'Unknown'
};

function Player($dom) {
	
	var _$dom = $dom;
	
	var _health = Player.Defaults.Health;
	
	var _score = Player.Defaults.Points;
	
	var _state = Player.Defaults.State;
	
	var _name = Player.Defaults.Name;
	
	this.getDom = function() {
		return this._$dom;
	}
	
	this.getHealth = function() {
		return this._health;
	}
	
	this.setHealth = function(health) {
		this._health = health;
	}
	
	this.getPoints = function() {
		return this._points;
	}
	
	this.setPoints = function(points) {
		this._points = points;
	}
}