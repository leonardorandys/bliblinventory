$( document ).ready(function() {
  $(".dropdown-trigger").dropdown({ hover: true, constrainWidth: false });
  $('.sidenav').sidenav();
  $("#includeHomePageEmployee").load("daftarProdukCard.html"); 
  $("#includeOrderList").load("orderList.html"); 
  $("#includeManualOrder").load("buatPermintaanPeminjamanManual.html"); 
  $("#includePermintaanKaryawan").load("permintaanKaryawan.html"); 
  $("#includePermintaanKaryawan").hide();
  $("#includeOrderList").hide();
  $("#includeManualOrder").hide();
  
  $("#klikDaftarProduk").click(function(){
    $("#includeHomePageEmployee").fadeIn();
    $("#includeOrderList").fadeOut();
    $("#includeManualOrder").fadeOut();
    $("#includePermintaanKaryawan").fadeOut();
  });
  
  $("#klikDaftarOrder").click(function(){
    $("#includeHomePageEmployee").fadeOut();
    $("#includeOrderList").fadeIn();
    $("#includeManualOrder").fadeOut();
    $("#includePermintaanKaryawan").fadeOut();
  });
  
  $("#klikBuatManual").click(function(){
    $("#includeHomePageEmployee").fadeOut();
    $("#includeOrderList").fadeOut();
    $("#includeManualOrder").fadeIn();
    $("#includePermintaanKaryawan").fadeOut();
  });

  $("#klikPermintaanKaryawan").click(function(){
    $("#includeHomePageEmployee").fadeOut();
    $("#includeOrderList").fadeOut();
    $("#includeManualOrder").fadeOut();
    $("#includePermintaanKaryawan").fadeIn();
  });
  
  $("#imgLogo").click(function(){
    $("#includeHomePageEmployee").fadeIn();
    $("#includeOrderList").fadeOut();
    $("#includeManualOrder").fadeOut();
    $("#includePermintaanKaryawan").fadeOut();
  });
});