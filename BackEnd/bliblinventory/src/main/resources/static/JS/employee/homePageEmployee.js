$( document ).ready(function() {
    $(".detailProduk").click(function(event){
        event.preventDefault();
        ajaxGetDetailProduk(this.id);
    });

    $("#btnPinjam").click(function(event){
        //event.preventDefault();
        //ajaxGetHome();
        window.alert("aa");
    });

    function ajaxGetDetailProduk(kodeProduk){
        $.ajax({
            type : "GET",
            url : window.location+"/"+kodeProduk,
            success: function(result){
                // $("article").load('detailProdukEmployee.html');
                $("article").html('<div class="whiteBoard">\n' +
                    '        <i class="material-icons iconBack backToHomeEmployee" style="font-size: 50px">arrow_back</i>\n' +
                    '        <h3 class="center-align judulPage">Detail Produk</h3>\n' +
                    '        <img src="'+result.gambar+'" class="center-align" id="imgProduk"/>\n' +
                    '        <button class="btnBlue" id="btnPinjam">Pinjam produk ini</button>\n' +
                    '            <table id="infoProduk">\n' +
                    '                <tr>\n' +
                    '                    <td class="tdData" width="150">Kode</td>\n' +
                    '                    <td class="tdInfoData">'+ result.kode +'</td>\n' +
                    '                </tr>\n' +
                    '                <tr>\n' +
                    '                    <td class="tdData">Nama produk</td>\n' +
                    '                    <td class="tdInfoData">'+result.nama+'</td>\n' +
                    '                </tr>\n' +
                    '                <tr>\n' +
                    '                    <td class="tdData">Kuantitas</td>\n' +
                    '                    <td class="tdInfoData">7</td>\n' +
                    '                </tr>\n' +
                    '                <tr>\n' +
                    '                    <td class="tdData">Deskripsi</td>\n' +
                    '                    <td class="tdInfoData">\n' + result.deskripsi+ '</td>\n' +
                    '                </tr>\n' +
                    '            </table>\n' +
                    '        </div>\n' +
                    '</div>');

                document.title = result.nama;
            },
            error : function(e) {
                console.log("ERROR: ", e);
                window.alert("error");
            }
        });
    }

    function ajaxGetHome() {
        $.ajax({
            type: "GET",
            url: "/employee",
        })
    }
});