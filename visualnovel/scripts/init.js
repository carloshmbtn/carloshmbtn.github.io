require.config({ 
    baseUrl: "scripts",
    paths: {
        lib: 'lib',
        app: 'app',
        // add game path here as needed, e.g.
        game: 'game'
    },
    waitSeconds: 0
});

require(['lib/deviceReady!',
        "lib/w3color",
        "lib/pixi.min",
        "lib/howler.min",
        
        // load table of contents
        "game/vntoc",
        // load game engine; remove unneeded
        "app/vncanvas-base",
        "app/vncanvas-cmds",
        "app/vncanvas-vars",
        "app/vncanvas-media",
        "app/vncanvas-form",
        "app/vncanvas-cform",
        "app/vncanvas-bgnd",
        "app/vncanvas-actor",
        "app/vncanvas-atmo",
        "app/vncanvas-chkpt",
        "app/vncanvas-grid",
        // load optional mods; remove if not used
        "app/vnmod-rpg-0.8",
        "app/vnmod-rpg-data",
        "app/vnmod-rpg-forms",
        "app/vnmod-rpg-macros",
        // load configs/plugins; remove unused
        "game/vnmobile",
        "game/vnconfig",
        "game/vnplugins"
],    		
function (isCordova) {
    if (isCordova) {
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );

		// TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        /* vn-canvas mobile initialization */
        Mobile.init();
        Stage.Init("stage", 720, 480);
        Stage.script.Init("vnmain");		
    }
    else {
		var hidden = "hidden";
		var visibilityChange = "visibilitychange";
		var state = "visibilityState";
		if (typeof document.hidden !== "undefined") {
			// do nothing, use default
		} else if (typeof document.mozHidden !== "undefined") {
			hidden = "mozHidden";
			visibilityChange = "mozvisibilitychange";
			state = "mozVisibilityState";
		} else if (typeof document.msHidden !== "undefined") {
			hidden = "msHidden";
			visibilityChange = "msvisibilitychange";
			state = "msVisibilityState";
		} else if (typeof document.webkitHidden !== "undefined") {
			hidden = "webkitHidden";
			visibilityChange = "webkitvisibilitychange";
			state = "webkitVisibilityState";
		}
		document.addEventListener(visibilityChange, function() {
			if (document[state] == hidden)
				Helper.pauseAudio();
			else
				Helper.resumeAudio();
		}, false);
		   
        Config.devCordova  = "notCordova";
        // Not cordova, just initialize vn-canvas
        Stage.Init("stage", 720, 480);
        Stage.script.Init("vnmain");		
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
        Mobile.pause();
    };
    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
        Mobile.resume();
    };
});        
