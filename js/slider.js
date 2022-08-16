$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true

                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        ]
    });

});

