document.write('\
		<h4><i class="fa fa-bars"></i> Menu</h4>Description: Displays a list of selectable choices in script box. <hr /> \
		<form class="vertical"><div class="col_8"> \
		<label for="menu-text"><span class="tooltip" title="Prompt string for menu">Prompt</span><span class="right">Optional</span></label> \
		<input type="text" id="menu-text" placeholder="Enter prompt string here"></input>		 \
		<table cellspacing="0" cellpadding="0" id="menu-table"> \
		<thead><tr> \
			<th><span class="tooltip" title="Choice displayed on menu"><span class="row-header">Option</span></span></th> \
			<th><span class="tooltip" title="Action when selected, e.g. label or var:value"><span class="row-header">Action</span></span></th> \
			<th><span class="tooltip" title="Add row"><i class="fa fa-plus fa-2x menu-add"></i></span></th> \
		</tr></thead> \
		<tbody><tr> \
			<td contenteditable="true">Add choices here</td> \
			<td contenteditable="true">Add action here</td> \
			<td><span class="tooltip" title="Remove row"><i class="fa fa-close fa-2x row-remove"></i></span>&nbsp;<span class="tooltip" title="Shift up"><i class="fa fa-arrow-up fa-2x row-up"></i></span>&nbsp;<span class="tooltip" title="Shift down"><i class="fa fa-arrow-down fa-2x row-down"></i></span></td> \
		</tr><tr class="hide"> \
			<td contenteditable="true">Add more choices</td> \
			<td contenteditable="true">Add more actions</td> \
			<td><i class="fa fa-close fa-2x row-remove"></i>&nbsp;<i class="fa fa-arrow-up fa-2x row-up"></i>&nbsp;<i class="fa fa-arrow-down fa-2x row-down"></i></td> \
		</tr></tbody> \
		</table> \
		</div></form><hr /> \
		<button id="menu-gen" class="large orange">Generate code</button><p></p> \
		<output id="menu-res"></output><output id="menu-status"></output> \
');

$(".menu-add").click( function() {
	var clone = $("#menu-table").find('tr.hide').clone(true).removeClass('hide table-line');
	$("#menu-table").append(clone);
});


$("#menu-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#menu-res").val("");
	$("#menu-status").val("");
	
	code.push('menu, ["', $("#menu-text").val(), '"');
	
	jQuery.fn.shift = [].shift;
	var rows = $("#menu-table").find('tr:not(:hidden)');
	rows.shift();	// ignore header row
	rows.each( function() {
		var td = $(this).find('td');
		code.push(',<br /> "', td.eq(0).text(), '", '); 
		if (td.eq(1).text().indexOf(':') == -1)
			code.push('"', td.eq(1).text(), '"');
		else
			code.push(td.eq(1).text());
	});
	
	code.push('],');
	$("#menu-res").html('<pre>'+code.join('')+'</pre>');
	
	document.getElementById("menu-status").innerHTML = show_msg(msg_index, msg_type);
});