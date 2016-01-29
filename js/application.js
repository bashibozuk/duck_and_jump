var Application = {
		
		config: {},
		
		init: function(conf) {
			
			this.config = $.extend({}, this.config, conf);
			this.initEvents();
			for (var i in this.config) {
				var $panel = $('#' + this.config[i]);
				if ($panel.length) {
					$panel.hide();
				}
			}
			
			this.onHashChange(undefined, window.location.hash.replace('#', ''));
		},
		
		initEvents: function() {
			var _this = this;
			$(window).on('hashchange', function(e) {
				
				var evt = e.originalEvent;
				var oldHash = evt.oldURL.split('#');
				if (oldHash[1]) {
					oldHash = oldHash[1];
				} else {
					oldHash = '';
				}
				
				var newHash = evt.newURL.split('#');
				if (newHash[1]) {
					newHash = newHash[1];
				} else {
					newHash = '';
				}
				_this.onHashChange(oldHash, newHash);
			});
		},
		
		onHashChange: function(oldHash, newHash) {
			if (oldHash !== undefined) {
				var $oldPanel = $('#' + this.config[oldHash]);
				if ($oldPanel.length) {
					$oldPanel.hide();
				}
			}
			
			if (newHash !== undefined) {
				var $newPanel = $('#' + this.config[newHash]);
				if ($newPanel.length) {
					$newPanel.show();
				}
			}
		}
}