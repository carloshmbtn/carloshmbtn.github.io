document.write('\
		<h4><i class="fa fa-exclamation-triangle"></i> Message</h4>Description: Displays a message box useful for story tracking and debugging.<hr /> \
		<form class="vertical"><div class="col_4"> \
		<label for="message-text"><span class="tooltip" title="Message to display in an alert box">Message</span><span class="right"></span></label> \
		<textarea id="message-text" placeholder="Enter message here"></textarea>		 \
		</div></form><hr /> \
		<button id="message-gen" class="large orange">Generate code</button><p></p> \
		<output id="message-res"></output><output id="message-status"></output> \
');

$("#message-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#message-res").val("");
	$("#message-status").val("");
	code.push('message, "', $("#message-text").val(),'",');
	$("#message-res").html('<pre>'+code.join('')+'</pre>');
	document.getElementById("message-status").innerHTML = show_msg(0, "success");
});