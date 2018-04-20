$('.carousel').carousel({
    interval: 0
})

/*
var slideout = new Slideout({
    'panel': document.getElementById('main'),
    'menu': document.getElementById('menu'),
    'padding': 0,
    'tolerance': 70,
    'touch': false
});

window.onload = function() {
    document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
        slideout.toggle();
    });
//    document.querySelector('.menu').addEventListener('click', function(eve) {
//        if (eve.target.nodeName === 'A') { slideout.close(); }
//    });
    var runner = mocha.run();
};

slideout.on('beforeopen', function() {
  document.querySelector('.fixed').classList.add('fixed-open');
});

slideout.on('beforeclose', function() {
  document.querySelector('.fixed').classList.remove('fixed-open');
});

$(".mask").click(function(){
    slideout.toggle();
    $(".mask").toggle();
});

$(".js-slideout-toggle").click(function(){
    $(".mask").toggle();
});
*/

$(function(){
    $(".input-number").TouchSpin({
        min: 0,
        max: 99,
        step: 1,
        decimals: 0,
        boostat: 5,
        maxboostedstep: 10,
        postfix: '位'
    });
   $(".h-scroll").mousewheel(function(event, delta) {
        this.scrollLeft -= (delta * 30);
        event.preventDefault();
   });
});
jQuery(document).ready(function(){
    jQuery('#carousel-gallery').touchwipe({
        wipeLeft: function() {jQuery('#carousel-gallery').carousel('next')},
        wipeRight: function() {jQuery('#carousel-gallery').carousel('prev')},
        min_move_x: 20,
        preventDefaultEvents: false
    });
    jQuery('#carousel-kv').touchwipe({
        wipeLeft: function() {jQuery('#carousel-kv').carousel('next')},
        wipeRight: function() {jQuery('#carousel-kv').carousel('prev')},
        min_move_x: 20,
        preventDefaultEvents: false
    });
    jQuery('#carousel-tour1').touchwipe({
        wipeLeft: function() {jQuery('#carousel-tour1').carousel('next')},
        wipeRight: function() {jQuery('#carousel-tour1').carousel('prev')},
        min_move_x: 20,
        preventDefaultEvents: false
    });
    jQuery('#carousel-tour2').touchwipe({
        wipeLeft: function() {jQuery('#carousel-tour2').carousel('next')},
        wipeRight: function() {jQuery('#carousel-tour2').carousel('prev')},
        min_move_x: 20,
        preventDefaultEvents: false
    });
});


$(function () {
    $('#accordion').on('shown.bs.collapse', function (e) {
        var offset = $('.panel.panel-default > .panel-collapse.in').offset();
        if(offset) {
            $('html,body').animate({
                scrollTop: $('.panel-heading a').offset().top -20
            }, 500);
        }
    });
});
