$( document ).ready(function() {
    $("#includeFormPinjam").load("buatPermintaanPeminjaman.html");
    $("#includeFormPinjam").hide();
    $("#backToDetail").hide();
    
    $("#backToDetail").click(function(){
        $("#includeFormPinjam").fadeOut();
        $("#backToDetail").fadeOut();
    });
    
    $("#btnPinjam").click(function(){
        $("#includeFormPinjam").fadeIn();
        $("#backToDetail").fadeIn();
    });
});