$(document).ready(function () {
	var plate_button = $('.plate-button');
	var arrow_dropdown = $('.test');
	var sidebar_dropdown = $('.sidebar-menu');
	var open_modal = $('#open_modal');
	var close_modal = $('.modal-close');

	plate_button.mouseenter(function () {
		$(this).parent().parent().children('.custom-nav-item-collapse').show();
	}).mouseleave(function () {
		$(this).parent().parent().children('.custom-nav-item-collapse').hide();
  });

  $('.custom-nav-item-collapse').mouseenter(function () {
    $(this).show();
  });

  // sidebar_dropdown.click(function (){
  //   console.log('test');
  //   sidebar_dropdown.toogle();
  // })



	// arrow_dropdown.click(function () {
  //   console.log('test');
	// 	var dropdown = $(this).parent().parent().children('.custom-dropdown-collapse');
	// 	dropdown.toggle();
	// 	$('.custom-dropdown-collapse').each(function () {
  //     console.log("customr-dropdown");
	// 		if (!$(this).is(dropdown)) {
	// 			$(this).hide();
	// 		}
	// 	});
	// });

	// open_modal.click(function () {
  //   console.log('modal');
	// 	$('#custom-modal').show();
	// 	$('.custom-dropdown-collapse').hide();
	// });

	// close_modal.click(function () {
	// 	$('#custom-modal').hide();
	// 	$('.custom-dropdown-collapse').hide();
	// });
});
