///////////////////////////////////////////////////////////////////////////////
// VN-CANVAS Mobile Support
//
// This adds mobile app support for vn-canvas thru Apache Cordova
//
// Requirements:
//	Cordova project created via Cordova CLI
//	Plugins loaded via Cordova CLI or plugman
//
// Functions:
// 	Mobile.init()	- handles game specific initialization using Cordova
//					- such as checking for Cordova plugins and setting game
//						configuration and platform
//	Mobile.pause()	- handler when game is paused
//	Mobile.resume() - handler when game is resumed
//
// Limitation:
//	Checked on android only. For iOS, etc., some customization may be required.
//
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Directives
///////////////////////////////////////////////////////////////////////////////
"use strict";

///////////////////////////////////////////////////////////////////////////////
// Mobile platform
///////////////////////////////////////////////////////////////////////////////
var Mobile = {
	init: function() {
		Stage.isCordova = true;		// this is required setting
		console.log("console.log works well");
		
		if (device) {
			// set these to Config that can be accessed in-game
			// for whatever reason/purpose there may be
			Config.devCordova  = device.cordova;
			Config.devModel    = device.model;
			Config.devPlatform = device.platform;
			Config.devUUID     = device.uuid;
			Config.devOSVer    = device.version;
			
			console.log("Version : " + Config.devCordova);
			console.log("Model   : " + Config.devModel);
			console.log("Platform: " + Config.devPlatform);
			console.log("UUID    : " + Config.devUUID);
			console.log("OS ver  : " + Config.devOSVer);
		}
		
		// check other Cordova devices here, for 
		//if (StatusBar)
		//	StatusBar.show();
		
		// mobile specific Config
		// disable perspective, mobile has no mouse
		Config.actorPerspective = false;
		// use buttons for menu, esp for small screens
		Config.menuUseButtons = true;
		// temporary, video doesn't play
		Config.movieOnCanvas = false;
	},
	pause: function() {
		console.log("Game: paused");
		// TODO: Automatically save progress, call checkpoint
		//   may or may not be needed
		checkpoint({save:"pause_auto_chkpt"});
		// TODO: Stop all audio playing
		Helper.pauseAudio();

	},
	resume: function() {
		console.log("Game: resume");
		// TODO: Restore progress here, restore checkpoint
		checkpoint({load:"pause_auto_chkpt"});
		// TODO: Resume audio play
		Helper.resumeAudio();
	}
}
