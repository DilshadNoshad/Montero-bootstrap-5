$(document).ready(function () {
  // preloader

  $(window).on("load", function () {
    $("#loader").fadeOut("1000");
  });

  // change navbar
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 90) {
      $(".navbar").addClass("fixed-nav");
    } else {
      $(".navbar").removeClass("fixed-nav");
    }
  });
  // back to top

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 250) {
      $("#back-top").addClass("active-back-top");
    } else {
      $("#back-top").removeClass("active-back-top");
    }
  });

  $("#back-top").click(function () {
    $(window).scrollTop(0);
  });

  var scrollLink = $(".nav-link");

  // smoothScrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body, html").animate({ scrollTop: $(this.hash).offset().top }, 1000);
  });

  // Onepage scroll active
  $(window).scroll(function () {
    var position = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 20;
      // console.log(position);
      if (sectionOffset <= position) {
        $(this).parent().addClass("active-item-links");
        $(this).parent().siblings().removeClass("active-item-links");
      }
    });
  });

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
