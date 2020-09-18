document.write('\
		<h4><i class="fa fa-picture-o"></i> Overlay</h4>Description: Display an overlay image on top of foreground.<hr /> \
		<form class="vertical"><div class="col_4"> \
		<fieldset><legend>Source</legend> \
		<label for="file-overlay"><span class="tooltip" title="Select image file to use as overlay">Overlay image</span><span class="right"></span></label> \
		<input id="file-overlay" type="file" /> \
		<label for="overlay-color"><span class="tooltip" title="Or choose color of overlay">Overlay color</span><span class="right"></span></label> \
		<input id="overlay-color" type="color" placeholder="Overlay color" value="#000000"/> \
		<label for="overlay-frames"><span class="tooltip" title="Numer of image frames">Frames</span><span class="right">Optional, for image source</span></label> \
		<input id="overlay-frames" size="4" type="number" min="0" max="999" value="0" step="1"/> \
		<label for="overlay-fps"><span class="tooltip" title="Frames per second">FPS</span><span class="right">Optional, for image source</span></label> \
		<input id="overlay-fps" size="4" type="number" min="0" max="999" value="0" step="1"/> \
		</fieldset> \
		</div> \
		<div class="col_4"> \
		<fieldset><legend>Effects</legend> \
		<label for="overlay-effects"><span class="tooltip" title="Overlay effects">Type</span><span class="right"></span></label> \
		<select id="overlay-effects"> \
			<option value="0">None</option> \
			<option value="1">Dissolve</option> \
			<option value="2">Fade</option> \
			<option value="3">Ghost</option> \
			<option value="4">Left</option> \
			<option value="5">Right</option> \
			<option value="6">Top</option> \
			<option value="7">Bottom</option> \
			<option value="8">Scale [args]</option> \
			<option value="9">Rotate [args]</option> \
			<option value="10">Translate [args]</option> \
		</select> \
		<label for="overlay-fxargs"><span class="tooltip" title="Overlay effects arguments">Args</span><span class="right">Optional</span></label> \
		<input id="overlay-fxargs" type="text"/> \
		<label for="overlay-duration"><span class="tooltip" title="Overlay effects duration">Duration</span><span class="right">Optional</span></label> \
		<input id="overlay-duration" size="4" type="number" min="0.1" value="1.0" step="0.1"/> \
		</fieldset> \
		<label for="overlay-offset"><span class="tooltip" title="Overlay offset as [x,y] or \'scroll\'">Offset</span><span class="right">Optional</span></label> \
		<input id="overlay-offset" type="text" placeholder="0, 0" /> \
		<input type="checkbox" id="overlay-show" checked/> <label for="overlay-show" class="inline"><span class="tooltip" title="Show or hide overlay">Show</span></label><br /> \
		</div> \
		<div class="col_4"> \
		<fieldset><legend>Preview</legend> \
		<label for="overlay-preview">Overlay</label> \
		<canvas id="overlay-preview" width="128" height="128"  style="border:1px solid black"></canvas> \
		</fieldset></div></form><hr /> \
		<button id="overlay-gen" class="large orange">Generate code</button><p></p> \
		<output id="overlay-res"></output><output id="overlay-status"></output> \
');

$("#file-overlay").change( function(evt) {
	var context = document.getElementById('overlay-preview').getContext("2d");
	context.clearRect(0, 0, 128, 128);
	var ovl = new Image();
	ovl.onload = function() {
		context.drawImage(ovl, 0, 0, 128, 128);
		URL.revokeObjectURL(ovl.src);
	};
	ovl.src = URL.createObjectURL(evt.target.files[0]);
});


$("#overlay-gen").click( function() {
	var code = [];
	var msg_type = "success";
	var msg_index = 0;
	
	$("#overlay-res").val("");
	$("#overlay-status").val("");

	if (!$("#overlay-show").prop("checked")) {
		code.push('overlay, {show:false');
		var effects = $("#overlay-effects option:selected").text();
		if (effects != "None") {
			code.push(', effect:"', effects.toLowerCase().replace(' [args]', ''));
			var args = $("#overlay-fxargs").val();
			if (args) code.push(' ', args);
			code.push('"');
			code.push(', time:', $("#overlay-duration").val());
		}
	}
	else {
		var file = $("#file-overlay").val();
		var i = file.indexOf("fakepath");
		if (i != -1) file = file.substr(i+9);
		if (file) {
			// use file overlay
			var frames = $("#overlay-frames").val();
			if (frames > 0)
				code.push('overlay, {src:["', file, '", ', frames, ', ', $("#overlay-fps").val(), ']');
			else 
				code.push('overlay, {src:"', file, '"');
			msg_type = "warning"; msg_index = 1;
			
			var offset = $("#overlay-offset").val()
			if (offset == "scroll") code.push(', offset:"scroll"');
			else if (offset.indexOf(',') != -1) code.push(', offset:[', offset, ']');
		}
		else {
			// use color overlay instead
			code.push('overlay, {src:"', $("#overlay-color").val(), '"');
		}
		var effects = $("#overlay-effects option:selected").text();
		if (effects != "None") {
			code.push(', effect:"', effects.toLowerCase().replace(' [args]', ''));
			var args = $("#overlay-fxargs").val();
			if (args) code.push(' ', args);
			code.push('"');
			code.push(', time:', $("#overlay-duration").val());
		}
	}
	code.push('},');
	$("#overlay-res").html('<pre>'+code.join('')+'</pre');
	document.getElementById("overlay-status").innerHTML = show_msg(msg_index, msg_type);
});