$(function(){

	//scrollUp
	$.scrollUp({
		animation: 'fade',
		scrollText: '', // Text for element
		scrollImg: true,
		activeOverlay: false,
	});

    // Browser File
    $(document).on('change', ':file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });

    $(document).ready( function() {
        $(':file').on('fileselect', function(event, numFiles, label) {
            var input = $(this).parents('.input-group').find(':text'),
                log = numFiles > 1 ? numFiles + ' files selected' : label;
            if( input.length ) {
                input.val(log);
            } else {
                if( log ) alert(log);
            }
        });
    });

    // Javascript to enable link to tab
    var url = document.location.toString();
    if (url.match('#')) {
        $('.nav-crew a[href="#' + url.split('#')[1] + '"]').tab('show');
    }

    // Change hash for page-reload
    $('.nav-crew a').on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash;
        $('html,body').animate({scrollTop: $('body').offset().top}, 0);
    })

    // search slide
    $('.btn-group-search').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
    });
    $('.btn-group-search').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
    });


});
