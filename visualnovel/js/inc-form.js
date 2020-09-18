document.write('\
		<h4><i class="fa fa-list-alt"></i> Form</h4>Description: Create a HTML form.<hr /> \
		<form class="vertical"><div class="col_4"> \
		<label for="form-id"><span class="tooltip" title="Form identifier">ID</span><span class="right"></span></label> \
		<input id="form-id" type="text" placeholder="Enter form ID here" required/> \
		</div> \
		<div class="col_8"> \
		<label for="form-table"><span class="tooltip" title="Add form elements">Elements</span><span class="right">Copy and paste subcode from below</span></label> \
		<table cellspacing="0" cellpadding="0" id="form-table"> \
		<thead><tr> \
			<th><span class="tooltip" title="Form element, see below"><span class="row-header">Elements</span></span></th> \
			<th><span class="tooltip" title="Element parameters, see below"><span class="row-header">Parameters</span></span></th> \
			<th><span class="tooltip" title="Add row"><i class="fa fa-plus fa-2x form-add"></i></span></th> \
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
		<button id="form-gen" class="large orange">Generate code</button><p></p> \
		<output id="form-res"></output><output id="form-status"></output><hr /> \
		<h6><i class="fa fa-check-square-o"></i> <i class="fa fa-columns"></i> <i class="fa fa-font"></i> <i class="fa fa-dot-circle-o"></i> <i class="fa fa-list"></i> <i class="fa fa-exchange"></i> <i class="fa fa-refresh"></i> <i class="fa fa-external-link"></i><br /> Form element</h6>Description: HTML Form elements. \
		<form class="vertical"><div class="col_4"> \
		<label for="felement-type"><span class="tooltip" title="Type of form element">Type</span><span class="right"></span></label> \
		<select id="felement-type"> \
			<option value="0">Checkbox</option> \
			<option value="1">Fieldset</option> \
			<option value="2">Input</option> \
			<option value="3">Radio</option> \
			<option value="4">Select</option> \
			<option value="5">Slider</option> \
			<option value="6">Spinbox</option> \
			<option value="7">Submit</option> \
			<option value="8">Textarea</option> \
		</select> \
		<label for="felement-id"><span class="tooltip" title="Element text">ID/Text</span><span class="right"></span></label> \
		<input id="felement-id" type="text" placeholder="Enter element text here" required/> \
		<label for="felement-bind"><span class="tooltip" title="User variable to bind element to">Bind variable</span><span class="right">Variable must exist</span></label> \
		<input id="felement-bind" type="text" placeholder="Variable name"/> \
		<label for="felement-tip"><span class="tooltip" title="Tooltip to display on element hover">Tooltip</span><span class="right">Optional</span></label> \
		<input id="felement-tip" type="text" placeholder="Tooltip to display"/> \
		</div><div class="col_4"> \
		<label for="felement-placeholder"><span class="tooltip" title="Placeholder text">Placeholder</span><span class="right">Optional, for Input or Textarea</span></label> \
		<input id="felement-placeholder" type="text" placeholder="Enter input placeholder here"/> \
		<label for="felement-value"><span class="tooltip" title="Value for radio option">Value</span><span class="right">Required for Radio</span></label> \
		<input id="felement-value" type="text" placeholder="Enter element value here"/> \
		<label for="felement-options"><span class="tooltip" title="Options for dropdown">Options</span><span class="right">Required for Select/Dropdown</span></label> \
		<input id="felement-options" placeholder="option1, value1, option2, value2, ..."></input>		 \
		<label for="felement-mms"><span class="tooltip" title="Min, Max and Step value for Slider">Min, Max, Step</span><span class="right">Required for Slider</span></label> \
		<input id="felement-mms" placeholder="min, max, step"></input>		 \
		</div><div class="col_4"> \
		</div></form><hr />\
		<button id="felement-gen" class="large orange">Generate subcode</button>&nbsp;<button id="felement-add" class="large orange">Add subcode to table</button><p></p>	\
		<pre>Element: <output id="felement-res1"></output><br />\
Parameters: <output id="felement-res2"></output></pre><output id="felement-status"></output><hr /> \
');

$(".form-add").click( function() {
	var clone = $("#form-table").find('tr.hide').clone(true).removeClass('hide table-line');
	$("#form-table").append(clone);
});

$("#form-gen").click( function() {
	var code = [];
	var msg_type = "success";
	var msg_index = 0;
	
	$("#form-res").val("");
	$("#form-status").val("");

	code.push('form, ["', $("#form-id").val() ? $("#form-id").val() : 'def_form', '"');
			
	var stat = true;
	jQuery.fn.shift = [].shift;
	var rows = $("#form-table").find('tr:not(:hidden)');
	rows.shift();	// ignore header row
	rows.each( function() {
		var td = $(this).find('td');
		var elem = td.eq(0).text();
		if (elem && ($("#felement-type").text().toLowerCase().search(elem) != -1)) {
			if (elem != "fieldset")
				code.push(',<br /> ', elem.replace(/'|"/g,''), ', {', td.eq(1).text(), '}'); 
			else
				code.push(',<br /> ', elem.replace(/'|"/g,''), ', ', td.eq(1).text()); 
		}
		else stat = false;
	});
	code.push('],');

	if (stat) {
		$("#form-res").html('<pre>'+code.join('')+'</pre>');
		document.getElementById('form-status').innerHTML = show_msg(msg_index, msg_type);
	}
	else
		document.getElementById('form-status').innerHTML = show_msg(11, "error");
});

$("#felement-add").click( function() {
	if ($("#felement-res1").html()) {
		var clone = $("#form-table").find('tr.hide').clone(true).removeClass('hide table-line');
		clone[0].cells[0].innerHTML = $("#felement-res1").html();
		clone[0].cells[1].innerHTML = $("#felement-res2").html();
		$("#form-table").append(clone);
	}
});
$("#felement-gen").click( function() {
	var subcode = [];
	var msg_type = "success";
	var msg_index = 0;
	
	$("#felement-res1").val("");
	$("#felement-res2").val("");
	$("#felement-status").val("");

	if ($("#felement-id").val()) {
		var elem = $("#felement-type option:selected").text().toLowerCase();
		switch (elem) {
			case "checkbox":
				subcode.push('name:"', $("#felement-id").val(), '"');
				var bind = $("#felement-bind").val();
				if (bind) subcode.push(', bind:"', $("#felement-bind").val(), '"');
				else {
					msg_type = "error"; msg_index = 12;
				}
				var tip = $("#felement-tip").val();
				if (tip) subcode.push(', tip:"', tip, '"');
				break;
			case "fieldset":
				subcode.push('"', $("#felement-id").val(), '"');
				break;
			case "input":
			case "textarea":
				subcode.push('name:"', $("#felement-id").val(), '"');
				var bind = $("#felement-bind").val();
				if (bind) subcode.push(', bind:"', $("#felement-bind").val(), '"');
				else {
					msg_type = "error"; msg_index = 12;
				}
				var placeholder = $("#felement-placeholder").val();
				if (placeholder) subcode.push(', placeholder:"', placeholder, '"');
				var tip = $("#felement-tip").val();
				if (tip) subcode.push(', tip:"', tip, '"');
				break;
			case "radio":
				subcode.push('name:"', $("#felement-id").val(), '"');
				var bind = $("#felement-bind").val();
				if (bind) subcode.push(', bind:"', $("#felement-bind").val(), '"');
				else {
					msg_type = "error"; msg_index = 12;
				}
				var value = $("#felement-value").val();
				if (value) subcode.push(', value:"', value, '"');
				else {
					msg_type = "error"; msg_index = 14;
				}
				var tip = $("#felement-tip").val();
				if (tip) subcode.push(', tip:"', tip, '"');
				break;
			case "select":
				subcode.push('name:"', $("#felement-id").val(), '"');
				var bind = $("#felement-bind").val();
				if (bind) subcode.push(', bind:"', $("#felement-bind").val(), '"');
				else {
					msg_type = "error"; msg_index = 12;
				}
				var options = $("#felement-options").val();
				if (options) subcode.push(', options:[', options, ']');
				else {
					msg_type = "error"; msg_index = 14;
				}
				var tip = $("#felement-tip").val();
				if (tip) subcode.push(', tip:"', tip, '"');
				break;
			case "slider":
			case "spinbox":
				subcode.push('name:"', $("#felement-id").val(), '"');
				var bind = $("#felement-bind").val();
				if (bind) subcode.push(', bind:"', $("#felement-bind").val(), '"');
				else {
					msg_type = "error"; msg_index = 12;
				}
				var mms = $("#felement-mms").val();
				if (mms) {
					var params = mms.replace(/\s/g,"").split(",");
					subcode.push(', min:', params[0], ', max:', params[1], ', step:', params[2]);
				}
				else {
					msg_type = "error"; msg_index = 14;
				}
				var tip = $("#felement-tip").val();
				if (tip) subcode.push(', tip:"', tip, '"');
				break;
			case "submit":
				subcode.push('name:"', $("#felement-id").val(), '"');
				break;
			default:
				break;
		}
	}
	else {
		msg_type = "error"; msg_index = 13;
	}
	
	if (msg_type == "success") {
		$("#felement-res1").html(elem);
		$("#felement-res2").html(subcode.join(''));
	}
	document.getElementById('felement-status').innerHTML = show_msg(msg_index, msg_type);

});