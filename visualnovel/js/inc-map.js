document.write('\
		<h4><i class="fa fa-globe"></i> Map</h4>Description: Defines the access table for a navigation map.<hr /> \
		<form class="vertical"><div class="col_8"> \
		<label for="map-id"><span class="tooltip" title="Map identifier">ID</span><span class="right"></span></label> \
		<input type="text" id="map-id" placeholder="Enter map ID here" required></input>		 \
		<table cellspacing="0" cellpadding="0" id="map-table"> \
		<thead><tr> \
			<th><span class="tooltip" title="Current location"><span class="row-header">Location</span></span></th> \
			<th><span class="tooltip" title="Locations that can be accessed from current location"><span class="row-header">Next Location</span></span></th> \
			<th><span class="tooltip" title="Add row"><i class="fa fa-plus fa-2x map-add"></i></span></th> \
		</tr></thead> \
		<tbody><tr> \
			<td contenteditable="true">"current"</td> \
			<td contenteditable="true">"next1", "next2", etc.</td> \
			<td><span class="tooltip" title="Remove row"><i class="fa fa-close fa-2x row-remove"></i></span>&nbsp;<span class="tooltip" title="Shift up"><i class="fa fa-arrow-up fa-2x row-up"></i></span>&nbsp;<span class="tooltip" title="Shift down"><i class="fa fa-arrow-down fa-2x row-down"></i></span></td> \
		</tr><tr class="hide"> \
			<td contenteditable="true">Add current location here</td> \
			<td contenteditable="true">Add next location(s) here</td> \
			<td><i class="fa fa-close fa-2x row-remove"></i>&nbsp;<i class="fa fa-arrow-up fa-2x row-up"></i>&nbsp;<i class="fa fa-arrow-down fa-2x row-down"></i></td> \
		</tr></tbody> \
		</table> \
		</div></form><hr /> \
		<button id="map-gen" class="large orange">Generate code</button><p></p> \
		<output id="map-res"></output><output id="map-status"></output> \
');

$(".map-add").click( function() {
	var clone = $("#map-table").find('tr.hide').clone(true).removeClass('hide table-line');
	$("#map-table").append(clone);
});


$("#map-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#map-res").val("");
	$("#map-status").val("");
	
	var id = $("#map-id").val();
	if (id) {
		code.push ('map, {id:"', id, '"');
		
		jQuery.fn.shift = [].shift;
		var rows = $("#map-table").find('tr:not(:hidden)');
		rows.shift();	// ignore header row
		rows.each( function() {
			var td = $(this).find('td');
			code.push(',<br /> ', td.eq(0).text().replace(/"/g,''), ':[', td.eq(1).text(), ']');
		});
	
		code.push('},');
		$("#map-res").html('<pre>'+code.join('')+'</pre>');
	}
	else {
		msg_type = "error"; msg_index = 9;
	}
	document.getElementById("map-status").innerHTML = show_msg(msg_index, msg_type);

});