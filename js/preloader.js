(function ($) {
  "use strict";

  /*============= preloader js css =============*/
  var cites = [];
  cites[0] =
    "We design Banca for the readers, optimizing not for page views or engagement";
  cites[1] = "Banca turns out that context is a key part of learning.";
  cites[2] = "You can create any type of product documentation with Banca";
  cites[3] = "Advanced visual search system powered by Ajax";
  var cite = cites[Math.floor(Math.random() * cites.length)];
  //$("#preloader p").text("");
  $("#preloader").addClass("loading");

  $(window).on("load", function () {
    setTimeout(function () {
      $("#preloader").addClass("contract");
      setTimeout(function () {
        $("#preloader").hide();
        $("#preloader").removeClass("loading contract");
      }, 600);
    }, 300);
  });
})(jQuery);
