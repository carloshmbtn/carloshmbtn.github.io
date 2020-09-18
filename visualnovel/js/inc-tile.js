document.write('\
		<h4><i class="fa fa-road"></i> Tile</h4>Description: Defines a tile for old-school dungeon crawling.<hr /> \
		<form class="vertical"><div class="col_8"> \
		<label for="tile-id"><span class="tooltip" title="Tile identifier">ID</span><span class="right"></span></label> \
		<input type="text" id="tile-id" placeholder="Enter tile ID here" required></input>		 \
		<table cellspacing="0" cellpadding="0" id="tile-table"> \
		<thead><tr> \
			<th><span class="tooltip" title="Direction of movement"><span class="row-header">Direction</span></span></th> \
			<th><span class="tooltip" title="Wall definition"><span class="row-header">Wall</span></span></th> \
			<th><span class="tooltip" title="Label to jump to"><span class="row-header">Link</span></span></th> \
		</tr></thead> \
		<tbody><tr> \
			<th>North</th> \
			<td contenteditable="true">North wall image</td> \
			<td contenteditable="true">Enter label</td> \
		</tr><tr> \
			<th>East</th> \
			<td contenteditable="true">East wall image</td> \
			<td contenteditable="true">Enter label</td> \
		</tr><tr> \
			<th>South</th> \
			<td contenteditable="true">South wall image</td> \
			<td contenteditable="true">Enter label</td> \
		</tr><tr> \
			<th>West</th> \
			<td contenteditable="true">West wall image</td> \
			<td contenteditable="true">Enter label</td> \
		</tr></tbody> \
		</table> \
		</div></form><hr /> \
		<button id="tile-gen" class="large orange">Generate code</button><p></p> \
		<output id="tile-res"></output><output id="tile-status"></output> \
');


$("#tile-gen").click( function() {
	var code = [];
	var msg_type = "success"; var msg_index = 0;
	
	$("#tile-res").val("");
	$("#tile-status").val("");
	
	var id = $("#tile-id").val();
	if (id) {
		var wall = [];
		var link = [];
		code.push ('tile, {id:"', id, '",<br />');
		
		jQuery.fn.shift = [].shift;
		var rows = $("#tile-table").find('tr:not(:hidden)');
		rows.shift();	// ignore header row
		rows.each( function() {
			var td = $(this).find('td');
			wall.push(td.eq(0).text());
			link.push(td.eq(1).text());
		});
		code.push('wall:[');
		for (i=0; i<4; i++) {
			code.push('"', wall[i], '"');
			if (i<3) code.push(',');
			else code.push('],');
		}
		code.push('<br />link:[');
		for (i=0; i<4; i++) {
			code.push('"', link[i], '"');
			if (i<3) code.push(',');
			else code.push(']');
		}
		code.push('},');
		$("#tile-res").html('<pre>' + code.join('') + '</pre>');
	}
	else {
		msg_type = "error"; msg_index = 10;
	}
	document.getElementById("tile-status").innerHTML = show_msg(msg_index, msg_type);

});