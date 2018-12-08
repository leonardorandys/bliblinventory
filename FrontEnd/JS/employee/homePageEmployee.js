$( document ).ready(function() {
    $("#includeHeaderWithSearchBox").load("header/headerWithSearchBoxEmployee.html"); 
    $("#includeDetailProduk").load("detailProdukEmployee.html"); 
    $("#includeDetailProduk").hide();
    $("#closeDetailProduk").hide();
});

$("#clickDetail").click(function(){
    $("#includeDetailProduk").fadeIn();
    $("#closeDetailProduk").fadeIn();
});

$("#closeDetailProduk").click(function(){
    $("#includeDetailProduk").fadeOut();
    $("#closeDetailProduk").fadeOut();
});