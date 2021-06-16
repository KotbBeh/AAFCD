/*jslint browser: true*/
/*global $, WOW, jQuery, alert*/

$(document).ready(function () {
    "use strict";
	
	/** ------- **/
	/** animate **/
	/** ------- **/
	new WOW().init();
    
    /** ------- **/
	/** Scroll **/
	/** ------- **/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });
    $('.scroll-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    
    /** ------- **/
	/** Navbar **/
	/** ------- **/
    $(function () {
        $(".dropdown").hover(
            function () {
                $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            },
            function () {
                $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            }
        );
    });
    //Sort random function
    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }
 
    /** ------- **/
	/** Slider **/
	/** ------- **/
    $("#owl-demo").owlCarousel({
        navigation: true,
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 3,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [979, 3],
        pagination: false,
        navigationText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        beforeInit : function (elem) {
      //Parameter elem pointing to $("#owl-demo")
            random(elem);
        }
    });

    /** ------- **/
	/** Search **/
	/** ------- **/
    $('.click-w').click(function () {
        $('.serc').toggleClass('serc-w');
    });
});


    

