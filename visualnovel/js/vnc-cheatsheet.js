// override menu behavior, as like tabs
$('ul.menu').each(function(){
	var current = $(this).find('li.current');
	if(current.length < 1) { $(this).find('li:first').addClass('current'); }
	current = $(this).find('li.current a').attr('href');
	$(current).show();
});
$(document).on('click', 'ul.menu a[href^="#"]', function(e){
	e.preventDefault();
	var tabs = $(this).parents('ul.menu').find('li');
	var tab_next = $(this).attr('href');
	var tab_current = tabs.filter('.current').find('a').attr('href');
	$(tab_current).hide();
	tabs.removeClass('current');
	$(this).parent().addClass('current');
	$(tab_next).show();
	history.pushState( null, null, window.location.search + $(this).attr('href') );
	return false;
});

function show_msg(index, type) {
	var msg = [
		"Success",
		"Fix file paths relative to game path",
		"Missing file",
		"Remove audio/video filename extension and fix file paths relative to game path",
		"Missing actor ID",
		"Missing label",
		"Missing macro",
		"Missing checkpoint name",
		"Missing animation ID",
		"Missing map ID",
		"Missing tile ID",
		"Invalid form/cform element",
		"Missing bind variable",
		"Missing form element ID",
		"Missing form element value/options",
	];
	var output = [];
	output.push('<div class="notice ', type, '"><i class="fa fa-info-circle"></i>', msg[index], '</div>');
	return output.join('');
}

$('.row-remove').click( function () {
  $(this).parents('tr').detach();
});
$('.row-up').click(function () {
  var row = $(this).parents('tr');
  row.prev().before(row.get(0));
});
$('.row-down').click(function () {
  var row = $(this).parents('tr');
  row.next().after(row.get(0));
});

