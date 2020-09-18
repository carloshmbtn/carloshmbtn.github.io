document.write('\
		<h4><i class="fa fa-list-alt"></i> Cform</h4>Description: Create a canvas form.<hr /> \
		<form class="vertical"><div class="col_4"> \
		<fieldset><legend>Cform</legend> \
		<input type="radio" name="cform-cmd" value="cform-define" checked /> <label for="cform-define" class="inline"><span class="tooltip" title="Define a Cform">Define</span></label><br /> \
		<fieldset><input id="cform-id" type="text" placeholder="Enter cform ID here" required/> \
		<input type="checkbox" id="cform-modal" checked/> <label for="cform-modal" class="inline"><span class="tooltip" title="Modal or non-modal cform">Modal</span></label><br /></fieldset> \
		<input type="radio" name="cform-cmd" value="cform-action" /> <label for="cform-action" class="inline"><span class="tooltip" title="Perform a cform action">Action</span></label><br /> \
		<select id="cform-action"> \
			<option value="0">Show</option> \
			<option value="1">Hide</option> \
			<option value="2">Close</option> \
			<option value="3">Default</option> \
		</select> \
		<input type="radio" name="cform-cmd" value="cform-style" /> <label for="cform-style" class="inline"><span class="tooltip" title="Set global CSS styling">CSS Style</span></label><br /> \
		<input id="cform-style" type="text" placeholder="weight size family color"/> \
		</fieldset> \
		</div> \
		<div class="col_8"> \
		<label for="cform-table"><span class="tooltip" title="Add cform elements">Elements</span><span class="right">Copy and paste subcode from below</span></label> \
		<table cellspacing="0" cellpadding="0" id="cform-table"> \
		<thead><tr> \
			<th><span class="tooltip" title="Cform element, see below"><span class="row-header">Elements</span></span></th> \
			<th><span class="tooltip" title="Element parameters, see below"><span class="row-header">Parameters</span></span></th> \
			<th><span class="tooltip" title="Add row"><i class="fa fa-plus fa-2x cform-add"></i></span></th> \
		</tr></thead> \
		<tbody><tr> \
			<td contenteditable="true"></td> \
			<td contenteditable="true"></td> \
			<td><span class="tooltip" title="Remove row"><i class="fa fa-close fa-2x row-remove"></i></span>&nbsp;<span class="tooltip" title="Shift up"><i class="fa fa-arrow-up fa-2x row-up"></i></span>&nbsp;<span class="tooltip" title="Shift down"><i class="fa fa-arrow-down fa-2x row-down"></i></span></td> \
		</tr><tr class="hide"> \
			<td contenteditable="true"></td> \
			<td contenteditable="true"></td> \
			<td><i class="fa fa-close fa-2x row-remove"></i>&nbsp;<i class="fa fa-arrow-up fa-2x row-up"></i>&nbsp;<i class="fa fa-arrow-down fa-2x row-down"></i></td> \
		</tr></tbody> \
		</table> \
		</div> \
		</form> <hr />\
		<button id="cform-gen" class="large orange">Generate code</button><p></p> \
		<output id="cform-res"></output><output id="cform-status"></output><hr /> \
		<h6><i class="fa fa-external-link"></i> <i class="fa fa-underline"></i> <i class="fa fa-picture-o"></i> Cform element</h6>Description: Cform elements as button, marquee or picture \
		<form class="vertical"><div class="col_4"> \
		<label for="celement-type"><span class="tooltip" title="Type of cform element">Type</span><span class="right"></span></label> \
		<select id="celement-type"> \
			<option value="0">Button</option> \
			<option value="1">Marquee</option> \
			<option value="2">Picture</option> \
		</select> \
		<label for="celement-id"><span class="tooltip" title="Element text">ID/Text</span><span class="right"></span></label> \
		<input id="celement-id" type="text" placeholder="Enter button text here" required/> \
		<label for="celement-xy"><span class="tooltip" title="Element position">Position</span><span class="right">[x, y]</span></label> \
		<input id="celement-xy" type="text" placeholder="0, 0" required/> \
		<label for="celement-wd-ht"><span class="tooltip" title="Element dimensions">Dimensions</span><span class="right">Optional, [width, height]</span></label> \
		<input id="celement-wd-ht" type="text" placeholder="0, 0"/> \
		</div><div class="col_4"> \
		<label for="celement-base"><span class="tooltip" title="Element base image">Element base</span><span class="right">for button</span></label> \
		<input id="celement-base" type="text" placeholder="Base image or color" required/> \
		<label for="celement-hover"><span class="tooltip" title="Element hover image">Element hover</span><span class="right">Optional, for button</span></label> \
		<input id="celement-hover" type="text" placeholder="Hover image or color"/> \
		<label for="celement-click"><span class="tooltip" title="Element click image">Element click</span><span class="right">Optional, for button</span></label> \
		<input id="celement-click" type="text" placeholder="Click image or color"/> \
		<label for="celement-frames"><span class="tooltip" title="Array of text or images">Text/Image frames</span><span class="right">for marquee or picture</span></label> \
		<input id="celement-frames" type="text" placeholder="\'text1\', \'text2\', ..."/> \
		<label for="celement-fps"><span class="tooltip" title="Number of frames per second">FPS</span><span class="right">for marquee or picture</span></label> \
		<input id="celement-fps" size="4" type="number" min="0" max="999" value="0" step="0.1"/> \
		<label for="celement-timeout"><span class="tooltip" title="Timer expiration in seconds">Timeout</span><span class="right">Optional, for marquee</span></label> \
		<input id="celement-timeout" size="4" type="number" min="0" max="999" value="0" step="0.1"/> \
		</div><div class="col_4"> \
		<label for="clement-link"><span class="tooltip" title="Action when element is clicked">Action</span><span class="right">Optional</span></label> \
		<input id="celement-link" type="text" placeholder="Keyword, e.g. jump or set"/> \
		<input id="celement-link2" type="text" placeholder="Value, e.g. label or variable"/> \
		<label for="celement-tip"><span class="tooltip" title="Tooltip to display on element hover">Tooltip</span><span class="right">Optional</span></label> \
		<input id="celement-tip" type="text" placeholder="Tooltip to display"/> \
		<input type="checkbox" id="celement-show" checked/> <label for="celement-show" class="inline"><span class="tooltip" title="Show text">Show text</span></label><br /> \
		</div></form><hr />\
		<button id="celement-gen" class="large orange">Generate subcode</button>&nbsp;<button id="celement-add" class="large orange">Add subcode to table</button><p></p>	\
		<pre>Element: <output id="celement-res1"></output><br />\
Parameters: <output id="celement-res2"></output></pre><output id="celement-status"></output><hr /> \
');

