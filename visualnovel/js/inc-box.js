document.write('\
		<h4><i class="fa fa-comment-o"></i> Box</h4>Description: Set the script box style and attributes. <hr /> \
		<form class="vertical"><div class="col_4"> \
		<label for="box-pos"><span class="tooltip" title="Set script box position">Position</span><span class="right">Optional</span></label> \
		<select id="box-pos"> \
			<option value="0">Bottom</option> \
			<option value="1">Center</option> \
			<option value="2">Top</option> \
			<option value="3">Full</option> \
		</select> \
		<label for="box-back"><span class="tooltip" title="Set background style">Background</span><span class="right">Optional</span></label> \
		<select id="box-back"> \
			<option value="0">Dim</option> \
			<option value="1">None</option> \
			<option value="2">Image</option> \
		</select> \
		<label for="box-align"><span class="tooltip" title="Set text alignment">Alignment</span><span class="right">Optional</span></label> \
		<select id="box-align"> \
			<option value="0">Left</option> \
			<option value="1">Center</option> \
			<option value="2">Right</option> \
		</select> \
		</div><div class="col_4"> \
		<label for="file-prompt"><span class="tooltip" title="Select image file to use as prompt">Prompt image file</span><span class="right">Optional</span></label> \
		<input id="file-prompt" type="file" /> \
		<label for="box-ppreview">Preview</label> \
		<canvas id="box-ppreview" width="32" height="32"  style="border:1px solid black"></canvas> \
		<br /><input type="checkbox" id="box-show" checked/> <label for="box-show" class="inline"><span class="tooltip" title="Show script box">Show</span></label><br /> \
		</div></form><hr /> \
		<button id="box-gen" class="large orange">Generate code</button><p></p> \
		<output id="box-res"></output><output id="box-status"></output> \
');

$("#file-prompt").change( function(evt) {
	var context = document.getElementById('box-ppreview').getContext("2d");
	context.clearRect(0, 0, 32, 32);
	var prompt = new Image();
	prompt.onload = function() {
		context.drawImage(prompt, 0, 0, 32, 32);
		URL.revokeObjectURL(prompt.src);
	};
	prompt.src = URL.createObjectURL(evt.target.files[0]);
});

$("#box-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#box-res").val("");
	$("#box-status").val("");
	
	if (!$("#box-show").prop("checked")) {
		code.push('box, {show:false},');
		$("#box-res").html('<pre>'+code.join('')+'</pre>');
	}
	else {
		code.push('box, {show:true, pos:"', $("#box-pos option:selected").text().toLowerCase(),
			'", back:"', $("#box-back option:selected").text().toLowerCase(), 
			'", align:"', $("#box-align option:selected").text().toLowerCase(), '"');
		var promptfile = $("#file-prompt").val();
		var i = promptfile.indexOf("fakepath");
		if (i != -1) promptfile = promptfile.substr(i+9);
		if (promptfile) {
			code.push(' prompt:"', promptfile, '"');
			msg_type = "warning"; msg_index = 1;
		}
		code.push('},');
		$("#box-res").html('<pre>'+code.join('')+'</pre>');
	}
	document.getElementById("box-status").innerHTML = show_msg(msg_index, msg_type);
});