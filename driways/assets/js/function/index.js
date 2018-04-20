$('.slide-panel-h').animate({'margin-left':'0%'}).delay(2000).animate({'margin-left':'-50%'});

$('.slide-panel-h .btn-slide').on('click', function() {
    var panel = $('.slide-panel-h');
    if (panel.hasClass("visible")) {
        panel.removeClass('visible').animate({'margin-left':'-50%'});
    } else {
        panel.addClass('visible').animate({'margin-left':'0%'});
    }
    $("i", this).toggleClass("icon-btn-arw-right icon-btn-arw-left");
    return false;
});

$('.slide-panel-v .btn-slide').on('click', function() {
    var panel = $('.slide-panel-v');
	if (panel.hasClass("visible")) {
		panel.removeClass('visible').animate({'top':'50%'});
	} else {
		panel.addClass('visible').animate({'top':'0px'});
	}
    $('.btn-slide-open').toggle();
	return false;
});
