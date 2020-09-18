document.write('\
		<h4><i class="fa fa-save"></i> Checkpoint</h4>Description: Marks a position in the script as a checkpoint for saving/loading.<hr /> \
		<form class="vertical"><div class="col_4"> \
		<fieldset><legend>Type</legend> \
		<input type="radio" name="chkpt-type" value="chkpt-save" checked/> <label for="chkpt-save" class="inline"><span class="tooltip" title="Save a checkpoint">Save</span></label><br /> \
		<input type="radio" name="chkpt-type" value="chkpt-load"/> <label for="chkpt-load" class="inline"><span class="tooltip" title="Load a checkpoint">Load</span></label><br /> \
		<input type="radio" name="chkpt-type" value="chkpt-clear"/> <label for="chkpt-clear" class="inline"><span class="tooltip" title="Clear a checkpoint">Clear</span></label><br /> \
		</fieldset> \
		<label for="chkpt-name"><span class="tooltip" title="Checkpoint name">Name</span><span class="right">Optional, except for clear</span></label> \
		<input id="chkpt-name" type="text" placeholder="Enter checkpoint name here"/> \
		</div></form><hr /> \
		<button id="chkpt-gen" class="large orange">Generate code</button><p></p> \
		<output id="chkpt-res"></output><output id="chkpt-status"></output> \
');


$("#chkpt-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#chkpt-res").val("");
	$("#chkpt-status").val("");
	
	var type = $("input[name='chkpt-type']:checked").val();
	var name = $("#chkpt-name").val();

	code.push('checkpoint, ');
	if (type == "chkpt-clear") {
		if (!name) {
			msg_type = "error"; msg_index = 7;
			document.getElementById("chkpt-status").innerHTML = show_msg(msg_index, msg_type);
			return;
		}
		else {
			code.push('{clear:"', name, '"},');
		}
	}
	else if (type == "chkpt-load") {
		if (!name)
			code.push('"load",');
		else 
			code.push('{load:"', name, '"},');
	}
	else {
		if (!name)
			code.push('"save",');
		else 
			code.push('{save:"', name, '"},');
	}
	$("#chkpt-res").html('<pre>'+code.join('')+'</pre>');
	document.getElementById("chkpt-status").innerHTML = show_msg(msg_index, msg_type);
});