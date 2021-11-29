$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /* on click */ 
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
    /* owl carousel */
    $('.owl-carousel').owlCarousel();
});
