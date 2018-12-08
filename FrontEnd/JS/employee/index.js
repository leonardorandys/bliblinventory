$( document ).ready(function() {
  $(".dropdown-trigger").dropdown({ hover: true, constrainWidth: false });
  $('.sidenav').sidenav();
  $("#includeHeaderWithSearchBox").load("header/headerWithSearchBoxEmployee.html"); 
  $("#includeHomePageEmployee").load("homePageEmployee.html"); 
  $("#includeOrderList").load("orderListEmployee.html"); 
  $("#includeManualOrder").load("buatPermintaanPeminjamanManualEmployee.html"); 
  $("#includeOrderList").hide();
  $("#includeManualOrder").hide();
  
  $("#klikDaftarProduk").click(function(){
    $("#includeHomePageEmployee").fadeIn();
    $("#includeOrderList").fadeOut();
    $("#includeManualOrder").fadeOut();
  });
  
  $("#klikDaftarOrder").click(function(){
    $("#includeHomePageEmployee").fadeOut();
    $("#includeOrderList").fadeIn();
    $("#includeManualOrder").fadeOut();
  });
  
  $("#klikBuatManual").click(function(){
    $("#includeHomePageEmployee").fadeOut();
    $("#includeOrderList").fadeOut();
    $("#includeManualOrder").fadeIn();
  });

});