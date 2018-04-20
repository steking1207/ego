//jQuery(document).ready(function($){
//    $('#header').hcSticky();
//});

//$('.carousel').carousel({
//    interval: 0
//})

$(function(){
    $(".input-number").TouchSpin({
        min: 0,
        max: 99,
        step: 1,
        decimals: 0,
        boostat: 5,
        maxboostedstep: 10,
        postfix: '件'
    });
    $(".h-scroll").mousewheel(function(event, delta) {
        this.scrollLeft -= (delta * 30);
        event.preventDefault();
    });
    $('.modal-toggle').click(function (e) {
        var tab = e.target.hash;
        $('.nav-item > a[href="' + tab + '"]').tab("show");
    });
});

jQuery(document).ready(function(){
    jQuery('.carousel-kv').touchwipe({
        wipeLeft: function() {jQuery('.carousel-kv').carousel('next')},
        wipeRight: function() {jQuery('.carousel-kv').carousel('prev')},
        min_move_x: 20,
        preventDefaultEvents: false
    });
    jQuery('.carousel-car').touchwipe({
        wipeLeft: function() {jQuery('.carousel-car').carousel('next')},
        wipeRight: function() {jQuery('.carousel-car').carousel('prev')},
        min_move_x: 20,
        preventDefaultEvents: false
    });
});
