$(function() {
  window.wajug = window.wajug || {};
  window.wajug.lgg = "en";

  $(document).on("lgg.change", function() {
    $("[data-msg]").each(function(i, e) {
      $(e).html(window.wajug.messages.__path__[$(e).data("msg")][window.wajug.lgg]);
    });
  });

  $(document).trigger("lgg.change");

  $('[href="#fr"]').click(function() {
    window.wajug.lgg = "fr";
    $(document).trigger("lgg.change");
  });
  $('[href="#en"]').click(function() {
    window.wajug.lgg = "en";
    $(document).trigger("lgg.change");
  });

  $('[href="#events"]').click(function() {
    $.get("events/index.html", function(h) {
      $("#main").html(h);
      $(document).trigger("lgg.change");
    });
  });
});