document.write('\
		<h4><i class="fa fa-tag"></i> Label</h4>Description: Serves to mark a position in the script. Used in jumps and saves. <hr /> \
		<form class="vertical"><div class="col_4"> \
		<label for="label-text"><span class="tooltip" title="Label to mark script position">Label</span><span class="right"></span></label> \
		<input type="text" id="label-text" placeholder="Enter label here" required></input>		 \
		</div></form><hr /> \
		<button id="label-gen" class="large orange">Generate code</button><p></p> \
		<output id="label-res"></output><output id="label-status"></output> \
');

$("#label-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#label-res").val("");
	$("#label-status").val("");
	var label = $("#label-text").val();
	if (label) {
		code.push('label, "', label,'",');
		$("#label-res").html('<pre>'+code.join('')+'</pre>');
	}
	else {
		msg_type = "error"; msg_index = 5;
	}
	document.getElementById("label-status").innerHTML = show_msg(msg_index, msg_type);
});