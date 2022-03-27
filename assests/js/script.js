$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 6,
    loop: true,
    margin: 10,
    autoplay: true,
    dots: false,
    autoplayTimeout: 1000,
    // autoplayHoverPause: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 3,
      },
      550: {
        items: 4,
      },
      768: {
        items: 6,
      },
    },
  });

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
