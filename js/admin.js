// Counter
$(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 5,
    time: 1000,
  });
});

//Testimonial carousel

$(document).ready(function () {
  var owl = $("#testimonial.owl-carousel");
  owl.owlCarousel({
    margin: 10,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  $(".customNextBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("next.owl.carousel", [300]);
    return false;
  });

  $(".customPrevBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("prev.owl.carousel", [300]);
    return false;
  });
});

// Animate onScroll

AOS.init();
// Navbar
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// News Section

$(document).ready(function () {
  var owl = $("#news.owl-carousel");
  owl.owlCarousel({
    margin: 20,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  $(".customNextBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("next.owl.carousel", [300]);
    return false;
  });

  $(".customPrevBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("prev.owl.carousel", [300]);
    return false;
  });
});

// Team carousel

$(document).ready(function () {
  var owl = $("#team.owl-carousel");
  owl.owlCarousel({
    margin: 30,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // Go to the next item
  $("#team .customNextBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("next.owl.carousel", [300]);
    return false;
  });
  // Go to the previous item
  $("#team .customPrevBtn").click(function (e) {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    e.preventDefault();
    owl.trigger("prev.owl.carousel", [300]);
    return false;
  });
});

// What we do

$(document).ready(function ($) {
  $(".what-we-do .owl-carousel").owlCarousel({
    margin: 30,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
});
