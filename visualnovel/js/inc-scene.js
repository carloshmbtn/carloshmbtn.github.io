document.write('\
		<h4><i class="fa fa-picture-o"></i> Scene</h4>Description: Display a background image using the given parameters.<hr /> \
		<form class="vertical"><div class="col_4"> \
		<fieldset><legend>Source</legend> \
		<label for="file-scene"><span class="tooltip" title="Select image file to use as background">Background image</span><span class="right"></span></label> \
		<input id="file-scene" type="file" /> \
		<label for="scene-color"><span class="tooltip" title="Or choose background color">Background color</span><span class="right"></span></label> \
		<input id="scene-color" type="color" placeholder="Background color" value="#000000"/> \
		</fieldset> \
		</div> \
		<div class="col_4"> \
		<fieldset><legend>Effects</legend> \
		<label for="scene-effects"><span class="tooltip" title="Background effects">Type</span><span class="right"></span></label> \
		<select id="scene-effects"> \
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
		<label for="scene-fxargs"><span class="tooltip" title="Background effects arguments">Args</span><span class="right">Optional</span></label> \
		<input id="scene-fxargs" type="text"/> \
		<label for="scene-duration"><span class="tooltip" title="Background effects duration">Duration</span><span class="right">Optional</span></label> \
		<input id="scene-duration" size="4" type="number" min="0.1" value="1.0" step="0.1"/> \
		</fieldset> \
		</div> \
		<div class="col_4"> \
		<fieldset><legend>Preview</legend> \
		<label for="scene-preview">Background</label> \
		<canvas id="scene-preview" width="128" height="128"  style="border:1px solid black"></canvas> \
		</fieldset></div> \
		<div class="col_8"> \
		<label for="scene-table"><span class="tooltip" title="Add objects to background">Objects</span><span class="right">Optional</span></label> \
		<table cellspacing="0" cellpadding="0" id="scene-table"> \
		<thead><tr> \
			<th><span class="tooltip" title="Image file"><span class="row-header">Image</span></span></th> \
			<th><span class="tooltip" title="X position"><span class="row-header">X</span></span></th> \
			<th><span class="tooltip" title="Y position"><span class="row-header">Y</span></span></th> \
			<th><span class="tooltip" title="Frames, optional"><span class="row-header">Frames</span></span></th> \
			<th><span class="tooltip" title="Frames per second, optional"><span class="row-header">FPS</span></span></th> \
			<th><span class="tooltip" title="Add row"><i class="fa fa-plus fa-2x scene-add"></i></span></th> \
		</tr></thead> \
		<tbody><tr> \
			<td contenteditable="true"></td> \
			<td contenteditable="true"></td> \
			<td contenteditable="true"></td> \
			<td contenteditable="true"></td> \
			<td contenteditable="true"></td> \
			<td><span class="tooltip" title="Remove row"><i class="fa fa-close fa-2x row-remove"></i></span>&nbsp;<span class="tooltip" title="Shift up"><i class="fa fa-arrow-up fa-2x row-up"></i></span>&nbsp;<span class="tooltip" title="Shift down"><i class="fa fa-arrow-down fa-2x row-down"></i></span></td> \
		</tr><tr class="hide"> \
			<td contenteditable="true"></td> \
			<td contenteditable="true"></td> \
			<td contenteditable="true"></td> \
			<td contenteditable="true"></td> \
			<td contenteditable="true"></td> \
			<td><i class="fa fa-close fa-2x row-remove"></i>&nbsp;<i class="fa fa-arrow-up fa-2x row-up"></i>&nbsp;<i class="fa fa-arrow-down fa-2x row-down"></i></td> \
		</tr></tbody> \
		</table> \
		</div> \
		</form><hr /> \
		<button id="scene-gen" class="large orange">Generate code</button><p></p> \
		<output id="scene-res"></output><output id="scene-status"></output> \
');

$("#file-scene").change( function(evt) {
	var context = document.getElementById('scene-preview').getContext("2d");
	context.clearRect(0, 0, 128, 128);
	var scene = new Image();
	scene.onload = function() {
		context.drawImage(scene, 0, 0, 128, 128);
		URL.revokeObjectURL(scene.src);
	};
	scene.src = URL.createObjectURL(evt.target.files[0]);
});
$(".scene-add").click( function() {
	var clone = $("#scene-table").find('tr.hide').clone(true).removeClass('hide table-line');
	$("#scene-table").append(clone);
});

$("#scene-gen").click( function() {
	var code = [];
	var msg_type = "success";
	var msg_index = 0;
	
	$("#scene-res").val("");
	$("#scene-status").val("");

	var file = $("#file-scene").val();
	var i = file.indexOf("fakepath");
	if (i != -1) file = file.substr(i+9);
	if (file) {
		code.push('scene, {src:"', file, '"');
		msg_type = "warning"; msg_index = 1;
	}
	else {
		code.push('scene, {src:"', $("#scene-color").val(), '"');
	}
	var effects = $("#scene-effects option:selected").text();
	if (effects != "None") {
		code.push(', effect:"', effects.toLowerCase().replace(' [args]', ''));
		var args = $("#scene-fxargs").val();
		if (args) code.push(' ', args);
		code.push('"');
		code.push(', time:', $("#scene-duration").val());
	}

	jQuery.fn.shift = [].shift;
	var rows = $("#scene-table").find('tr:not(:hidden)');
	rows.shift();	// ignore header row
	rows.each( function(i) {
		var td = $(this).find('td');
		if (td.eq(0).text()) {
			if (i == 0) code.push(', objects:["');
			else code.push(', "');
			code.push(td.eq(0).text(), '",', td.eq(1).text(), ',', td.eq(2).text());
			if (td.eq(3).text())
				code.push(', ', td.eq(3).text(), ', ', td.eq(4).text());
		}
		if (i >= rows.length-1) code.push(']');
	});
	
	code.push('},');
	$("#scene-res").html('<pre>'+code.join('')+'</pre>');
	document.getElementById("scene-status").innerHTML = show_msg(msg_index, msg_type);
});