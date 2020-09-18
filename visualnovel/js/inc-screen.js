document.write('\
		<h4><i class="fa fa-laptop"></i> Screen</h4>Description: Perform some special screen actions.<hr /> \
		<form class="vertical"><div class="col_4"> \
		<label for="screen-type"><span class="tooltip" title="Screen action type">Type</span><span class="right"></span></label> \
		<select id="screen-type"> \
			<option value="0">Shake</option> \
			<option value="1">Fall</option> \
			<option value="2">Screenshot</option> \
		</select> \
		<label for="screen-mag"><span class="tooltip" title="Magnitude of screen action">Magnitude</span><span class="right">for Shake or Fall</span></label> \
		<input id="screen-mag" size="4" type="number" min="0" max="999" value="10" step="1"/> \
		<label for="screen-time"><span class="tooltip" title="Duration of screen action in seconds">Duration</span><span class="right">for Shake or Fall</span></label> \
		<input id="screen-time" size="4" type="number" min="0" max="999" value="0.0" step="0.1"/> \
		<label for="screen-snap"><span class="tooltip" title="Screenshot format, i.e. jpg or png">Format</span><span class="right">for Screenshot</span></label> \
		<input id="screen-snap" type="text" placeholder="Default is png"/> \
		</div> \
		</form><hr /> \
		<button id="screen-gen" class="large orange">Generate code</button><p></p> \
		<output id="screen-res"></output><output id="screen-status"></output> \
');


$("#screen-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#screen-res").val("");
	$("#screen-status").val("");
	
	var type = $("#screen-type option:selected").val();
	if (type == "0")
		code.push('screen, {shake:', $("#screen-mag").val(), ', duration:', $("#screen-time").val(), '},');
	else if (type == "1")
		code.push('screen, {fall:', $("#screen-mag").val(), ', duration:', $("#screen-time").val(), '},');
	else {
		var format = $("#screen-snap").val();
		if (!format) format = "png";
		code.push('screen, {snap:"', format, '"},');
	}
	$("#screen-res").html('<pre>'+code.join('')+'</pre>');
	document.getElementById("screen-status").innerHTML = show_msg(msg_index, msg_type);
});