$( document ).ready(function() {
  $(".dropdown-trigger").dropdown({ hover: true, constrainWidth: false });
  $('.sidenav').sidenav();
  $("#includeHomePageEmployee").load("daftarProdukCard.html"); 
  $("#includeOrderList").load("orderList.html"); 
  $("#includeManualOrder").load("buatPermintaanPeminjamanManual.html"); 
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

  $("#imgLogo").click(function(){
    $("#includeHomePageEmployee").fadeIn();
    $("#includeOrderList").fadeOut();
    $("#includeManualOrder").fadeOut();
  });
});