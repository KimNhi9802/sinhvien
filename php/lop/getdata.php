<?php     
		require_once("server.php");
    
        $mang=array();
        $record=$_GET['record']; //số dòng cần lấy
        $page=$_GET['page'];//số trang mà client gửi lên
	
		$vt=$page*$record; //tính toán lại vi trị cần lấy
        $limit='limit '.$vt.' , '.$record;
        $search=$_GET["search"];
        $sql=mysqli_query($conn,"select malop, tenlop, soluongsv from lop where (malop like '%".$search."%' or tenlop like '%".$search."%') order by malop asc ".$limit); 
		while($rows=mysqli_fetch_array($sql))
        {
         
            $usertemp['malop']=$rows['malop'];
			$usertemp['tenlop']=$rows['tenlop'];
            $usertemp['soluongsv']=$rows['soluongsv'];
           
            array_push($mang,$usertemp);
        }
        $rs=mysqli_query($conn,"select COUNT(*) as 'total' from lop where (malop like '%".$search."%' or  malop like '%".$search."%') order by malop asc ");
        $row=mysqli_fetch_array($rs);
        $jsonData['total'] =(int)$row['total'];
		$jsonData['totalpage'] =ceil($row['total']/$record);
	    $jsonData['page'] =(int)$page;
        $jsonData['items'] =$mang;
        echo json_encode($jsonData);
		mysqli_close($conn);
		
?>