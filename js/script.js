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

    window.addEventListener('scroll',function(e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300;

        if(distanceY > shrinkOn) {
            $('header').addClass('minimize');
            $('#logo').addClass('logo-min');
            $('.nav-item').addClass('nav-item-min');
        } else {
            if($('header').hasClass('minimize')) {
                $('header').removeClass('minimize');
            }
            if($('#logo').hasClass('logo-min')) {
                $('#logo').removeClass('logo-min');
            }
            if($('li').hasClass('nav-item-min')) {
                $('li').removeClass('nav-item-min');
            }
        }

    });
});
