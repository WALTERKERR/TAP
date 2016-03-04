function applyMargins() {
  var rightToggler = $(".mini-submenu-right");

  if (rightToggler.is(":visible")) {
    $("#map .ol-rotate")
    .css("margin-right", 0)
  } else {
    $("#map .ol-rotate")
    .css("margin-right", $(".sidebar-right").width())
  }
}

function isConstrained() {
  return $("div.mid").width() == $(window).width();
}

function applyInitialUIState() {
  if (isConstrained()) {
    $(".sidebar-right .sidebar-body").fadeOut('slide');
    $('.mini-submenu-right').fadeIn();
  }
}

$(function(){
  $('.sidebar-right .slide-submenu').on('click',function() {
    var thisEl = $(this);
    thisEl.closest('.sidebar-body').fadeOut('slide',function(){
      $('#city-chart-container').fadeOut();
      $('#national-chart-container').fadeOut();
      $('.mini-submenu-right').fadeIn();
      applyMargins();
    });
  });

  $('.mini-submenu-right').on('click',function() {
    var thisEl = $(this);
    $('.sidebar-right .sidebar-body').toggle('slide');
    thisEl.hide();
    applyMargins();
  });

  applyInitialUIState();
  applyMargins();
});
