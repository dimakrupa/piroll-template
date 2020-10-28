$(document).ready(function () {
    let show = true;
    $(window).on("scroll", function () {
        if (!show) return false;

        let w_top = $(window).scrollTop();
        let e_top = $("#statistic-count").offset().top - 250;

        if (w_top >= e_top) {
            $('.statistics-number').countTo();
            show = false;
        }

    });


    $('.reviews-slider').slick({
        dots: true,
        dotsClass: 'reviews-slider-dots',
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    const menuToggle = document.querySelector('#nav-menu-toggle');
    const mobileNavContainer = document.querySelector('#mobile-nav');
    const mobileNavitems = document.querySelector('.mobile-nav__link');

    menuToggle.onclick = function () {
        menuToggle.classList.toggle('menu-icon-active');
        mobileNavContainer.classList.toggle('mobile-nav--active');
    }


    $("#header-btn").on("click", function () {
        $('.modal').modal('show');
    });
});






