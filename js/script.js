/**
 * Created by Venkat on 1/10/2017.
 */

$(".resume").animatedModal();

$(document).ready(function(){

    // Nav bar scroll animation
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

    // Smooth scrolling
    $('a.switch').on('click',function(event) {
        var fn = event.currentTarget.id;
        var hash = "dummy";
        switch(fn) {
            case "ski": hash = "skills"; break;
            case "exp": hash = "experience"; break;
            case "edu": hash = "education"; break;
            case "pro": hash = "projects"; break;
            case "con": hash = "contact"; break;
            case "top": hash = "wall"; break;
            default: hash = "wall"; break;
        }
        $('body').animate({
            scrollTop: $('#'+hash).offset().top
        }, 600);
    });


});
