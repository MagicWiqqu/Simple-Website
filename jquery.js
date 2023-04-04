$("#ToHome").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#sekcja1").offset().top - 50
    }, 2000);
});

$("#ToTarget").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#sekcja2").offset().top - 50
    }, 2000);
});

$("#ToLore").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#sekcja3").offset().top - 50
    }, 2000);
});

function scroll1(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#sekcja1").offset().top - 35
    }, 2000);
}

function scroll2(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#sekcja2").offset().top - 35
    }, 2000);
}

function scroll3(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#sekcja3").offset().top - 35
    }, 2000);
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var ograniczenie = $("#sekcja1").offset().top - 25;
    if(scroll  > ograniczenie) {
        $("#side-contain").slideDown("slow");
    }
    if(scroll < ograniczenie){
        $("#side-contain").slideUp("slow");
    }
});

$("#song-on").hide();
$("#song-off").show();
$(document).ready(function(){
    $("#song-change").click(function(){
        var audio = $(".audio")[0];
        if (audio.paused) {
            audio.play();
            $("#song-on").show();
            $("#song-off").hide();
        }  else {
            audio.pause();
            $("#song-on").hide();
            $("#song-off").show();
        }
    });
});

const button = document.getElementById('button');
const emoji = document.getElementById('emoji');

button.addEventListener('click', () => {
  emoji.style.display = 'block';
  setTimeout(() => {
    emoji.style.display = 'none';
  }, 2000);
});
