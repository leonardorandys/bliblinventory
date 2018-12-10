$( document ).ready(function() {
    $("#includeDetailPermintaan").load("detailPermintaanKaryawan.html");
    $("#includeDetailPermintaan").hide();
    $("#closeDetailPermintaan").hide();
    
    $("#closeDetailPermintaan").click(function(){
        $("#includeDetailPermintaan").fadeOut();
        $("#closeDetailPermintaan").fadeOut();
    });
    
    $("#klikTabelPermintaan").click(function(){
        $("#includeDetailPermintaan").fadeIn();
        $("#closeDetailPermintaan").fadeIn();
    });
});