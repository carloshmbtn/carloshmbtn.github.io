document.write('\
		<h4><i class="fa fa-map-marker"></i> Automap</h4>Description: Provides an auto-revealing minimap to be used with tile navigation.<hr /> \
		<form class="vertical"><div class="col_4"> \
		<label for="automap-action"><span class="tooltip" title="Automap action to take">Action</span><span class="right"></span></label> \
		<select id="automap-action"> \
			<option value="0">Define</option> \
			<option value="1">Show</option> \
			<option value="2">Hide</option> \
		</select> \
		<input id="file-automap" type="file" required /> \
		<label for="automap-size"><span class="tooltip" title="Number of tiles horizontally and vertically">Size</span><span class="right">for Define only</span></label> \
		<input id="automap-size" type="text" placeholder="width, height" required/> \
		<label for="automap-offset"><span class="tooltip" title="Position of top-left corner of imgae">Offset</span><span class="right">for Define only</span></label> \
		<input id="automap-offset" type="text" placeholder="x, y" required/> \
		</div> \
		<div class="col_4"> \
		<fieldset><legend>Preview</legend> \
		<label for="automap-preview">Image</label> \
		<canvas id="automap-preview" width="128" height="128"  style="border:1px solid black"></canvas> \
		</fieldset></div></form><hr /> \
		<button id="automap-gen" class="large orange">Generate code</button><p></p> \
		<output id="automap-res"></output><output id="automap-status"></output> \
');
$("#file-automap").change( function(evt) {
	var context = document.getElementById('automap-preview').getContext("2d");
	context.clearRect(0, 0, 128, 128);
	var automap = new Image();
	automap.onload = function() {
		context.drawImage(automap, 0, 0, 128, 128);
		URL.revokeObjectURL(automap.src);
	};
	automap.src = URL.createObjectURL(evt.target.files[0]);
});


$("#automap-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#automap-res").val("");
	$("#automap-status").val("");
	var action = $("#automap-action option:selected").val();
	
	if (action == "1") code.push('automap, "show",'); 
	else if (action == "2") code.push('automap, "hide",');
	else {
		var file = $("#file-automap").val();
		var i = file.indexOf("fakepath");
		if (i != -1) file = file.substr(i+9);
		if (file) {
			code.push('automap, {src:"', file, '", ');
			var size = $("#automap-size").val();
			if (!size) code.push('size:[0,0], ');
			else code.push('size:[', size, '], ');
			var offset = $("#automap-offset").val();
			if (!offset) code.push('offset:[0,0]},');
			else code.push('offset:[', offset, ']},');
		}
		else {
			msg_type = "error"; msg_index = 2;
		}
	}
	if (code.length>0) $("#automap-res").html('<pre>'+code.join('')+'</pre>');
	document.getElementById("automap-status").innerHTML = show_msg(msg_index, msg_type);
	
});