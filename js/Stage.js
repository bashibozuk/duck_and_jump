/**
 * 
 */
Stage.Timer = 2500;

function Stage() {
	
	var _player = new Player($('#player'));
	
	var _obstacle = new Obstacle($('#obstacle'));
	
	var _interval;
	
	var _lastActiveTime = 0;
	
	var _lastTimeChanged = 0;
	
	var _timeStarted = 0;
	
	this.getPlayer = function() {
		return _player;
	}
	
	this.getObstacle = function() {
		return _obstacle;
	}
	
	this.setInterval = function(interval) {
		_interval = interval;
	}
	
	this.getInterval = function() {
		return _interval;
	}
	
	this.setLastActiveTime = function(time) {
		_lastActiveTime = time;
	}
	
	this.getLastActiveTime = function() {
		return _lastActiveTime;
	}
	
	this.setLastTimeChanged = function(time) {
		_lastTimeChanged = time;
	}
	
	this.getLastTimeChanged = function() {
		return _lastTimeChanged;
	}
	
	this.setTimeStarted = function(time) {
		_timeStarted = time;
	}
	
	this.getTimeStarted = function() {
		return _timeStarted;
	}
}

Stage.prototype.start = function() {
	
	var _this = this;
	_this.setTimeStarted(Date.now());
	_this.updateTimer(Date.now());
	var interval = window.setInterval(function() {
		var time = Date.now();
		if (time - _this.getLastActiveTime() > Stage.Timer) {
			_this.getObstacle().appear();
			_this.getObstacle().move();
			_this.setLastActiveTime(time);
		}
		
		_this.updateTimer(time);
		
	}, 200);
	
//	this.setInterval(interval);
}

Stage.prototype.stop = function() {
	if (this.getInterval() !== undefined) {
		window.clearInterval(this.getInterval());
	}
}

Stage.prototype.updateTimer = function(currentTime) {
	if (currentTime - this.getLastTimeChanged() > 800) {
		var timespan = Math.floor((currentTime - this.getTimeStarted()) / 1000);
		
		var minutes = Math.floor(timespan / 60)
		var seconds = timespan % 60;
		
		var html = '';
		html +=  minutes >= 10 ? minutes : '0' + minutes;
		html += ':';
		html +=  seconds >= 10 ? seconds : '0' + seconds;
		
		$('#time-container span').html(html);
		this.setLastTimeChanged(currentTime);
	}
}