require.config({
    baseUrl: 'scripts',
    paths: {
        lib: 'lib',
        app: 'app',
		game: '../game',
		capitulos: '../game/capitulos'
    }
});

// Start the main app logic.
require(['lib/deviceReady!',
        "lib/w3color",
        "lib/pixi.min",
        "lib/howler.min",
        
        // load TOC here
        "game/history-toc",
        "app/vncanvas-base",
        "app/vncanvas-cmds",
        "app/vncanvas-media",
        "app/vncanvas-form",
        "app/vncanvas-cform",
        "app/vncanvas-bgnd",
        "app/vncanvas-actor",
        "app/vncanvas-atmo",
        "app/vncanvas-chkpt",
        //"app/vncanvas-grid",
        
        //"game/vnmobile",
        "game/main-config",
        //"game/vnplugins"
],    		
function (isCordova) {
	if (isCordova) {
		
		document.addEventListener( 'pause', onPause.bind( this ), false );
	    document.addEventListener( 'resume', onResume.bind( this ), false );
	
	    // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
	    //console.log(navigator.notification);
		/* vn-canvas mobile initialization */
	    Mobile.init();
	    //Stage.isCordova = true;
		Stage.Init("stage", 720, 480);
		Stage.script.Init("start_chapter");		
	}
	else {
		Config.devCordova  = "notCordova";
		// Not cordova, just initialize vn-canvas
		Stage.Init("stage", 720, 480);
		Stage.script.Init("start_chapter");
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