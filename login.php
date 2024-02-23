<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kết nối tới cơ sở dữ liệu MySQL
    $conn = new mysqli('localhost', 'root', '', 'sinhvien');

    // Kiểm tra kết nối
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    // Kiểm tra thông tin đăng nhập
    $sql = "SELECT * FROM login WHERE user = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Đăng nhập thành công, lưu thông tin đăng nhập vào session
        $_SESSION['username'] = $username;
        header('Location: index.html');
    } else {
        // Đăng nhập thất bại, hiển thị thông báo lỗi
        $error = "Tên người dùng hoặc mật khẩu không đúng";
    }
}
?>

<html>
<head>
    <title>Trang đăng nhập</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css">
</head>
<body>
    
    <section>
         <div class="img-bg">
             <img src="images/login-bg.jpg" alt="">
         </div>
         <div class="noi-dung">
             <div class="form">
                 <h2>ĐẠI HỌC THUỶ LỢI</h2>
                 <form action="" method="POST">
                     <div class="input-form">
                         <span>Tên đăng nhập</span>
                         <input type="text" name="username">
                     </div>
                     <div class="input-form">
                         <span>Mật khẩu</span>
                         <input type="password" name="password">
                     </div>
                     
                        <?php if (isset($error)) { ?>
                        <p><?php echo $error; ?></p>
                        <?php } ?>
                     
                     <div class="nho-dang-nhap">
                         <label><input type="checkbox" name=""> Nhớ Đăng Nhập</label>
                     </div>
                     <div class="input-form">
                         <input type="submit" value="Sinh viên">
                     </div>
                     <div class="input-form">
                         <input type="submit" value="Giảng viên">
                     </div>
                     <br>
                     <div class="sdt">
                       *Điện thoại - Zalo hỗ trợ:<br><br>
                       0367.282.676 - 0362.500.881
                     </div>
                 </form>
                 <h3>Liên hệ trang chủ</h3>
                 <ul class="icon-dang-nhap">
                   <li><a href="https://www.tlu.edu.vn">
                     <i class="fa fa-facebook" aria-hidden ="true" ></i>
                   </a></li>
                   <li><i class="fa fa-google" aria-hidden ="true" ></i></li>
                 </ul>
             </div>
         </div>
        
     </section>
</body>
</html>
