document.write('\
		<h4><i class="fa fa-spinner"></i> Animation</h4>Description: Defines a set (or array) of custom reusable animation that can be used for scenes, overlays or actors.<hr /> \
		<form class="vertical"><div class="col_8"> \
		<label for="anim-name"><span class="tooltip" title="Animation identifier">Name</span><span class="right"></span></label> \
		<input type="text" id="anim-name" placeholder="Enter animation ID here" required></input>		 \
		<table cellspacing="0" cellpadding="0" id="anim-table"> \
		<thead><tr> \
			<th><span class="tooltip" title="Effects to apply to element"><span class="row-header">Effects</span></span></th> \
			<th><span class="tooltip" title="Duration of animation in seconds"><span class="row-header">Duration</span></span></th> \
			<th><span class="tooltip" title="Add row"><i class="fa fa-plus fa-2x anim-add"></i></span></span></th> \
		</tr></thead> \
		<tbody><tr> \
			<td contenteditable="true">Add effects here</td> \
			<td contenteditable="true">Add duration here</td> \
			<td><span class="tooltip" title="Remove row"><i class="fa fa-close fa-2x row-remove"></i></span>&nbsp;<span class="tooltip" title="Shift up"><i class="fa fa-arrow-up fa-2x row-up"></i></span>&nbsp;<span class="tooltip" title="Shift down"><i class="fa fa-arrow-down fa-2x row-down"></i></span></td> \
		</tr><tr class="hide"> \
			<td contenteditable="true">Add more choices</td> \
			<td contenteditable="true">Add more actions</td> \
			<td><i class="fa fa-close fa-2x row-remove"></i>&nbsp;<i class="fa fa-arrow-up fa-2x row-up"></i>&nbsp;<i class="fa fa-arrow-down fa-2x row-down"></i></td> \
		</tr></tbody> \
		</table> \
		</div></form><hr /> \
		<button id="anim-gen" class="large orange">Generate code</button><p></p> \
		<output id="anim-res"></output><output id="anim-status"></output> \
');

$(".anim-add").click( function() {
	var clone = $("#anim-table").find('tr.hide').clone(true).removeClass('hide table-line');
	$("#anim-table").append(clone);
});


$("#anim-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#anim-res").val("");
	$("#anim-status").val("");
	
	var id = $("#anim-name").val();
	if (id) {
		code.push('animation, ["', id, '"');
		
		jQuery.fn.shift = [].shift;
		var rows = $("#anim-table").find('tr:not(:hidden)');
		rows.shift();	// ignore header row
		rows.each( function() {
			var td = $(this).find('td');
			code.push(',<br /> ', td.eq(1).text(), ', '); 
			code.push('"', td.eq(0).text(), '"');
		});
		
		code.push('],');
		$("#anim-res").html('<pre>'+code.join('')+'</pre>');
	}
	else {
		msg_type = "error"; msg_index = 8;
	}
	document.getElementById("anim-status").innerHTML = show_msg(msg_index, msg_type);
});