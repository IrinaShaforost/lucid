$(document).ready(function(){
    new WOW().init();

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoHeight:true,
        margin: 10,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:2
            }
        }
    });
});





