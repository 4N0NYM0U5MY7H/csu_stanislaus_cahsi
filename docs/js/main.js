/*!
  * main.js (https://hopper.csustan.edu/~cahsi/)
  * Copyright 2021 The Stan-State CAHSI Club (https://github.com/parasiticfrisk/csustanCAHSI/graphs/contributors)
  * Licensed under MIT (https://github.com/parasiticfrisk/csustanCAHSI/blob/master/LICENSE)
  */

// Navbar
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $("#custom-nav").addClass("affix");
        // logo on large screens
        $(".navbar-brand img.img-fluid.d-none.d-md-block").attr("width", "140");
        $(".navbar-brand img.img-fluid.d-none.d-md-block").attr("height", "45");
        $(".navbar-brand img.img-fluid.d-none.d-md-block").attr("src", "img/logo-med.webp");
    }
    else {
        $("#custom-nav").removeClass("affix");
        // logo on large screens
        $(".navbar-brand img.img-fluid.d-none.d-md-block").attr("width", "433");
        $(".navbar-brand img.img-fluid.d-none.d-md-block").attr("height", "90");
        $(".navbar-brand img.img-fluid.d-none.d-md-block").attr("src", "img/logo-large.webp");
    }
});