/**
 * Created by Venkat on 1/10/2017.
 */
$(".resume").animatedModal();

$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $(window).scroll(function() {
        if ($(document).scrollTop() > 300) {
            $('header').addClass('minimize');
            $('#logo').addClass('logo-min');
            $('li.nav-item').addClass('nav-item-min');
        } else {
            $('header').removeClass('minimize');
            $('#logo').removeClass('logo-min');
            $('li.nav-item').removeClass('nav-item-min');
        }
    });
});
