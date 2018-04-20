jQuery(document).ready(function($){
    $('#header').hcSticky({
    });
});

$(function(){
    $('.datepicker').datepicker({
        language: 'zh-TW'
    });

    $('.c-checkall').on('click', function(e) {
        $( this ).toggleClass("bg-info"); //you can list several class names
        e.preventDefault();
    });

    $('.btn-upload').click(function(){
        $('#img-upload').trigger('click');
    });

    $('body').popover({
        selector: '[data-popover]',
        trigger: 'click hover',
        placement: 'top',
        delay: {show: 50, hide: 50}
    });

    // custom upload
  $(document).on('change', ':file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
  });

  // We can watch for our custom `fileselect` event like this
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

});


$(window).scroll(function() {
    var $pattern = $('.pattern-fade');
    $pattern.css("opacity", 1 - $(window).scrollTop() / 100);
    if($(window).scrollTop() > 100 ) {
        $pattern.css("display",'none');
    } else {
        $pattern.css("display",'block');
    }

//    if($(window).scrollTop() > 1 ) {
//        $(".pattern-slide").css("display",'none');
//    } else {
//        $(".pattern-slide").css("display",'block');
//    }

    var scrolledY = $(window).scrollTop();
    $('.pattern-top').css('background-position', 'left ' + ((scrolledY)) + 'px');
    $('.carousel-item .pattern-bottom').css('background-position', 'left ' + ((scrolledY)) + 'px');
});
