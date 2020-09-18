document.write('\
		<h4><i class="fa fa-play-circle-o"></i> Macro</h4>Description: Execute a custom javascript.<hr /> \
		<form class="vertical"><div class="col_4"> \
		<label for="macro-name"><span class="tooltip" title="Calls a javascript function given by Name">Name</span><span class="right"></span></label> \
		<input type="text" id="macro-name" placeholder="Enter macro name here" required></textarea>		 \
		<label for="macro-param"><span class="tooltip" title="Parameter/Argument to the macro">Argument</span><span class="right">Optional</span></label> \
		<input type="text" id="macro-param" placeholder="Enter arguments here"></input>		 \
		</div></form><hr /> \
		<button id="macro-gen" class="large orange">Generate code</button><p></p> \
		<output id="macro-res"></output><output id="macro-status"></output> \
');

$("#macro-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#macro-res").val("");
	$("#macro-status").val("");
	var macro = $("#macro-name").val();
	if (macro) {
		code.push('macro, ');
		var arg = $("#macro-param").val();
		if (arg) 
			code.push('{', macro, ':', arg, '},');
		else
			code.push('"', macro, '"');
		$("#macro-res").html('<pre>'+code.join('')+'</pre>');
	}
	else {
		msg_type = "error"; msg_index = 6;
	}
	document.getElementById("macro-status").innerHTML = show_msg(msg_index, msg_type);
});