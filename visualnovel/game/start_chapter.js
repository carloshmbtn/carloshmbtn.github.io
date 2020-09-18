start_chapter = [
	label, "start_chapter",
	scene, {src:"game/cenarios/bgtown01.jpg"},
	actor, {id:"Const", nick:"Const", color:"#ff0000", sprite:["normal", "game/personagens/vina02.png"], effect:"dissolve"},
	"Const", {say: "TESTE DE FALA!!!"},
	"Const", {say: "qqqqqqqqqqq!!!", append: false},
	jump, "one#start"
];