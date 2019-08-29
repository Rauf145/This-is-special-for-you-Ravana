$(document).ready(function () {
	var plate_button = $('.plate-button');
	var arrow_dropdown = $('.arrow_dropdown');
	var open_modal = $('.open_modal');

	plate_button.mouseenter(function () {
		$(this).parent().parent().children('.custom-nav-item-collapse').show();
	}).mouseleave(function () {
		$(this).parent().parent().children('.custom-nav-item-collapse').hide();
	});

	arrow_dropdown.click(function () {
		var dropdown = $(this).parent().parent().children('.custom-dropdown-collapse');
		dropdown.toggle();
		$('.custom-dropdown-collapse').each(function () {
			if (!$(this).is(dropdown)) {
				$(this).hide();
			}
		});
	});

	open_modal.click(function () {

	});
});