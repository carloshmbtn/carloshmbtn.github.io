start_chapter = [
	label, "start_chapter",
	cform, [ "top_menu", true,
		button, {name:"Novo jogo", x:600, y:240, w:96, h:48, base:"rgba(255,165,0,0.8)", hover:"orange", click:"yellow", link:[jump, "intro"], tip:"Começar um novo jogo"}
	],
	label, "intro",
	cform, "close",
	scene, {src:"game/cenarios/bgtown01.jpg"},
	actor, {id:"Const", nick:"Const", color:"#ff0000", sprite:["normal", "game/personagens/vina02.png"], effect:"dissolve"},
	"Const", {say: "TESTE DE FALA!!!"},
	"Const", {say: "qqqqqqqqqqq!!!", append: false},
	jump, "one#start"
];