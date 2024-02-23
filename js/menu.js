
$(document).ready(function(){
        $(".menulop").click(function(){
            console.log("menu lop");
            swapForm("frmlop");
            var st=' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
                    ' <li class="breadcrumb-item active">Lớp</li>';
                    console.log(st);
            $(".breadcrumbcurrent").html(st);
            $(".hide").addClass("is-hidden");
            tableLop(0,record);
        })
        $(".gotoformlop").click(function () {
            console.log("menu lop");
            swapForm("frmlop");
            var st=' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
                    ' <li class="breadcrumb-item active">Lớp</li>';
            console.log(st);
            $(".breadcrumbcurrent").html(st);
            $(".hide").addClass("is-hidden");
            tableLop(0,record);
        })
       $(".menumonhoc").click(function () {
            console.log("menu mon hoc");
            swapForm("frmmonhoc");
            var st= '<li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
                    '<li class="breadcrumb-item active">Môn học</li>';
           $(".breadcrumbcurrent").html(st);
           $(".hide").addClass("is-hidden");
       })
       $(".gotoformmonhoc").click(function () {
        console.log("menu mon hoc");
        swapForm("frmmonhoc");
        var st= '<li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
                '<li class="breadcrumb-item active">Môn học</li>';
       $(".breadcrumbcurrent").html(st);
       $(".hide").addClass("is-hidden");
   })

       $(".menukhoahoc").click(function () {
            console.log("menu khoa hoc");
            swapForm("frmkhoahoc");
            var st= '<li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
                    '<li class="breadcrumb-item active">Khoá học</li>';
            $(".breadcrumbcurrent").html(st);
            $(".hide").addClass("is-hidden");
        })
        $(".gotoformkhoahoc").click(function () {
            console.log("menu khoa hoc");
            swapForm("frmkhoahoc");
            var st= '<li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
                    '<li class="breadcrumb-item active">Khoá học</li>';
            $(".breadcrumbcurrent").html(st);
            $(".hide").addClass("is-hidden");
        })
        $(".menufkhoa").click(function () {
            console.log("menu khoa ");
            swapForm("formkhoa");
            var st= '<li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
                    '<li class="breadcrumb-item active">Khoa</li>';
            $(".breadcrumbcurrent").html(st);
            $(".hide").addClass("is-hidden");
        })
        $(".gotofrmkhoa").click(function () {
            console.log("menu khoa ");
            swapForm("formkhoa");
            var st= '<li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
                    '<li class="breadcrumb-item active">Khoa</li>';
            $(".breadcrumbcurrent").html(st);
            $(".hide").addClass("is-hidden");
        })
        $(".menuchucvu").click(function () {
            console.log("menu khoa ");
            swapForm("formchucvu");
            var st= '<li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
                    '<li class="breadcrumb-item active">Chức vụ</li>';
            $(".breadcrumbcurrent").html(st);
            $(".hide").addClass("is-hidden");
        })

        $(".menudiem").click(function(){
            console.log("menu diem");
            swapForm("formdiem");
            var st=' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
                    ' <li class="breadcrumb-item active">Điểm sinh viên</li>';
                    console.log(st);
            $(".breadcrumbcurrent").html(st);
            $(".hide").addClass("is-hidden");
        })

        $(".gotoformdiem").click(function(){
            console.log("menu diem");
            swapForm("formdiem");
            var st=' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
                    ' <li class="breadcrumb-item active">Điểm sinh viên</li>';
                    console.log(st);
            $(".breadcrumbcurrent").html(st);
            $(".hide").addClass("is-hidden");
        })


        $(".gotoformchucvu").click(function () {
            console.log("menu khoa ");
            swapForm("formchucvu");
            var st= '<li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
                    '<li class="breadcrumb-item active">Chức vụ</li>';
            $(".breadcrumbcurrent").html(st);
            $(".hide").addClass("is-hidden");
        })
        $(".menunganh").click(function(){
            swapForm("frmnganh");
            var st=' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
            ' <li class="breadcrumb-item active">Ngành</li>';
            console.log(st);
            $(".breadcrumbcurrent").html(st);
            $(".hide").addClass("is-hidden");
        })
        $(".gotoformnganh").click(function(){
            swapForm("frmnganh");
            var st=' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
            ' <li class="breadcrumb-item active">Ngành</li>';
            console.log(st);
            $(".breadcrumbcurrent").html(st);
            $(".hide").addClass("is-hidden");            
        })
        $(".menusinhvien").click(function(){
            swapForm("frmsinhvien");
            var st=' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
            ' <li class="breadcrumb-item active">Sinh Viên</li>';
            console.log(st);
             $(".breadcrumbcurrent").html(st);
             $(".hide").addClass("is-hidden");
        })
        $(".gotoformsv").click(function(){
            swapForm("frmsinhvien");
            var st=' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
            ' <li class="breadcrumb-item active">Sinh Viên</li>';
            console.log(st);
             $(".breadcrumbcurrent").html(st);
             $(".hide").addClass("is-hidden");
        })
        $(".menubomon").click(function(){
            swapForm("frmbomon");
            var st=' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
            ' <li class="breadcrumb-item active">Bộ môn</li>';
            console.log(st);
             $(".breadcrumbcurrent").html(st);
             $(".btnthembm").prop("disabled",false);//sáng
             $(".btnsuabm").prop("disabled",true);//Mờ
             $(".btnluubm").prop("disabled",true);//mờ
            // showDataTableBoMon();
            showDataTableBoMonPage(0,record);
            $(".hide").addClass("is-hidden");
        });
        $(".gotoformbomon").click(function () {
            swapForm("frmbomon");
            var st=' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
            ' <li class="breadcrumb-item active">Bộ môn</li>';
            console.log(st);
             $(".breadcrumbcurrent").html(st);
             $(".btnthembm").prop("disabled",false);//sáng
             $(".btnsuabm").prop("disabled",true);//Mờ
             $(".btnluubm").prop("disabled",true);//mờ
            // showDataTableBoMon();
            showDataTableBoMonPage(0,record);
            $(".hide").addClass("is-hidden");
        })
        function swapForm(f){
			$(".frmbomon").addClass("is-hidden");
            $(".frmnganh").addClass("is-hidden");
            $(".frmlop").addClass("is-hidden"); 
            $(".frmsinhvien").addClass("is-hidden");
			$(".frmmonhoc").addClass("is-hidden");
			$(".frmkhoahoc").addClass("is-hidden");
			$(".formkhoa").addClass("is-hidden");
            $(".formchucvu").addClass("is-hidden");
            $(".formdiem").addClass("is-hidden");
            $("."+f).removeClass("is-hidden");
        }
        $(".btnhome").click(function(){
            swapForm("frmsinhvien");
            var st=' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
            ' <li class="breadcrumb-item active">Sinh Viên</li>';
            console.log(st);
             $(".breadcrumbcurrent").html(st);
        });
		
});