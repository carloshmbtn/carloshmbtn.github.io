document.write('\
		<h4><i class="fa fa-comment"></i> Text</h4>Description: Displays dialog or narration text in script box.<hr /> \
		<form class="vertical"><div class="col_4"> \
		<fieldset><legend>Dialog</legend> \
		<textarea id="text-value" placeholder="Place text dialog here"></textarea>		 \
		<label for="text-speaker"><span class="tooltip" title="Speaker to add to dialog">Speaker</span><span class="right">Optional</span></label> \
		<input id="text-speaker" type="text" placeholder="Add speaker tag" /> \
		<label for="file-text"><span class="tooltip" title="Add a voice file to dialog">Voice</span><span class="right">Optional</span></label> \
		<input id="file-text" type="file" /> \
		<input type="checkbox" id="text-append"/> <label for="text-append" class="inline"><span class="tooltip" title="Append dialog to previous">Append</span></label><br /> \
		</fieldset></div> \
		<div class="col_4"> \
		<label for="text-font"><span class="tooltip" title="Set font to display on text box">Font</span><span class="right">Optional</span></label> \
		<input id="text-font" type="text" placeholder="CSS style \'weight size family color\'"/> \
		<label for="text-align"><span class="tooltip" title="Text alignment in box">Alignment</span><span class="right">Optional</span></label> \
		<select id="text-align"> \
			<option value="0">Left</option> \
			<option value="1">Center</option> \
			<option value="2">Right</option> \
		</select> \
		<label for="text-offset"><span class="tooltip" title="Offset from top-left of script box">Offset</span><span class="right">Optional, [x,y]</span></label> \
		<input id="text-offset" type="text" placeholder="10, 20" /> \
		<fieldset><legend>Effects</legend> \
		<label for="text-effects"><span class="tooltip" title="Effects to display on script box">Type</span><span class="right">Optional</span></label> \
		<select id="text-effects"> \
			<option value="0">None</option> \
			<option value="1">Fade</option> \
			<option value="2">Scroll</option> \
			<option value="3">Autotype</option> \
			<option value="4">Noautotype</option> \
		</select> \
		<label for="text-duration"><span class="tooltip" title="Number of seconds to display script box">Duration</span><span class="right">Optional</span></label> \
		<input id="text-duration" size="4" type="number" min="0" max="999" value="0" step="0.1"/> \
		</fieldset> \
		<fieldset><legend>Preview</legend> \
		<label for="text-vpreview">Voice</label> \
		<audio id="text-vpreview" controls class="col_12"></audio> \
		</fieldset> \
		</div></form><hr /> \
		<button id="text-gen" class="large orange">Generate code</button><p></p> \
		<output id="text-res"></output><output id="text-status"></output> \
');

$("#file-text").change( function(evt) {
	var dub = document.getElementById('text-vpreview');
	dub.src = URL.createObjectURL(evt.target.files[0]);
});


$("#text-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#text-res").val("");
	$("#text-status").val("");
	
	code.push('text, {value:"', $("#text-value").val(), '"');
	var speaker = $("#text-speaker").val();
	if (speaker) code.push(', speaker:"', speaker, '"');
	var dub = $("#file-text").val();
	var i = dub.indexOf("fakepath");
	if (i != -1) dub = dub.substr(i+9);
	if (dub) {
		code.push(', voice:"', dub, '"');
		msg_type = "warning"; msg_index = 3;
	}
	if ($("#text-append").prop("checked")) 
		code.push(', append:true');
	else
		code.push(', append:false');
	var font = $("#text-font").val();
	if (font) code.push(', font:"', font, '"');
	code.push(', align:"', $("#text-align option:selected").text().toLowerCase(), '"');
	var offset = $("#text-offset").val();
	if (offset) code.push(', offset:[', offset, ']');
	var effects = $("#text-effects option:selected").text();
	if (effects != "None") {
		code.push(', effect:"', effects.toLowerCase(), '"');
	}
	var wait = $("#text-duration").val();
	if (wait > 0) code.push(', duration:', $("#text-duration").val());
	
	code.push('},');
	$("#text-res").html('<pre>'+code.join('')+'</pre>');
	document.getElementById("text-status").innerHTML = show_msg(msg_index, msg_type);
});