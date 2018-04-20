$(function(){

	//scrollUp
	$.scrollUp({
		animation: 'fade',
		scrollText: '', // Text for element
		scrollImg: true,
		activeOverlay: false,
	});
});

$(window).scroll(function() {
    if ($(window).scrollTop() >= 10) {
        $('#header').addClass('bg-white header-primary');
    }
    else {
        $('#header').removeClass('bg-white header-primary');
    }
});
