$(function(){
    $('.date').datepicker({
        language: 'zh-TW',
        format: 'yyyy/mm/dd'
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

//  $('a[href*="#"]:not([href="#"])').click(function() {
    $('.btn-anchor').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});

var modalUniqueClass = ".modal";
$('.modal').on('show.bs.modal', function(e) {
  var $element = $(this);
  var $uniques = $(modalUniqueClass + ':visible').not($(this));
  if ($uniques.length) {
    $uniques.modal('hide');
    $uniques.one('hidden.bs.modal', function(e) {
      $element.modal('show');
    });
    return false;
  }
});
