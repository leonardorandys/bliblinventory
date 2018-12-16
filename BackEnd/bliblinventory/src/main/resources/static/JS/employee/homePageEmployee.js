$( document ).ready(function() {
    $( document ).on("click",".detailProduk",function (event) {
        event.preventDefault();
        window.alert("pencet Detail");
        ajaxGetDetailProduk(this.id);
    });

    $( document ).on("click","#btnPinjam",function () {
        window.alert("aa");
    });

    $( document ).on("change","#slctSorting",function (){
        var url;
        var indexSelected = $("#slctSorting").prop('selectedIndex');
        if(indexSelected==0){
            url = window.location+"/sortByName";
        }
        else if(indexSelected==1){
            url = window.location+"/sortByCode";
        }
        ajaxGetDaftarProduk(url, indexSelected);
        window.alert("");
        $("select#slctSorting").prop('selectedIndex', indexSelected);
    });

    function ajaxGetDaftarProduk(url, indexSelected){
        $.ajax({
            type : "GET",
            url : url,
            success: function(result){
                var hasil = "";
                for(var i = 0; i < result.length; i++) {
                    hasil = hasil + '<div class="col s6 m3 l2">\n' +
                        '                <div class="card">\n' +
                        '                    <div class="card-image">\n' +
                        '                        <img class="testImg" src="'+result[i].gambar+'">\n' +
                        '                    </div>\n' +
                        '                    <div class="card-content">\n' +
                        '                        <p class="kodeProduk">'+result[i].kode+'</p>\n' +
                        '                        <p class="namaProduk">'+result[i].nama+'</p>\n' +
                        '                    </div>\n' +
                        '                    <div class="card-action">\n' +
                        '                        <a class="detailProduk" id="'+result[i].kode+'" href="">Detail</a>\n' +
                        '                    </div>\n' +
                        '                </div>\n' +
                        '            </div>';
                }


                $("article").html('<div id="forSearching"> \n' +
                    '            <div class="row" id="sortingElement">\n' +
                    '                <div class="input-field col s2" style="margin: 0px">\n' +
                    '                    <i class="material-icons prefix" id="iconSorting">sort</i>\n' +
                    '                    <label for="icon_prefix" id="lblSorting">Urutkan berdasar</label>\n' +
                    '                    <div class="styledSelect">\n' +
                    '                        <select id="slctSorting">\n' +
                    '                            <option value="nama">nama</option>\n' +
                    '                            <option value="kodeProduk" selected>kode produk</option>\n' +
                    '                        </select>\n' +
                    '                    </div>\n' +
                    '                </div>\n' +
                    '            </div> \n' +
                    '            <div class="row" id="categoriesElement">\n' +
                    '                <div class="input-field col s2" style="margin: 0px">\n' +
                    '                    <i class="material-icons prefix" id="iconCategories">dashboard</i>\n' +
                    '                    <label for="icon_prefix" id="lblCategories">Kategori</label>\n' +
                    '                    <div class="styledSelect">\n' +
                    '                        <select id="slctCategories">\n' +
                    '                            <option value="semua">semua</option>\n' +
                    '                            <option value="elektronik">elektronik</option>\n' +
                    '                        </select>\n' +
                    '                    </div>\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '\n' +
                    '        <div class="row" id="daftarProduk">' + hasil + '</div>');

            },
            error : function(e) {
                console.log("ERROR: ", e);
                window.alert("error");
            }
        });
    }

    function ajaxGetDetailProduk(kodeProduk){
        $.ajax({
            type : "GET",
            url : window.location+"/"+kodeProduk,
            success: function(result){
                //$("#artik").load('detailProdukEmployee.html');
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