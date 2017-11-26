/* ***** BEGIN LICENSE BLOCK *****
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * ***** END LICENSE BLOCK ***** */

"use strict";

// SDK
var windows = require("sdk/windows");
var windowUtils = require("sdk/window/utils");
var { viewFor } = require("sdk/view/core");


// Entry point
exports.main = function (options, callbacks) {
	console.log(options.loadReason);

	// Initialize VerticalTabsReloaded object for each window.
	
	windows.browserWindows.on('open', function(window) {
	for (let window of windows.browserWindows) {
		let lowLevelWindow = viewFor(window);
		let windowID = windowUtils.getOuterId(lowLevelWindow);
		console.log("init window"+windowID);
	}
	});

	windows.browserWindows.on('close', function(window) {
		let lowLevelWindow = viewFor(window);
		let windowID = windowUtils.getOuterId(lowLevelWindow);
		console.log("close window"+windowID);
	});
	
	for (let window of windows.browserWindows) {
		let lowLevelWindow = viewFor(window);
		let windowID = windowUtils.getOuterId(lowLevelWindow);
		console.log("init window "+windowID);
	}

	
};

exports.onUnload = function (reason) {
//dummy
}
