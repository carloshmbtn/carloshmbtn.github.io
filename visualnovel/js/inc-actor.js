document.write('\
		<h4><i class="fa fa-user"></i> Actor</h4>Description: Creates an actor and/or display dialog in script box.<hr /> \
		<form class="vertical"><div class="col_4"> \
		<label for="actor-id"><span class="tooltip" title="Actor ID or name">ID</span><span class="right"></span></label> \
		<input id="actor-id" type="text" placeholder="Actor ID" required/> \
		<label for="actor-nick"><span class="tooltip" title="Nickname or alias shown on dialog">Nick</span><span class="right">Optional</span></label> \
		<input id="actor-nick" type="text" placeholder="Actor nickname"/> \
		<label for="actor-color"><span class="tooltip" title="Nickname color">Color</span><span class="right">Optional</span></label> \
		<input id="actor-color" type="color" placeholder="Nickname color" value="#C8FFC8"/> \
		<label for="actor-pos"><span class="tooltip" title="Default actor position">Position</span><span class="right">Optional</span></label> \
		<select id="actor-pos"> \
			<option value="0">Auto</option> \
			<option value="1">Left</option> \
			<option value="2">Right</option> \
			<option value="3">Center</option> \
		</select> \
		<label for="actor-zorder"><span class="tooltip" title="Default actor depth">z-Order</span><span class="right">Optional, [-9, 9]</span></label> \
		<input id="actor-zorder" size="4" type="number" min="-9" max="9" value="0" step="1"/> \
		<input type="checkbox" id="actor-show" checked/> <label for="actor-show" class="inline"><span class="tooltip" title="Show actor">Show</span></label><br /> \
		<input type="checkbox" id="actor-remove"/> <label for="actor-remove" class="inline"><span class="tooltip" title="Remove actor given by ID">Remove actor</span></label><br /> \
		<fieldset><legend>Preview</legend> \
		<label for="actor-spreview">Sprite</label> \
		<canvas id="actor-spreview" width="96" height="128"  style="border:1px solid black"></canvas> \
		<label for="actor-apreview">Avatar</label> \
		<canvas id="actor-apreview" width="64" height="64"  style="border:1px solid black"></canvas> \
		<label for="actor-vpreview">Voice</label> \
		<audio id="actor-vpreview" controls class="col_12"></audio> \
		</fieldset> \
		</div> \
		<div class="col_4"> \
		<fieldset><legend>Sprite</legend> \
		<label for="actor-tag"><span class="tooltip" title="Sprite reference tag">Tag</span><span class="right"></span></label> \
		<input id="actor-tag" type="text" placeholder="Sprite tag"/> \
		<label for="file-sprite"><span class="tooltip" title="Select image file to use as sprite">Sprite file</span><span class="right">Optional</span></label> \
		<input id="file-sprite" type="file" /> \
		<label for="actor-align"><span class="tooltip" title="Vertical alignment of sprite">Alignment</span><span class="right">Optional</span></label> \
		<select id="actor-align"> \
			<option value="Floor">Floor</option> \
			<option value="Bottom">Bottom</option> \
			<option value="Center">Center</option> \
			<option value="Roof">Roof</option> \
			<option value="Top">Top</option> \
		</select> \
		<label for="actor-frames"><span class="tooltip" title="Number of frames for a multi-frame sprite">Frames</span><span class="right">Optional</span></label> \
		<input id="actor-frames" size="4" type="number" min="0" value="0" step="1"/> \
		<label for="actor-fps"><span class="tooltip" title="Frames per second of sprite animation">FPS</span><span class="right">Optional</span></label> \
		<input id="actor-fps" size="4" type="number" min="0" value="0" step="1"/> \
		<label for="actor-reps"><span class="tooltip" title="Number of repetitions of sprite animation">Repetitions</span><span class="right">Optional</span></label> \
		<input id="actor-reps" size="4" type="number" min="-1" value="-1" step="1"/> \
		<input type="checkbox" id="actor-sprite-remove"/> <label for="actor-sprite-remove" class="inline"><span class="tooltip" title="Remove sprite given by tag">Remove sprite</span></label><br /> \
		</fieldset> \
		<fieldset><legend>Effects</legend> \
		<label for="actor-effects"><span class="tooltip" title="Sprite entry/exit effects">Type</span><span class="right"></span></label> \
		<select id="actor-effects"> \
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
		<label for="actor-fxargs"><span class="tooltip" title="Sprite effects arguments">Args</span><span class="right">Optional</span></label> \
		<input id="actor-fxargs" type="text"/> \
		<label for="actor-duration"><span class="tooltip" title="Sprite effects duration">Duration</span><span class="right">Optional</span></label> \
		<input id="actor-duration" size="4" type="number" min="0.1" value="1.0" step="0.1"/> \
		</fieldset></div> \
		<div class="col_4"> \
		<fieldset><legend>Avatar</legend> \
		<label for="actor-avatar"><span class="tooltip" title="Avatar reference tag">Tag</span><span class="right"></span></label> \
		<input id="actor-avatar" type="text" placeholder="Avatar tag"/> \
		<label for="file-avatar"><span class="tooltip" title="Select image file to use as avatar">Avatar file</span><span class="right">Optional</span></label> \
		<input id="file-avatar" type="file" /> \
		<label for="avatar-frames"><span class="tooltip" title="Number of frames for a multi-frame avatar">Frames</span><span class="right">Optional</span></label> \
		<input id="avatar-frames" size="4" type="number" min="0" value="0" step="1"/> \
		<label for="avatar-fps"><span class="tooltip" title="Frames per second for avatar animation">FPS</span><span class="right">Optional</span></label> \
		<input id="avatar-fps" size="4" type="number" min="0" value="0" step="1"/> \
		<label for="avatar-reps"><span class="tooltip" title="Number of repetitions for avatar animation">Repetitions</span><span class="right">Optional</span></label> \
		<input id="avatar-reps" size="4" type="number" min="-1" value="-1" step="1"/> \
		</fieldset> \
		<fieldset><legend>Dialog</legend> \
		<input type="radio" name="actor-dialog" value="actor-box" checked /> <label for="actor-box" class="inline"><span class="tooltip" title="Display dialog in a script box">Textbox</span></label><br /> \
		<input type="radio" name="actor-dialog" value="actor-balloon" /> <label for="actor-balloon" class="inline"><span class="tooltip" title="Display dialog in a balloon">Balloon</span></label><br /> \
		<textarea id="actor-text" placeholder="Place actor dialog"></textarea>		 \
		<input type="checkbox" id="actor-append"/> <label for="actor-append" class="inline"><span class="tooltip" title="Append dialog to previous">Append</span></label><br /> \
		<label for="file-voice"><span class="tooltip" title="Add a voice file to dialog">Voice</span><span class="right">Optional</span></label> \
		<input id="file-voice" type="file" /> \
		</fieldset></div></form><hr /> \
		<button id="actor-gen" class="large orange">Generate code</button><p></p> \
		<output id="actor-res"></output><output id="actor-status"></output> \
');

$("#file-sprite").change( function(evt) {
	var context = document.getElementById('actor-spreview').getContext("2d");
	context.clearRect(0, 0, 96, 128);
	var sprite = new Image();
	sprite.onload = function() {
		context.drawImage(sprite, 0, 0, 96, 128);
		URL.revokeObjectURL(sprite.src);
	};
	sprite.src = URL.createObjectURL(evt.target.files[0]);
});
$("#file-avatar").change( function(evt) {
	var context = document.getElementById('actor-apreview').getContext("2d");
	context.clearRect(0, 0, 64, 64);
	var avatar = new Image();
	avatar.onload = function() {
		context.drawImage(avatar, 0, 0, 64, 64);
		URL.revokeObjectURL(avatar.src);
	};
	avatar.src = URL.createObjectURL(evt.target.files[0]);
});
$("#file-voice").change( function(evt) {
	var dub = document.getElementById('actor-vpreview');
	dub.src = URL.createObjectURL(evt.target.files[0]);
});


$("#actor-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#actor-res").val("");
	$("#actor-status").val("");
	var id = $("#actor-id").val();
	
	if (id) {
		code.push('actor, ', '{id:"', id, '"'); 

		// if remove actor, actor has been previously defined, ignore other params
		if ($("#actor-remove").prop("checked"))
			code.push(', remove:"actor"');
		// if hide actor, actor has been previously defined, ignore other params
		else if (!$("#actor-show").prop("checked"))
			code.push(', show:false');
			// actor is automatically shown, so no need for show:true
		else {
			var nick = $("#actor-nick").val();
			if (nick) { 
				code.push(', nick:"', nick, '"');
				code.push(', color:"', $("#actor-color").val(), '"');
			}
			
			var position = $("#actor-pos option:selected").text();
			if (position != "Auto")
				code.push(', position:"', position.toLowerCase(), '"');
			var order = $("#actor-zorder").val();
			if (order != 0)
				code.push(', z_order:', order);
			// actor is automatically shown, so no need for show:true
			//if ($("#actor-show").prop("checked") && !$("#actor-sprite-remove").prop("checked"))
			//	code.push(', show:true');
			
			var sprite = $("#actor-tag").val();
			if (sprite) {
				var spritefile = $("#file-sprite").val();
				var i = spritefile.indexOf("fakepath");
				if (i != -1) spritefile = spritefile.substr(i+9);
				if ($("#actor-sprite-remove").prop("checked"))
					code.push(', remove:"', sprite, '"');
				else {
					if (spritefile) {
						code.push(', sprite:["', sprite, '"');
						code.push(', "', spritefile, '"');
						msg_type = "warning"; msg_index = 1;
						code.push(', "', $("#actor-align option:selected").text().toLowerCase(), '"')
						var frames = $("#actor-frames").val();
						if (frames > 0) {
							code.push(', ', frames, ', ', $("#actor-fps").val(), ', ', $("#actor-reps").val());
						}
						code.push(']');
					}
					else {
						code.push(', sprite:"', sprite, '"');
					}
				}
			}
			
			var avatar = $("#actor-avatar").val();
			if (avatar) {
				var avatarfile = $("#file-avatar").val();
				var i = avatarfile.indexOf("fakepath");
				if (i != -1) avatarfile = avatarfile.substr(i+9);
				if (avatarfile) {
					code.push(', avatar:["', avatar, '"');
					code.push(', "', avatarfile, '"');
					msg_type = "warning"; msg_index = 1;
					var frames = $("#avatar-frames").val();
					if (frames > 0) {
						code.push(', ', frames, ', ', $("#avatar-fps").val(), ', ', $("#avatar-reps").val());
					}
					code.push(']');
				}
				else {
					code.push(', avatar:"', avatar, '"');
				}
			}
			
			var effects = $("#actor-effects option:selected").text();
			if (effects != "None") {
				code.push(', effect:"', effects.toLowerCase().replace(' [args]', ''));
				var args = $("#actor-fxargs").val();
				if (args) code.push(' ', args);
				code.push('"');
				code.push(', time:', $("#actor-duration").val());
			}
			
			var text = $("#actor-text").val();
			if (text) {
				if ($("input[name='actor-dialog']:checked").val() == "actor-box")
					code.push(', say:"', text, '"');
				else
					code.push(', balloon:"', text, '"');
				if ($("#actor-append").prop("checked")) 
					code.push(', append:true');
				else
					code.push(', append:false');
				var dub = $("#file-voice").val();
				var i = dub.indexOf("fakepath");
				if (i != -1) dub = dub.substr(i+9);
				if (dub) {
					code.push(', voice:"', dub, '"');
					msg_type = "warning"; msg_index = 3;
				}
			}
		}
		code.push('},');
		$("#actor-res").html('<pre>'+code.join('')+'</pre>');
	}
	else {
		msg_type = "error"; msg_index = 4;
	}
	document.getElementById("actor-status").innerHTML = show_msg(msg_index, msg_type);
});