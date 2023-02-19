$(function(){

    
    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="/img/arrow-right.svg" alt="arrow-right"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/img/arrow-left.svg" alt="arrow-left"></button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false
              }
            }
          ]
        });
    
    $('.menu__btn').on('click', function(){
        $('.header__top__inner').toggleClass('header__top__inner--active');
    });
    
    var mixer = mixitup('.portfolio__content');
    
});