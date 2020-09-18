document.write('\
		<h4><i class="fa fa-clock-o"></i> Wait</h4>Description: Pauses game for the specified duration.<hr /> \
		<form class="vertical"><div class="col_4"> \
		<label for="wait-time"><span class="tooltip" title="Pause for given number in seconds">Time</span><span class="right"></span></label> \
		<input type="number" size="4" id="wait-time" min="0" max="999" step="1" value="0" required></input>		 \
		</div></form><hr /> \
		<button id="wait-gen" class="large orange">Generate code</button><p></p> \
		<output id="wait-res"></output><output id="wait-status"></output> \
');

$("#wait-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#wait-res").val("");
	$("#wait-status").val("");
	code.push('wait, ', $("#wait-time").val(),',');
	$("#wait-res").html('<pre>'+code.join('')+'</pre>');
	document.getElementById("wait-status").innerHTML = show_msg(0, "success");
});