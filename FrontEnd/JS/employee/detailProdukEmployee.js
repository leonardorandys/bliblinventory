$( document ).ready(function() {
    $("#includeHeaderWithSearchBox").load("header/headerWithSearchBoxEmployee.html");
    $("#includeFormPinjam").load("buatPermintaanPeminjamanEmployee.html");
    $("#includeFormPinjam").hide();
    $("#backToDetail").hide();
});

$("#backToDetail").click(function(){
    $("#includeFormPinjam").fadeOut();
    $("#backToDetail").fadeOut();
});

$("#btnPinjam").click(function(){
    $("#includeFormPinjam").fadeIn();
    $("#backToDetail").fadeIn();
});