$(".cform-add").click( function() {
	var clone = $("#cform-table").find('tr.hide').clone(true).removeClass('hide table-line');
	$("#cform-table").append(clone);
});

$("#cform-gen").click( function() {
	var code = [];
	var msg_type = "success";
	var msg_index = 0;
	
	$("#cform-res").val("");
	$("#cform-status").val("");

	var cmd = $("input[name='cform-cmd']:checked").val();
	switch (cmd) {
		case "cform-define":
			code.push('cform, ["', $("#cform-id").val() ? $("#cform-id").val() : 'def_cform', '", ');
			if ($("#cform-modal").prop("checked")) code.push('true');
			else code.push('false');
			
			var stat = true;
			jQuery.fn.shift = [].shift;
			var rows = $("#cform-table").find('tr:not(:hidden)');
			rows.shift();	// ignore header row
			rows.each( function() {
				var td = $(this).find('td');
				var elem = td.eq(0).text();
				if (elem && ($("#celement-type").text().toLowerCase().search(elem) != -1))
					code.push(',<br /> ', elem.replace(/'|"/g,''), ', {', td.eq(1).text(), '}'); 
				else stat = false;
			});
			code.push('],');
			break;
		case "cform-action":
			code.push('cform, "', $("#cform-action option:selected").text().toLowerCase(), '",');
			break;
		case "cform-style":
			code.push('cform, "', $("#cform-style").val(), '",');
			break;
		default:
			break;
	}
	if (stat) {
		$("#cform-res").html('<pre>'+code.join('')+'</pre>');
		document.getElementById('cform-status').innerHTML = show_msg(msg_index, msg_type);
	}
	else
		document.getElementById('cform-status').innerHTML = show_msg(11, "error");
});

$("#celement-add").click( function() {
	if ($("#celement-res1").html()) {
		var clone = $("#cform-table").find('tr.hide').clone(true).removeClass('hide table-line');
		clone[0].cells[0].innerHTML = $("#celement-res1").html();
		clone[0].cells[1].innerHTML = $("#celement-res2").html();
		$("#cform-table").append(clone);
	}
});
$("#celement-gen").click( function() {
	var subcode = [];
	var msg_type = "success";
	var msg_index = 0;
	
	$("#celement-res1").val("");
	$("#celement-res2").val("");
	$("#celement-status").val("");

	var elem = $("#celement-type option:selected").text().toLowerCase();
	switch (elem) {
		case "button":
			subcode.push('name:"', $("#celement-id").val(), '"');
			var pos = $("#celement-xy").val().replace(/\s/g,"").split(',');
			if (pos[0] && pos[1]) subcode.push(', x:',pos[0],', y:',pos[1]);
			else subcode.push(', x:0, y:0');
			var dim = $("#celement-wd-ht").val().replace(/\s/g,"").split(',');
			if (dim[0] && dim[1]) subcode.push(', w:',dim[0],', h:',dim[1]);
			var img = $("#celement-base").val();
			if (img) subcode.push(', base:"', img, '"');
			else subcode.push(', base:"#000000"');
			img = $("#celement-hover").val();
			if (img) subcode.push(', hover:"', img, '"');
			img = $("#celement-click").val();
			if (img) subcode.push(', click:"', img, '"');
			var link = $("#celement-link").val();
			if (link) { 
				subcode.push(', link:[', link, ', ');
				link = $("#celement-link2").val();
				if (link.indexOf(':') != -1) subcode.push(link, ']');
				else subcode.push('"', link, '"]');
			}
			var tip = $("#celement-tip").val();
			if (tip) subcode.push(', tip:"', tip, '"');
			if ($("#celement-show").prop("checked")) subcode.push(', showText:true');
			else subcode.push(', showText:false');
			break;
		case "marquee":
			var id = $("#celement-id").val();
			subcode.push('name:"', id, '"');
			var pos = $("#celement-xy").val().replace(/\s/g,"").split(',');
			if (pos[0] && pos[1]) subcode.push(', x:',pos[0],', y:',pos[1]);
			else subcode.push(', x:0, y:0');
			var dim = $("#celement-wd-ht").val().replace(/\s/g,"").split(',');
			if (dim[0] && dim[1]) subcode.push(', w:',dim[0],', h:',dim[1]);
			if (id.search("timer") != -1) {
				subcode.push(', timeout:', $("#celement-timeout").val());
				var link = $("#celement-link").val();
				if (link) { 
					subcode.push(', link:[', link, ', ');
					link = $("#celement-link2").val();
					if (link.indexOf(':') != -1) subcode.push(link, ']');
					else subcode.push('"', link, '"]');
				}
			}
			else {
				var fps = $("#celement-fps").val();
				if (fps > 0) {
					subcode.push(', fps:', fps);
					var frames = $("#celement-frames").val().split(',');
					for (var i in frames)
						frames[i] = frames[i].replace(/^\s+|\s+$|"|'/g,'')
					subcode.push(', frames:["', frames.join('","'), '"]');
				}
			}
			break;
		case "picture":
			subcode.push('name:"', $("#celement-id").val(), '"');
			var pos = $("#celement-xy").val().replace(/\s/g,"").split(',');
			if (pos[0] && pos[1]) subcode.push(', x:',pos[0],', y:',pos[1]);
			else subcode.push(', x:0, y:0');
			var fps = $("#celement-fps").val();
			if (fps > 0) {
				subcode.push(', fps:', fps);
				var frames = $("#celement-frames").val().split(',');
				for (var i in frames)
					frames[i] = frames[i].replace(/^\s+|\s+$|"|'/g,'')
				subcode.push(', frames:["', frames.join('","'), '"]');
			}
			break;
		default:
			break;
	}
	$("#celement-res1").html(elem);
	$("#celement-res2").html(subcode.join(''));
	document.getElementById('celement-status').innerHTML = show_msg(msg_index, msg_type);

});