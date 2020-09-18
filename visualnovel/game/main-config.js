// Globals for configuration
Theme1 = {
	formFontStyle:		"bold 16px 'Courier New' #404040",
	formElementBack:	"#FFFFE0",
	formTipColor:		"#FFFFE0",
	formTipStyle:		"normal 12px sans-serif black",
	
	boxFontStyle:		"bold 16px 'Courier New' white",
	boxDimStyle:		"#000000 #808080",
	boxImageStyle:		"demo/dummy.png",
	boxTagStyle:		"bold 18px Verdana #c8ffc8",
	boxMenuHilite:		"#c08040",
	
	balloonFillStyle:	"#000000 #808080",
	balloonStrokeStyle: "#FFFFFF",
	
	automapMask:		"#C0C0C0",
	automapPointer:		"#FF0000 #000000",

	menuPrompt:			"rgba(256,256,256,0.8)",
	menuBase:			"rgba(224,224,224,0.8)",
	menuHover:			"orange",
	menuClick:			"yellow",

	seHover:			"demo/seHover",
	seClick:			"demo/seClick",
}

Theme2 = {
	formFontStyle:		"normal 16px Arial #404040",
	formElementBack:	"#FFFFE0",
	formTipColor:		"#FFFFE0",
	formTipStyle:		"normal 12px sans-serif red",
	
	boxFontStyle:		"bold 16px Verdana white",
	boxDimStyle:		"#800000 #808080",
	boxImageStyle:		"demo/box-image.png",
	boxTagStyle:		"bold 18px Verdana #ff8000",
	boxMenuHilite:		"#c08040",

	balloonFillStyle:	"#800000 #808080",
	balloonStrokeStyle: "#FF0000",

	automapMask:		"#C0C0C0",
	automapPointer:		"#FF0000 #000000",

	menuPrompt:			"rgba(256,256,256,0.8)",
	menuBase:			"rgba(224,224,224,0.8)",
	menuHover:			"orange",
	menuClick:			"yellow",
}

Config = {
	// Themes
	themeList:			["Simplify", Theme1, 
						 "Radical", Theme2],
	activeTheme:		Theme1,

	// GL Renderer
	glRenderer:			"auto",

	// Volume
	volumeAudio:		0.9,
	volumeVideo:		0.9,
	
	// Script Box
	boxWidth:			0.75,
	boxHeight:			0.25,
	boxFullHeight:		0.875,
	boxScrollSpeed:		1.0,
	balloonWidth:		0.5,
	balloonHeight:		0.2,
	boxAutotype:		true,
	boxAutotypeSpeed:	1.0,
	menuAutotype:		false,
	boxAppendOverride:	true,
	
	// Menu as cform buttons
	menuUseButtons:		true,
	menuHeight:			0.1,

	// Actors
	actorShowAvatar:	true,
	actorPerspective:	true,
	actorYPosition:		1.125,

	// Audio
	audioFormat:		["webm", "ogg", "mp3"],

	// Movie
	movieSize:			0.75,
	movieOnCanvas:		true,
	movieFormat:		["mp4", "ogv"],
	
	// Transitions
	transTime:			1.0,
	
	// Gameplay
	gameMatureFilter:	true,
	gameBadWords:		["fuck", "wank", "shit", "pussy", "cunt", "dick"],
	gameAltWord:		"****",
	gameAllowMacro:		true,
	gameAllowPreload:	true,
	gameNamedCheckpts:	false,
	gameAllowLookAhead: true,
    
    // Splash: do not set below 0
    splashSize:         0.75,
    splashDuration:     2.4,
}

