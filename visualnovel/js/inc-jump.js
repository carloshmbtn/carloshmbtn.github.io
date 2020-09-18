document.write('\
		<h4><i class="fa fa-code-fork"></i> Jump</h4>Description: Script jumps to specified label.<hr /> \
		<form class="vertical"><div class="col_4"> \
		<label for="jump-pos"><span class="tooltip" title="Unconditional jump to given label, e.g. label or chapter#label">Label</span><span class="right"></span></label> \
		<input type="text" id="jump-pos" placeholder="Enter label here" required></textarea>		 \
		<label for="jump-table"><span class="tooltip" title="Conditions to check for jump">Conditions</span><span class="right">Optional</span></label> \
		<table cellspacing="0" cellpadding="0" id="jump-table"> \
		<thead><tr> \
			<th><span class="tooltip" title="Name of variable"><span class="row-header">Variable</span></span></th> \
			<th><span class="tooltip" title="Value to check; Note:string must be entered with quotes"><span class="row-header">Value</span></span></th> \
			<th><span class="tooltip" title="Add row"><i class="fa fa-plus fa-2x jump-add"></i></span></th> \
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
		</div></form><hr /> \
		<button id="jump-gen" class="large orange">Generate code</button><p></p> \
		<output id="jump-res"></output><output id="jump-status"></output> \
');
$(".jump-add").click( function() {
	var clone = $("#jump-table").find('tr.hide').clone(true).removeClass('hide table-line');
	$("#jump-table").append(clone);
});

$("#jump-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#jump-res").val("");
	$("#jump-status").val("");
	var label = $("#jump-pos").val();
	if (label) {
		code.push('jump, ');
		//code.push('jump, {label:"', label,'"');

		var conds = [];
		jQuery.fn.shift = [].shift;
		var rows = $("#jump-table").find('tr:not(:hidden)');
		rows.shift();	// ignore header row
		rows.each( function() {
			var td = $(this).find('td');
			if (td.eq(0).text() && td.eq(1).text())
				//code.push(', ', td.eq(0).text(), ':', td.eq(1).text()); 
				conds.push(td.eq(0).text()+':'+td.eq(1).text());
		});
		if (conds.length > 0) {
			code.push('{label:"', label, '"');
			for (i=0; i<conds.length; i++)
				code.push(', ', conds[i]);
			code.push('},');
		}
		else 
			code.push('"', label, '",');
		$("#jump-res").html('<pre>'+code.join('')+'</pre>');
	}
	else {
		msg_type = "error"; msg_index = 5;
	}
	document.getElementById("jump-status").innerHTML = show_msg(msg_index, msg_type);
});