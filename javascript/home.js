
$('.carousel.carousel-slider').carousel({ fullWidth: true });

$(document).ready(function () {
    $('.carousel').carousel({ dist: 0 });
    window.setInterval(function () { $('.carousel').carousel('next') }, 5000)
});

$(".btn-floating2").click(function () {
    $('html, body').animate({
        scrollTop: $("#bottom").offset().top
    }, 1500);
});