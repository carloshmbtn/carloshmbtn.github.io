document.write('\
		<h4><i class="fa fa-film"></i> Video</h4>Description: Play a movie for intros, cutscenes or endings.<hr /> \
		<form class="vertical"><div class="col_4"> \
		<label for="file-video"><span class="tooltip" title="Video source">Source</span><span class="right"></span></label> \
		<input id="file-video" type="file" /> \
		<label for="video-format"><span class="tooltip" title="Video file format, e.g. \'ogv\', \'mp4\'">Format</span><span class="right">Optional</span></label> \
		<input id="video-format" type="text" placeholder="Leave blank to use defaults"/> \
		</div> \
		<div class="col_4"> \
		<fieldset><legend>Preview</legend> \
		<label for="video-spreview">Play Video</label> \
		<video id="video-spreview" controls class="col_12"></video> \
		</fieldset></div></form><hr /> \
		<button id="video-gen" class="large orange">Generate code</button><p></p> \
		<output id="video-res"></output><output id="video-status"></output> \
');

$("#file-video").change( function(evt) {
	var clip = document.getElementById('video-spreview');
	clip.src = URL.createObjectURL(evt.target.files[0]);
});


$("#video-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#video-res").val("");
	$("#video-status").val("");
	
	var file = $("#file-video").val();
	var i = file.indexOf("fakepath");
	if (i != -1) file = file.substr(i+9);
	if (file) {
		code.push('video, {src:"', file, '"');
		msg_type = "warning"; msg_index = 3;
		var format = $("#video-format").val();
		if (format) code.push(', format:[', format, ']');
		code.push('},');
		$("#video-res").html('<pre>'+code.join('')+'</ptaa>');
	}
	else {
		msg_type = "error"; msg_index = 2;
	}
	document.getElementById("video-status").innerHTML = show_msg(msg_index, msg_type);
});