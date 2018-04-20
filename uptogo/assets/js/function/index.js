//$('.carousel').carousel({
//    interval: 5000,
//    pause: "none"
//});

$('#carousel-kv').carousel({
    interval: false,
});

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
        playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
var vid = [
    {'videoId': 'emeFOXaEaxM', 'suggestedQuality': 'hd1080'},
],
        randomvid = Math.floor(Math.random() * (vid.length - 1 + 1));

function setVid(videoId) {
    vid[0].videoId = videoId;
}
function onYouTubePlayerAPIReady() {
    tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
}

function onPlayerReady() {
    tv.loadVideoById(vid[randomvid]);
    tv.mute();
}

function onPlayerStateChange(e) {
    if (e.data === 1) {
        $('#tv').addClass('active');
    } else if (e.data === 0) {
        tv.seekTo(vid[randomvid].startSeconds)
    }
}

function vidRescale() {

    var w = $(window).width() + 200,
            h = $(window).height() + 200;

    if (w / h > 16 / 9) {
        tv.setSize(w, w / 16 * 9);
        $('.tv .screen').css({'left': '0px'});
    } else {
        tv.setSize(h / 9 * 16, h);
        $('.tv .screen').css({'left': -($('.tv .screen').outerWidth() - w) / 2});
    }
}

$(window).on('load resize', function () {
    vidRescale();
});

$('.hi span').on('click', function () {
    $('#tv').toggleClass('mute');
    if ($('#tv').hasClass('mute')) {
        tv.mute();
    } else {
        tv.unMute();
    }
});



//var Carousel = function (element, options) {
//    this.$element = $(element)
//    this.$indicators = this.$element.find('.carousel-indicators, c-2, .carousel-preview')
//    this.options = options
//    this.options.pause == 'hover' && this.$element
//     .on('mouseenter', $.proxy(this.pause, this))
//     .on('mouseleave', $.proxy(this.cycle, this))
//}

$(document).ready(function(){
  $("#carousel-tour2 .carousel-indicators li:first").addClass("active");
  $("#carousel-tour2 .carousel-inner .item:first").addClass("active");
});
