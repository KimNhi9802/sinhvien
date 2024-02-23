-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Apr 17, 2023 at 05:25 PM
-- Server version: 10.10.2-MariaDB
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sinhvien`
--

-- --------------------------------------------------------

--
-- Table structure for table `bomon`
--

DROP TABLE IF EXISTS `bomon`;
CREATE TABLE IF NOT EXISTS `bomon` (
  `mabm` varchar(100) NOT NULL,
  `tenbm` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`mabm`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `bomon`
--

INSERT INTO `bomon` (`mabm`, `tenbm`) VALUES
('cntt', 'Công nghệ thông tin'),
('kt', 'Kế toán'),
('qt', 'Quản trị kinh doanh');

-- --------------------------------------------------------

--
-- Table structure for table `chucvu`
--

DROP TABLE IF EXISTS `chucvu`;
CREATE TABLE IF NOT EXISTS `chucvu` (
  `machucvu` varchar(100) NOT NULL,
  `tenchucvu` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`machucvu`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `diem`
--

DROP TABLE IF EXISTS `diem`;
CREATE TABLE IF NOT EXISTS `diem` (
  `masv` varchar(100) NOT NULL,
  `mamonhoc` varchar(100) NOT NULL,
  `sodiem` int(11) DEFAULT NULL,
  PRIMARY KEY (`masv`,`mamonhoc`),
  KEY `fk_diem_reference_monhoc` (`mamonhoc`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `khoa`
--

DROP TABLE IF EXISTS `khoa`;
CREATE TABLE IF NOT EXISTS `khoa` (
  `makhoa` varchar(100) NOT NULL,
  `tenkhoa` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`makhoa`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `khoahoc`
--

DROP TABLE IF EXISTS `khoahoc`;
CREATE TABLE IF NOT EXISTS `khoahoc` (
  `makhoahoc` varchar(100) NOT NULL,
  `tenkhoahoc` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`makhoahoc`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `user` varchar(100) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`user`, `password`) VALUES
('sinhvien', '1234'),
('sv', '123');

-- --------------------------------------------------------

--
-- Table structure for table `lop`
--

DROP TABLE IF EXISTS `lop`;
CREATE TABLE IF NOT EXISTS `lop` (
  `malop` varchar(100) NOT NULL,
  `tenlop` varchar(100) DEFAULT NULL,
  `soluongsv` int(11) DEFAULT NULL,
  PRIMARY KEY (`malop`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `monhoc`
--

DROP TABLE IF EXISTS `monhoc`;
CREATE TABLE IF NOT EXISTS `monhoc` (
  `mamonhoc` varchar(100) NOT NULL,
  `tenmonhoc` varchar(100) DEFAULT NULL,
  `sotinchi` int(11) DEFAULT NULL,
  `hocky` int(11) DEFAULT NULL,
  PRIMARY KEY (`mamonhoc`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nganh`
--

DROP TABLE IF EXISTS `nganh`;
CREATE TABLE IF NOT EXISTS `nganh` (
  `manganh` varchar(100) NOT NULL,
  `tennganh` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`manganh`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sinhvien`
--

DROP TABLE IF EXISTS `sinhvien`;
CREATE TABLE IF NOT EXISTS `sinhvien` (
  `masv` varchar(100) NOT NULL,
  `tensinhvien` varchar(100) DEFAULT NULL,
  `ngaysinh` timestamp NULL DEFAULT NULL,
  `gioitinh` smallint(6) DEFAULT NULL,
  `sdt` varchar(100) DEFAULT NULL,
  `cmnd` varchar(100) DEFAULT NULL,
  `noisinh` varchar(100) DEFAULT NULL,
  `malop` varchar(100) DEFAULT NULL,
  `makhoahoc` varchar(100) DEFAULT NULL,
  `makhoa` varchar(100) DEFAULT NULL,
  `manganh` varchar(100) DEFAULT NULL,
  `NAMHOC` date DEFAULT NULL,
  PRIMARY KEY (`masv`),
  KEY `fk_sinhvien_reference_lop` (`malop`),
  KEY `fk_sinhvien_reference_khoahoc` (`makhoahoc`),
  KEY `fk_sinhvien_reference_khoa` (`makhoa`),
  KEY `fk_sinhvien_reference_nganh` (`manganh`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
