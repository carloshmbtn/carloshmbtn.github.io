document.write('\
		<h4><i class="fa fa-download"></i> Preload</h4>Description: Preloads some image, audio and/or video resources.<hr /> \
		<form class="vertical"><div class="col_8"> \
		<table cellspacing="0" cellpadding="0" id="preload-table"> \
		<thead><tr> \
			<th><span class="tooltip" title="Elements to preload"><span class="row-header">Elements</span></span></th> \
			<th><span class="tooltip" title="Add row"><i class="fa fa-plus fa-2x preload-add"></i></span></span></th> \
		</tr></thead> \
		<tbody><tr> \
			<td contenteditable="true">Auto</td> \
			<td><span class="tooltip" title="Remove row"><i class="fa fa-close fa-2x row-remove"></i></span>&nbsp;<span class="tooltip" title="Shift up"><i class="fa fa-arrow-up fa-2x row-up"></i></span>&nbsp;<span class="tooltip" title="Shift down"><i class="fa fa-arrow-down fa-2x row-down"></i></span></td> \
		</tr><tr class="hide"> \
			<td contenteditable="true">Add more elements</td> \
			<td><i class="fa fa-close fa-2x row-remove"></i>&nbsp;<i class="fa fa-arrow-up fa-2x row-up"></i>&nbsp;<i class="fa fa-arrow-down fa-2x row-down"></i></td> \
		</tr></tbody> \
		</table> \
		</div></form><hr /> \
		<button id="preload-gen" class="large orange">Generate code</button><p></p> \
		<output id="preload-res"></output><output id="preload-status"></output> \
');

$(".preload-add").click( function() {
	var clone = $("#preload-table").find('tr.hide').clone(true).removeClass('hide table-line');
	$("#preload-table").append(clone);
});


$("#preload-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#preload-res").val("");
	$("#preload-status").val("");
	
	code.push('[');	
	jQuery.fn.shift = [].shift;
	var rows = $("#preload-table").find('tr:not(:hidden)');
	rows.shift();	// ignore header row
	rows.each( function(i) {
		var td = $(this).find('td');
		if (td.eq(0).text().toLowerCase() == 'auto') {
			code = [];
			code.push('"auto",');
			return false;
		}
		else {
			code.push('"', td.eq(0).text(), '"');
		}
		if (i < rows.length-1) code.push(', ');
		else code.push('],');
	});
	
	$("#preload-res").html('<pre>preload, '+ code.join('')+'</pre>');
	document.getElementById("preload-status").innerHTML = show_msg(msg_index, msg_type);
});