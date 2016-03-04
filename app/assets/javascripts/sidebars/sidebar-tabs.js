var tabSelect = function() {
  $('#nation-tab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show');
    $("#nationwide-charts").show();
    $("#city-specific-charts").hide()
    $(".news-holder-master").hide()
  })

  $('#city-tab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show');
    $("#nationwide-charts").hide();
    $("#city-specific-charts").show()
    $(".news-holder-master").show()
  })
}

var showCityTabSidebar = function(){
  $("#city-tab").tab('show');
  $("#nationwide-charts").hide();
  $("#city-specific-charts").show();
  $('.mini-submenu-right').hide();
  $('.sidebar-right .sidebar-body').show('slide');
}

var showNationalTabSidebar = function(){
  $("#nation-tab").tab('show');
  $("#nationwide-charts").show();
  $("#city-specific-charts").hide();
  $('.mini-submenu-right').hide();
  $('.sidebar-right .sidebar-body').show('slide');
}
