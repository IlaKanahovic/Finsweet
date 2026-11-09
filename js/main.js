$(function () {

    $(".rateYo").rateYo({
        starWidth: "30px",
        rating: "4.5",
        spacing: "5px"
    })

    var mixer = mixitup('.blog__list');

    $('.blog__filter-btn').on('click', function () {
        $('.blog__filter-btn').removeClass('blog__filter-btn--active')
        $(this).addClass('blog__filter-btn--active')
    })

    $('.testi__slider').slick({
        arrows: false,
        infinite: true,
        draggeble: false,
    })
    $('.testi__arrow-prev').on('click', function (e) {
        e.preventDefault()
        $('.testi__slider').slick('slickPrev')
    })
    $('.testi__arrow-next').on('click', function (e) {
        e.preventDefault()
        $('.testi__slider').slick('slickNext')
    })

    $('.asked__acc-link').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('asked__acc-link--active')
        $(this).children('.asked__acc-text').slideToggle()
    })

})