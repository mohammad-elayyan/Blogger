const move_up=document.querySelector('footer.footer .move-up');

$(document).ready(function(){
    $nav = $('.nav');
    $toggle_collapse = $('.toggle-collapse .toggle-icons i');

    $toggle_collapse.click(function(){
        $nav.toggleClass('collapse');
    });

    /*****     Blog Carousel     *****/
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            551:{
                items:2
            },
            951:{
                items:3
            }
        },
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
    });

    /* AOS Instance */

    AOS.init();
});

/* Move Up Button */

document.addEventListener('scroll' , () =>{
    var scroll_position = window.scrollY;
    if (scroll_position > 400) {
        move_up.style.display ="initial";
    }
    else
    {
        move_up.style.display ="none";
    }
});