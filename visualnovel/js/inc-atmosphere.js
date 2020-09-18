document.write('\
		<h4><i class="fa fa-bolt"></i> Atmosphere</h4>Description: Adds special or animated atmospheric effects.<hr /> \
		<form class="vertical"><div class="col_4"> \
		<label for="atmo-type"><span class="tooltip" title="Atmosphere effect type">Effects</span><span class="right"></span></label> \
		<select id="atmo-type"> \
			<option value="0">Rain</option> \
			<option value="1">Snow</option> \
			<option value="2">Cloud</option> \
			<option value="3">Beam</option> \
		</select> \
		<label for="atmo-amt"><span class="tooltip" title="Amount of rain or snow">Amount</span><span class="right">for Rain or Snow</span></label> \
		<input id="atmo-amt" size="4" type="number" min="0" max="999" value="100" step="1"/> \
		<label for="file-cloud"><span class="tooltip" title="Select image file to use as cloud">Cloud file</span><span class="right">for Cloud</span></label> \
		<input id="file-cloud" type="file" /> \
		<label for="atmo-radius"><span class="tooltip" title="Radius of light beam">Radius</span><span class="right">for Beam</span></label> \
		<input id="atmo-radius" size="4" type="number" min="0" max="999" value="150" step="1"/> \
		</div> \
		<div class="col_4"> \
		<label for="atmo-dir"><span class="tooltip" title="Direction in degrees of rain, snow or cloud">Direction</span><span class="right">for Rain, Snow or Cloud</span></label> \
		<input id="atmo-dir" size="4" type="number" min="0" max="360" value="90" step="1"/> \
		<label for="atmo-color"><span class="tooltip" title="Color of beam mask">Color</span><span class="right">for Beam</span></label> \
		<input id="atmo-color" type="color" placeholder="Mask color" value="#000000"/> \
		<fieldset><legend>Action</legend> \
		<input type="radio" name="atmo-action" value="atmo-start" checked /> <label for="atmo-start" class="inline"><span class="tooltip" title="Start atmosphere effect">Start</span></label><br /> \
		<input type="radio" name="atmo-action" value="atmo-stop" /> <label for="atmo-stop" class="inline"><span class="tooltip" title="Stop atmosphere effect">Stop</span></label><br /> \
		</fieldset></div> \
		<div class="col_4"> \
		<fieldset><legend>Preview</legend> \
		<label for="atmo-cpreview">Cloud</label> \
		<canvas id="atmo-cpreview" width="128" height="128"  style="border:1px solid black"></canvas> \
		</fieldset></div></form><hr /> \
		<button id="atmo-gen" class="large orange">Generate code</button><p></p> \
		<output id="atmo-res"></output><output id="atmo-status"></output> \
');

$("#file-cloud").change( function(evt) {
	var context = document.getElementById('atmo-cpreview').getContext("2d");
	context.clearRect(0, 0, 128, 128);
	var cloud = new Image();
	cloud.onload = function() {
		context.drawImage(cloud, 0, 0, 128, 128);
		URL.revokeObjectURL(cloud.src);
	};
	cloud.src = URL.createObjectURL(evt.target.files[0]);
});


$("#atmo-gen").click( function() {
	var code = [];
	var msg_type = "success";
	var msg_index = 0;
	
	$("#atmo-res").val("");
	$("#atmo-status").val("");
	var atmo = $("#atmo-type option:selected").text().toLowerCase();
	code.push('atmosphere, {', atmo, ':');
	if ($("input[name='atmo-action']:checked").val() == "atmo-stop")
		code.push('"stop"');
	else {
		switch (atmo) {
			case "rain":
			case "snow":
				code.push($("#atmo-amt").val(), ', direction:', $("#atmo-dir").val());
				break;
			case "cloud":
				var file = $("#file-cloud").val();
				var i = file.indexOf("fakepath");
				if (i != -1) file = file.substr(i+9);
				if (file) {
					code.push('"', file, '", direction:', $("#atmo-dir").val());
					msg_type = "warning";
					msg_index = 1;
				}
				else {
					msg_type = "error";
					msg_index = 2;
					document.getElementById("atmo-status").innerHTML = show_msg(msg_index, msg_type);
					return;
				}
				break;
			case "beam":
				code.push($("#atmo-radius").val(), ', mask:"', $("#atmo-color").val(), '"');
				break;
		}
	}
	code.push('},');
	$("#atmo-res").html('<pre>'+code.join('')+'</pre>');
	document.getElementById("atmo-status").innerHTML = show_msg(msg_index, msg_type);
});