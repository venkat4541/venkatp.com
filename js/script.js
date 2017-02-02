/**
 * Created by Venkat on 1/10/2017.
 */

$(".resume").animatedModal();

// Jquery
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


    $(document).on('click', 'a[href^="#"]', function (e) {
        // target element id
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        e.preventDefault();
        var pos = $(id).offset().top - 50;
        $('body, html').animate({scrollTop: pos});
    });

    // Responsive Nav bar
    $('#icon').on('click', function() {
        //noinspection JSJQueryEfficiency
        if($('#nav').hasClass('responsive')) {
            $('#nav').removeClass('responsive');
            $('#icon').html('&#9776;');
        } else {
            $('#nav').addClass('responsive');
            $('#icon').text('X');
        }
    });

    // Responsive nav icon show and hide
    $('.switch').on('click', function () {
        //noinspection JSJQueryEfficiency
        if($('#nav').hasClass('responsive')) {
            $('#nav').removeClass('responsive');
            $('#icon').html('&#9776;');
        }
    });

});
