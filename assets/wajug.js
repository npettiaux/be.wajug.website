$(function() {
  $doc = $(document);

  window.wajug = window.wajug || {};
  window.wajug.lgg = "en";

  $doc.on("lgg.change", function() {
    $("[data-msg]").each(function(i, e) {
      $(e).html(window.wajug.messages.__path__[$(e).data("msg")][window.wajug.lgg]);
    });
  });

  $doc.trigger("lgg.change");

  $('[href="#"]').click(function() {
    $.get("home.html", function(h) {
      $("#main").html(h);
      $doc.trigger("lgg.change");
    });
    $("#navbar .active").toggleClass("active");
    $(this).parent().toggleClass("active");
  });

  $('[href="#"]').click();

  $('[href="#fr"]').click(function() {
    window.wajug.lgg = "fr";
    $doc.trigger("lgg.change");
  });
  $('[href="#en"]').click(function() {
    window.wajug.lgg = "en";
    $doc.trigger("lgg.change");
  });

  $('[href="#events"]').click(function() {
    $.get("events/index.html", function(h) {
      $("#main").html(h);
      $doc.trigger("lgg.change");
      $("a.details:first").click();
    });
    $("#navbar .active").toggleClass("active");
    $(this).parent().toggleClass("active");
  });

  $('[href="#mission"]').click(function() {
    $.get("mission.html", function(h) {
      $("#main").html(h);
      $doc.trigger("lgg.change");
      $("a.details:first").click();
    });
    $("#navbar .active").toggleClass("active");
    $(this).parent().toggleClass("active");
  });

  $doc.on("dblclick", "[data-msg]", function(event) {
    if (event.ctrlKey) {
      $doc.trigger("edit", "[data-msg='"+$(this).data("msg")+"']");
    }
  });

  $('#showMsg').modal('hide');

  $doc.on("click", "[data-wysihtml5-action='process']", function() {
    $s = $("#showMsg");
    var msgKey = $($("#edit").data("element")).data("msg");
    $s.find(".modal-header h3 span").html(msgKey);
    $s.find("textarea").val($("#editor").val().replace(/'/g, "\\'"))
    $s.modal();
  });

  $doc.on("click", "[data-wysihtml5-action='close']", function() {
    $("#editor").val("");
    $($("#edit").data("element")).show();
    $("#edit").data("element", "");
    $("#edit").remove();
  });

  $doc.on("edit", function(event, element) {
    $el = $(element);
    var w = $el.width(),
        h = $el.height();
    $el.hide();
    $el.after($($("#toolbar-template").html()));
    $("#edit").data("element", element);
    $("#editor").val($el.html());
    var editor = new wysihtml5.Editor("editor", { // id of textarea element
      toolbar:      "toolbar", // id of toolbar element
      stylesheets:  "assets/xing-wysihtml5/editor.css", //needed stylesheet for formatting the rendered text
      parserRules:  wysihtml5ParserRules // defined in parser rules set
    });
    $("#editor").width(w);
    $("#editor").height(h);
  });

  $doc.on("click", "a.details", function() {
    var me = this;
    $.get(
        $(this).attr("href"),
        function (h) {
          $("#talk-content").html(h);
          $("a.details button.disabled").toggleClass("disabled");
          $(me).find("button").toggleClass("disabled");
          $doc.trigger("lgg.change");
        }
      );
      return false;
  });

  $doc.on("click", '.sponsorFlip', function(){
    // $(this) point to the clicked .sponsorFlip element (caching it in elem for speed):
    var elem = $(this);
    if(elem.data('flipped'))
    {
      elem.revertFlip();
      elem.data('flipped',false)
    }
    else
    {
      elem.flip({
        direction:'lr',
        speed: 350,
        onBefore: function(){
          elem.html(elem.siblings('.sponsorData').html());
        }
      });
      elem.data('flipped',true);
    }
  });

});