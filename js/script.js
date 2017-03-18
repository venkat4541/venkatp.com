/**
 * Created by Venkat on 1/10/2017.
 */

$(".resume").animatedModal();

// Jquery
$(document).ready(function(){

    // setTimeout(function(){
    //    $('.preload').fadeOut('slow', function () {
    //          });
    //      },1000);

    // Nav bar min-max animation
    $(window).scroll(function() {
        if ($(document).scrollTop() > 800) {
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
    $(document).on('click', 'a[href^="#"]', function (e) {
        // target element id
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        if($('#nav').hasClass('responsive')) {
            $('#nav').removeClass('responsive');
            $('#icon').html('&#9776;');
        }
        e.preventDefault();
        var pos = $(id).offset().top - 50;
        $('body, html').animate({scrollTop: pos}, "slow");
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


// Animated Text
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 1px solid #fff; padding: 4px; margin: 0;}";
    document.body.appendChild(css);
};
