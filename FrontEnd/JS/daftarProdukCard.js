$( document ).ready(function() {
    $(".dropdown-trigger").dropdown({ hover: true, constrainWidth: false });
    $('.sidenav').sidenav();
    $("#includeOrderList").load("../mutual/orderList.html"); 
    $("#includeManualOrder").load("../mutual/buatPermintaanPeminjamanManual.html"); 
    $("#includeDetailProduk").load("detailProduk.html"); 
    $("#includeOrderList").hide();
    $("#includeManualOrder").hide();    
    $("#includeDetailProduk").hide();
    $("#closeDetailProduk").hide();
 
    $("#clickDetail").click(function(){
        $("#includeDetailProduk").fadeIn();
        $("#closeDetailProduk").fadeIn();
    });
    
    $("#closeDetailProduk").click(function(){
        $("#includeDetailProduk").fadeOut();
        $("#closeDetailProduk").fadeOut();
    });
});
