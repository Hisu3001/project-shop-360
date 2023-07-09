// $('.banner-slider').slick({
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: true,
//     autoplay: true,
//     speed: 3000,
    // nextArrow: '<button class="next-slider">Next</button>',
    // prevArrow: '<button class="previous-slider">Previous</button>',
//     // responsive: [{
//     //     breakpoint: 992,
//     //     settings: {
//     //         slidesToShow: 2,
//     //         slidesToScroll: 2
//     //     },
//     //     breakpoint: 768,
//     //     settings: {
//     //         slidesToShow: 2,
//     //         slidesToScroll: 2
//     //     }
//     // }]
// });


$('.banner-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
  });


