$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /* on click */ 
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
    /* owl carousel */
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-back'),$('.owl-navigation .owl-nav-next')],
        dots: false,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
    });
});
