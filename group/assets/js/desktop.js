$(function(){

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

    $('.btn-close').click(function(){
        $('.tab-pane').addClass('hidden');
    });

    $('.nav-tabs > li').mouseover( function(){
        $(this).find('a').tab('show');
    });
    $('.nav-tabs > li').mouseout( function(){
        $(this).find('a').tab('hide');
    });
});

$('input[type=file]').bootstrapFileInput();
$('.file-inputs').bootstrapFileInput();
