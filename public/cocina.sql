-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2024 at 06:25 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cocina`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `idComentario` int(11) NOT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `idReceta` int(11) DEFAULT NULL,
  `comentario` text DEFAULT NULL,
  `fechaComentario` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`idComentario`, `idUsuario`, `idReceta`, `comentario`, `fechaComentario`) VALUES
(1, 1, 1, '¡Estos tacos son increíbles! Los recomiendo totalmente.', '2024-04-16 14:35:55'),
(2, 2, 1, 'Me encanta esta receta, la hago todo el tiempo.', '2024-04-16 14:35:55'),
(3, 1, 2, 'La paella estaba deliciosa, gracias por compartir la receta.', '2024-04-16 14:35:55'),
(4, 3, 3, 'La carbonara es mi plato italiano favorito, ¡gracias por la receta!', '2024-04-16 14:35:55');

-- --------------------------------------------------------

--
-- Table structure for table `ingredientes`
--

CREATE TABLE `ingredientes` (
  `idIngrediente` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ingredientes`
--

INSERT INTO `ingredientes` (`idIngrediente`, `nombre`) VALUES
(1, 'Carne de cerdo'),
(2, 'Piña'),
(3, 'Arroz'),
(4, 'Mariscos'),
(5, 'Pollo'),
(6, 'Pasta'),
(7, 'Huevo'),
(8, 'Panceta'),
(9, 'Queso'),
(10, 'Pimienta negra');

-- --------------------------------------------------------

--
-- Table structure for table `recetas`
--

CREATE TABLE `recetas` (
  `idReceta` int(11) NOT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `fechaPublicacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `imagen` varchar(100) NOT NULL,
  `preparacion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recetas`
--

INSERT INTO `recetas` (`idReceta`, `idUsuario`, `titulo`, `descripcion`, `fechaPublicacion`, `imagen`, `preparacion`) VALUES
(1, 1, 'Tacos al pastor', 'Deliciosos tacos mexicanos con carne de cerdo marinada y piña', '2024-04-16 14:35:54', 'tacos.jpg', '1. Preparar la marinada:\r\nLimpiar y hervir los chiles: Quita las semillas y las venas de los chiles guajillos y anchos. Hiérvelos en agua caliente durante unos 5-10 minutos hasta que estén suaves.\r\nLicuar la marinada: En una licuadora, coloca los chiles hervidos, el chile chipotle (si lo usas), el vinagre de manzana, el jugo de piña, la cebolla, los ajos, el orégano, el comino, el clavo de olor, la sal, el achiote y el aceite vegetal. Licúa hasta obtener una mezcla homogénea.\r\n2. Marinar la carne:\r\nMarinar: Coloca los filetes de cerdo en un recipiente grande o en una bolsa resellable. Vierte la marinada sobre la carne asegurándote de que todos los filetes queden bien cubiertos. Marinar en el refrigerador por al menos 4 horas, preferiblemente toda la noche.\r\n3. Cocinar la carne:\r\nAsar la carne: Tradicionalmente, la carne se cocina en un trompo (una especie de asador vertical), pero en casa puedes asarla en una parrilla o sartén a fuego medio-alto. Cocina los filetes por ambos lados hasta que estén bien cocidos y ligeramente caramelizados.\r\n4. Preparar los tacos:\r\nCalentar las tortillas: Calienta las tortillas de maíz en un comal o sartén.\r\nPicar la carne: Corta la carne en trozos pequeños.\r\nMontar los tacos: Coloca la carne sobre las tortillas calientes. Añade trozos de piña, cebolla picada y cilantro.\r\nServir: Acompaña los tacos con limones y salsa al gusto.'),
(2, 2, 'Paella Valenciana', 'Plato tradicional español con arroz, mariscos y pollo', '2024-04-16 14:35:54', 'paella.jpg', '0'),
(3, 3, 'Spaghetti Carbonara', 'Pasta italiana con salsa de huevo, panceta, queso y pimienta negra', '2024-04-16 14:35:54', 'espagueti_carbonara.jpg', '0');

-- --------------------------------------------------------

--
-- Table structure for table `recetas_ingredientes`
--

CREATE TABLE `recetas_ingredientes` (
  `idReceta` int(11) NOT NULL,
  `idIngrediente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recetas_ingredientes`
--

INSERT INTO `recetas_ingredientes` (`idReceta`, `idIngrediente`) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(2, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 10);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `imagen` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nombre`, `email`, `password`, `telefono`, `imagen`) VALUES
(1, 'Juan', 'juan@example.com', 'contraseña1', '', NULL),
(2, 'María', 'maria@example.com', 'contraseña2', '', NULL),
(3, 'Pedro', 'pedro@example.com', 'contraseña3', '', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`idComentario`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idReceta` (`idReceta`);

--
-- Indexes for table `ingredientes`
--
ALTER TABLE `ingredientes`
  ADD PRIMARY KEY (`idIngrediente`);

--
-- Indexes for table `recetas`
--
ALTER TABLE `recetas`
  ADD PRIMARY KEY (`idReceta`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indexes for table `recetas_ingredientes`
--
ALTER TABLE `recetas_ingredientes`
  ADD PRIMARY KEY (`idReceta`,`idIngrediente`),
  ADD KEY `idIngrediente` (`idIngrediente`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `idComentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ingredientes`
--
ALTER TABLE `ingredientes`
  MODIFY `idIngrediente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `recetas`
--
ALTER TABLE `recetas`
  MODIFY `idReceta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`idReceta`) REFERENCES `recetas` (`idReceta`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `recetas`
--
ALTER TABLE `recetas`
  ADD CONSTRAINT `recetas_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `recetas_ingredientes`
--
ALTER TABLE `recetas_ingredientes`
  ADD CONSTRAINT `recetas_ingredientes_ibfk_1` FOREIGN KEY (`idReceta`) REFERENCES `recetas` (`idReceta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recetas_ingredientes_ibfk_2` FOREIGN KEY (`idIngrediente`) REFERENCES `ingredientes` (`idIngrediente`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
