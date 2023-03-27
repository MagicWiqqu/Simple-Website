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

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var ograniczenie = $("#sekcja1").offset().top;
    if(scroll  > ograniczenie) {
        $("#side-contain").slideDown("slow");
    }
    if(scroll < ograniczenie){
        $("#side-contain").slideUp("slow");
    }
});