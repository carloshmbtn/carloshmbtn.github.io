document.write('\
		<h4><i class="fa fa-cog"></i> Set</h4>Description: Sets a user variable.<hr /> \
		<form class="vertical"><div class="col_8"> \
		<table cellspacing="0" cellpadding="0" id="set-table"> \
		<thead><tr> \
			<th><span class="tooltip" title="Name of variable to set"><span class="row-header">Name</span></span></th> \
			<th><span class="tooltip" title="Value, see Documentation for valid values"><span class="row-header">Value</span></span></th> \
			<th><span class="tooltip" title="Add row"><i class="fa fa-plus fa-2x set-add"></i></span></th> \
		</tr></thead> \
		<tbody><tr> \
			<td contenteditable="true">Add variables here</td> \
			<td contenteditable="true">Add values here</td> \
			<td><span class="tooltip" title="Remove row"><i class="fa fa-close fa-2x row-remove"></i></span>&nbsp;<span class="tooltip" title="Shift up"><i class="fa fa-arrow-up fa-2x row-up"></i></span>&nbsp;<span class="tooltip" title="Shift down"><i class="fa fa-arrow-down fa-2x row-down"></i></span></td> \
		</tr><tr class="hide"> \
			<td contenteditable="true">Add more variables</td> \
			<td contenteditable="true">Add more values</td> \
			<td><i class="fa fa-close fa-2x row-remove"></i>&nbsp;<i class="fa fa-arrow-up fa-2x row-up"></i>&nbsp;<i class="fa fa-arrow-down fa-2x row-down"></i></td> \
		</tr></tbody> \
		</table> \
		</div></form><hr /> \
		<button id="set-gen" class="large orange">Generate code</button><p></p> \
		<output id="set-res"></output><output id="set-status"></output> \
');

$(".set-add").click( function() {
	var clone = $("#set-table").find('tr.hide').clone(true).removeClass('hide table-line');
	$("#set-table").append(clone);
});

$("#set-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#set-res").val("");
	$("#set-status").val("");
	
	code.push('set, {');
	
	jQuery.fn.shift = [].shift;
	var rows = $("#set-table").find('tr:not(:hidden)');
	rows.shift();	// ignore header row
	rows.each( function(i) {
		var td = $(this).find('td');
		code.push(td.eq(0).text(), ':', td.eq(1).text()); 
		if (i < rows.length-1) code.push(', ');
	});
	
	code.push('},');
	$("#set-res").html('<pre>'+code.join('')+'</pre>');
	
	document.getElementById("set-status").innerHTML = show_msg(msg_index, msg_type);
});