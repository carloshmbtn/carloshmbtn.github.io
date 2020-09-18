// Define as many themes as you like here
Theme1 = {
	// Canvas Form
	//	default form style
	formFontStyle:		"bold 20px Verdana #E0E0E0",
	//	tooltip style
	formTipStyle:		"normal 12px Verdana black",
	// 	tooltip background color
	formTipColor:		"#FFFFE0",
	//	element default background color
	formElementBack:	"#FFFFE0",

	// Script/Dialog Box
	// 	default font style
	boxFontStyle:		"normal 14px Verdana white",
	//	dim box background
	// 		if only one color, solid fill
	// 		if two colors, gradient fill
	boxDimStyle:		"#808080 #000000",
	//	image box background
	boxImageStyle:		"res/back.png",
	// 	name tag style	
	boxTagStyle:		"bold 16px Verdana #c8ffc8",
	// 	menu hilite color	
    //  WebGL: deprecated
	boxMenuHilite:		"#404040",
	//	speech balloon fill style
    //  WebGL: second parameter ignored
	balloonFillStyle:	"#000000 #808080",
	//	speech balloon outline color
	balloonStrokeStyle: "#FFFFFF",
	
	// Automap
	//	automap hide mask color
	automapMask:		"#C0C0C0",
	//	automap pointer fill and stroke
	automapPointer:		"#FF0000 #800000",
	
	// Menu as Buttons styles
	menuPrompt:			"rgba(255,127,39,0.5)",
	menuBase:			"rgba(64,64,64,0.5)",
	menuHover:			"rgba(128,128,128,0.5)",
	menuClick:			"rgba(255,128,0,0.75)",   

	// Button sound effects
	//seHover:			"seHover-filename",
	//seClick:			"seClick-filename",
};

// Globals for configuration
Config = {
	// Specify theme list
	//	add all defined themes in themeList
	//	declare as name-theme pair
	themeList:			["Default Theme", Theme1],
	//	specify a startup theme
	activeTheme:		Theme1,

	// GL Renderer
	//	auto - autodetect renderer
	//  webgl - force webgl renderer but checks first if supported
	//  canvas - force canvas2d renderer, some features may not work
	glRenderer:			"auto",

	// Volume
	// 	value is 0 to 1; set 0 to mute
	volumeAudio:		0.9,
	volumeVideo:		0.9,
	
	// Script/Dialog Box
	//	note: allowing user to change box dimensions might
	//		affect dialog, eg. if user set box too small, 
	//		some dialogs might not show; hence, this is not
	//		added as part of configurable theme,  
	boxWidth:			0.75,
	boxHeight:			0.25,
	boxFullHeight:		0.80,
	//  scroll speed relative to a preset speed
	boxScrollSpeed:		1.0,
	//	speech balloon size
	balloonWidth:		0.5,
	balloonHeight:		0.2,
	//  autotype settings
	boxAutotype:		true,
	boxAutotypeSpeed:	1.0,
	menuAutotype:		false,
	//	append override behavior
	//  true: append is default textbox behavior
	//  false: specify append parameter as needed
	boxAppendOverride:	true,
	
	// Menu as cform buttons
	//	use instead of scriptbox, esp for small screens
	//	menuheight is height of one menuitem as percentage of canvas height
	//	menuwidth is controlled by boxWidth
    //  WebGL: menuUseButtons always true
	menuUseButtons:		true,
	menuHeight:			0.1, 

	// Actors
	// 	show actor avatar in script box	
	actorShowAvatar:	true,
	//	emulate depth perspective when mouse move
    //  WebGL: deprecated
	actorPerspective:	false,
	//	actor vertical position
	//		<1.0 is above bottom level of viewport
	//		1.0 is at bottom level of viewport
	//		>1.0 may be needed if actorPerspective is true
	actorYPosition:		1.0,
	//  actor sprite is full body (experimental)
    //  WebGL: fullBody sprite center is at bottom of viewport for z_order=0
	//		if sprite is full body, z_order determines whether actor is
	//		near background or closeup; scale and offset is automatically
	//		computed by the engine, so these do not work as in normal mode
	//		actorYPosition is also overriden
	//		actorRange specifies z-value range from +actorRange to -actorRange
    //      actorPersOffset specifies how much actor position is offset to compensate
    //          for parallax when fullbody is true
	actorFullBody:		true,
	actorRange:			8,
    actorPersOffset:    0,
	
	// Audio
	//  specify the audio formats supported
	//		sounds must have all of the formats
	//		given below, or the browser might return
	//		a file non-existent error
	audioFormat:		["webm", "ogg", "mp3"],
	
	// Movie
	// 	relative to viewport, from 0 to 1
	movieSize:			0.9,
	//	support for video-on-canvas
    // WebGL: always ignore
	movieOnCanvas:		false,
	//  specify the movie formats supported
	//		videos must have the all of the formats
	//		given below, or the browser might return
	//		a file non-existent error
	movieFormat:		["mp4", "ogv"],

	// Transitions/Effects
	// 	duration in seconds
	transTime:			1.0,
	
	// Gameplay Settings
	// 	this setting filters mature content
	gameMatureFilter:	true,
	//	list of filtered words if gameMatureFilter is on
	gameBadWords:		["fuck", "wank", "shit", "pussy", "cunt", "dick", "bitch"],
	//	replacement text for auto filtered words
	gameAltWord:		" ****",
	//	allow custom javascript to execute
	gameAllowMacro:		true,
	//	allow custom preload
	gameAllowPreload:	true,
	//	allow use of named checkpoints
	gameNamedCheckpts:	false,
	//	allow look ahead so the most immediate resources after the
	//	current script line may be preloaded
	gameAllowLookAhead: true,
	
	// Device type
	// for Cordova device
	devCordova:			"",
	devModel:			"",
	devPlatform:		"",
	devUUID:			"",
	devOSVer:			"",
    
    // Splash
    // Splash: do not set below 0
    // This will display a small logo at start of the game
    //  Note: this is all the attribution that is required
    //  Removing the splash logo constitutes a violation of the license
    splashSize:         0.75,
    splashDuration:     2.4,
};