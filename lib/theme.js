(function(module) {
	"use strict";

	var Theme = {};

	Theme.defineWidgetAreas = function(areas, callback) {

		callback(null, areas);
	};

	module.exports = Theme;

}(module));