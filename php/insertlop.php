<?php     
		require_once("server.php");//copy code server.php vào file apiinsert -$conn
		//nhận thông tin từ client gửi lên
		$malop=$_GET['malop'];
		$tenlop=$_GET['tenlop'];
        $soluongsv=$_GET['soluongsv']; 
        $sql="INSERT INTO `lop`(`malop`, `tenlop`, `soluongsv`) VALUES ('$malop','$tenlop','$soluongsv')";
      
       
            if (mysqli_query($conn, $sql)) {  //thực thi câu truy vấn
				if(mysqli_affected_rows($conn)>0){ //đảm bảo dữ liệu có thay đổi
					
					$res["success"] = 1;// {"success":1} //trả về client đối tượng json 
				}
				else{
					$res["success"] = 0;//{"success":0}//trả về client đối tượng json 
				}
            } else {
                $res["success"] = 0;// {"success":0}//trả về client đối tượng json 
            }
        
        echo json_encode($res); 
        mysqli_close($conn);
?>