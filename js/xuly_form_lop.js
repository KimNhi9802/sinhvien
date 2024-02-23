var arrLop = [];
var flagLop = 0;

$(document).ready(function(){
    $(".them_lop").click(function(){
        $(".them_lop").prop("disabled",true);
        $(".sua_lop").prop("disabled",true);
        $(".txtmalop").val("");
        $(".txttenlop").val("");
        $(".txtsoluongsv").val("");
        $(".txtmalop").focus();
        flagLop = 1;
    })

    $(".sua_lop").click(function(){
        $(".them_lop").prop("disabled",true);
        $(".sua_lop").prop("disabled",true);
        flagLop = 2;
    })

    $(".lamlai_lop").click(function(){
        $(".them_lop").prop("disabled",false);
        $(".sua_lop").prop("disabled",false);
        $(".txtmalop").val("");
        $(".txttenlop").val("");
        $(".txtsoluongsv").val("");
        flagLop = 0;
    })

    $(".luu_lop").click(function(){
        if (flagLop = 1){
            var datasend = {
                malop: $(".txtmalop").val(),
                tenlop: $(".txttenlop").val(),
                soluongsv: $(".txtsoluongsv").val()
            }
            console.log(datasend);
            queryData("php/lop/insert.php", datasend, function(res){
                console.log(res);
                if(res.success == 1) {
                    bootbox.alert("Thêm thành công!");
                    tableLop(pagecrr, record);
                }
                else {
                    bootbox.alert("Vui lòng xem lại mã!");
                }
            });
        }
        else if (flagLop == 2){
            var datasend = {
                malop: $(".txtmalop").val(),
                tenlop: $(".txttenlop").val(),
                soluongsv: $(".txtsoluongsv").val()
            }
            queryData("php/lop/update.php", datasend, function(res){
                if (res.success == 1) {
                    bootbox.alert("Cập nhật thành công!");
                    tableLop(pagecrr, record);
                }
                else {
                    bootbox.alert("Cập nhật thất bại!");
                }
            });
        }
    })

    $(".xoa_lop").click(function(){
        var ma = $(".txtmalop").val();
        bootbox.confirm("Bạn có đồng ý xoá lớp " + ma + " này?", function(result){
            console.log('This was logged in the callback: ' + result);
            if (result == true){
                var datasend = {
                    malop: ma
                }
                queryData("php/lop/delete.php", datasend, function(res){
                    console.log(res);
                    if(res.success == 1){
                        bootbox.alert("Xoá thành công!");
                        tableLop(pagecrr, record);
                    }
                    else {
                        bootbox.alert("Xoá không thành công!");
                    }
                });
            }
        });
    })

    $(".btntimlop").click(function(){
        tableLop(pagecrr, record);
    })

    $(".txttimlop").keyup(function (e) {
        if(e.which == 13){
            tableLop(pagecrr, record);
        }
    })

    var pagecrr = 0;
    $(".pagelop").on('click', 'button', function(){
        pagecrr = $(this).val();
        tableLop(pagecrr, record);
    })

    $(".addListLop").on('click', '.clickxemlop', function(){
        var vt = $(this).parent().attr("data-vt");
        $(".txtmalop").val(arrLop[vt].malop);
        $(".txttenlop").val(arrLop[vt].tenlop);
        $(".txtsoluongsv").val(arrLop[vt].soluongsv);
        $(".sua_lop").prop("disabled", false);
    });

    $(".addListLop").on('click', '.clickxoalop', function(){
        var vt = $(this).parent().attr("data-vt");
        var ma = arrLop[vt].malop;
        bootbox.confirm("Bạn có đồng ý xoá lớp " + ma + " này?", function(result){
            console.log('This was logged in the callback: ' + result);
            if (result == true){
                var datasend = {
                    malop: ma
                }
                queryData("php/lop/delete.php", datasend, function(res){
                    console.log(res);
                    if(res.success == 1){
                        bootbox.alert("Xoá thành công!");
                        tableLop(pagecrr, record);
                    }
                    else {
                        bootbox.alert("Xoá thất bại!");
                    }
                });
            }
        });
    });

});


function tableLop(page, record) {
    var search = $(".txttimlop").val();
    var datasend = {
        page: page,
        record: record,
        search: search
    }
    $(".addListLop").html('<tr><td colspan="4"><img src="images/loading.gif" width="20px" height="20px">Đang tải dữ liệu</td></tr>');

    queryData("php/lop/getdata.php", datasend, function (res){
        var data = res.items;
        if (data.length == 0) {
            $(".addListLop").html('<tr><td colspan="4"><span class="badge bg-danger">Không tìm thấy</span></td></tr>');
            $(".pagelop").html("");
        } else {
            arrLop = data;
            var s = '';
            var stt = 1;
            stt = printSTT(record, res.page);
            for(var i in data){
                var d = data[i];
                s = s + 
                    '<tr>'+
                    '<td>' + stt + '</td>' +
                    '<td>' + d.malop + '</td>' +
                    '<td>' + d.tenlop + '</td>' +
                    '<td>' + d.soluongsv + '</td>' +
                    '<td data-vt="' + i +'"><span class="badge bg-danger clickxemlop">'+
                    '<i class="fa fa-eye"></i>Xem</span>&nbsp;<span class="badge bg-danger clickxoalop"><i class="fa fa-trash" aria-hidden="true"></i>&nbsp;Xóa</span></td>' +
                    '</tr>';
                    stt++;
            }
            //console.log(s);
            $(".addListLop").html(s);
            buildSlidePage($(".pagelop"), 5, res.page, res.totalpage);
        }
    });



}