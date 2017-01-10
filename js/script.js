/**
 * Created by Venkat on 1/10/2017.
 */
$(window).scroll(function() {
    if($(document).scrollTop() > 50) {
        $(header).style("height", "35px")
    }
});
