-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2018 at 06:44 AM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `curve-dental`
--

-- --------------------------------------------------------

--
-- Table structure for table `car-tasks`
--

CREATE TABLE `car-tasks` (
  `id` int(12) NOT NULL,
  `CarID` int(12) NOT NULL,
  `TaskID` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `car-tasks`
--

INSERT INTO `car-tasks` (`id`, `CarID`, `TaskID`) VALUES
(3, 7, 3),
(4, 7, 1),
(5, 8, 1),
(6, 8, 3);

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `Make` varchar(50) DEFAULT NULL,
  `Model` varchar(50) DEFAULT NULL,
  `Year` int(5) DEFAULT NULL,
  `Type` varchar(50) DEFAULT NULL,
  `Mileage` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `Make`, `Model`, `Year`, `Type`, `Mileage`) VALUES
(7, 'Honda', 'Civic SiR', 2002, 'Gas', 190020),
(10, 'Honda', 'Civic Si', 2010, 'Gas', 54000),
(11, 'BMW', '323i', 2011, 'Gas', 90000),
(12, 'Honda', 'Civic Hatchback', 2018, 'Gas', 20000),
(13, 'Telsa', 'Model 3', 2018, 'Electric', 200);

-- --------------------------------------------------------

--
-- Table structure for table `task-rules`
--

CREATE TABLE `task-rules` (
  `id` int(50) NOT NULL,
  `Name` varchar(500) DEFAULT NULL,
  `Type` varchar(500) DEFAULT NULL,
  `taskID` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task-rules`
--

INSERT INTO `task-rules` (`id`, `Name`, `Type`, `taskID`) VALUES
(1, 'Oil Change', 'Gas', 1),
(2, 'Oil Change', 'Diesel', 2),
(3, 'Tire Rotation', 'Gas', 2),
(4, 'Tire Rotation', 'Electric', 2),
(5, 'Tire Rotation', 'Diesel', 2),
(6, 'Tire Alignment', 'Gas', 3),
(7, 'Tire Alignment', 'Electric', 3),
(8, 'Tire Alignment', 'Diesel', 3);

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` varchar(50) NOT NULL,
  `Name` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `Name`) VALUES
('1', 'Oil Change'),
('2', 'Tire Rotation'),
('3', 'Tire Alignment');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `car-tasks`
--
ALTER TABLE `car-tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task-rules`
--
ALTER TABLE `task-rules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `car-tasks`
--
ALTER TABLE `car-tasks`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
