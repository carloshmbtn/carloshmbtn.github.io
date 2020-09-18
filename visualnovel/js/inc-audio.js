document.write('\
		<h4><i class="fa fa-music"></i> Audio</h4>Description: Play a sound or music.<hr /> \
		<form class="vertical"><div class="col_4"> \
		<label for="audio-type"><span class="tooltip" title="Audio effects type">Type</span><span class="right"></span></label> \
		<select id="audio-type"> \
			<option value="0">Background music</option> \
			<option value="1">Background sound</option> \
			<option value="2">Sound effects</option> \
		</select> \
		<input id="file-audio" type="file" /> \
		<label for="audio-format"><span class="tooltip" title="Audio file format, e.g. \'ogg\', \'mp3\'">Format</span><span class="right">Optional</span></label> \
		<input id="audio-format" type="text" placeholder="Leave blank to use defaults"/> \
		<label for="audio-repeat"><span class="tooltip" title="Number of repetitions">Repeat</span><span class="right">Optional</span></label> \
		<input id="audio-repeat" size="4" type="number" min="0" max="999" value="0" step="1"/> \
		<label for="audio-delay"><span class="tooltip" title="Number of seconds to wait">Wait</span><span class="right">Optional</span></label> \
		<input id="audio-delay" size="4" type="number" min="0" max="999" value="0.0" step="0.1"/> \
		</div> \
		<div class="col_4"> \
		<fieldset><legend>Action</legend> \
		<input type="radio" name="audio-action" value="audio-play" checked /> <label for="audio-play" class="inline"><span class="tooltip" title="Play sound">Play</span></label><br /> \
		<input type="radio" name="audio-action" value="audio-stop" /> <label for="audio-stop" class="inline"><span class="tooltip" title="Stop sound">Stop</span></label><br /> \
		<input type="radio" name="audio-action" value="audio-rewind" /> <label for="audio-rewind" class="inline"><span class="tooltip" title="Rewind sound">Rewind</span></label><br /> \
		<input type="radio" name="audio-action" value="audio-pause" /> <label for="audio-pause" class="inline"><span class="tooltip" title="Pause sound">Pause</span></label><br /> \
		<input type="radio" name="audio-action" value="audio-remove" /> <label for="audio-remove" class="inline"><span class="tooltip" title="Remove sound, for SE and BGS only">Remove</span></label><br /> \
		</fieldset> \
		<fieldset><legend>Preview</legend> \
		<label for="audio-spreview">Play Sound</label> \
		<audio id="audio-spreview" controls class="col_12"></audio> \
		</fieldset></div></form><hr /> \
		<button id="audio-gen" class="large orange">Generate code</button><p></p> \
		<output id="audio-res"></output><output id="audio-status"></output> \
');

$("#file-audio").change( function(evt) {
	var sound = document.getElementById('audio-spreview');
	sound.src = URL.createObjectURL(evt.target.files[0]);
});


$("#audio-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#audio-res").val("");
	$("#audio-status").val("");
	var type = $("#audio-type option:selected").val();
	var file = $("#file-audio").val();
	var i = file.indexOf("fakepath");
	if (i != -1) file = file.substr(i+9);
	if (file) {
		msg_type = "warning"; msg_index = 3;
		if (type == "0") code.push('audio, {bgm:"', file, '"');
		if (type == "1") code.push('audio, {bgs:"', file, '"');
		if (type == "2") code.push('audio, {se:"', file, '"');
		var action = $("input[name='audio-action']:checked").val();
		if (action == "audio-play") {
			var format = $("#audio-format").val();
			if (format) code.push(', format:[', format, ']');
			var reps = $("#audio-repeat").val();
			if (reps > 0) code.push(', repeat:', reps);
			var wait = $("#audio-delay").val();
			if (wait > 0) code.push(', delay:', wait);
		}
		else {
			if ((action != "audio-remove") || (type != "0"))
			code.push(', action:"', action.substr(6), '"');
		}
		code.push('},');
		$("#audio-res").html('<pre>'+code.join('')+'</pre>');
	}
	else {
		msg_type = "error"; msg_index = 2;
	}
	document.getElementById("audio-status").innerHTML = show_msg(msg_index, msg_type);
});