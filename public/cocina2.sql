-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2024 at 01:02 PM
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
-- Database: `cocina2`
--
CREATE DATABASE IF NOT EXISTS `bkckjwhaabcba8xyzfmp`;
USE `bkckjwhaabcba8xyzfmp`;
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
(10, 'Pimienta negra'),
(11, 'Zanahoria'),
(12, 'Cebolla morada'),
(13, 'Apio'),
(14, 'Pimiento rojo'),
(15, 'Pimiento verde'),
(16, 'Tomate cherry'),
(17, 'Espinacas'),
(18, 'Brócoli'),
(19, 'Coliflor'),
(20, 'Aceitunas'),
(21, 'Pepino'),
(22, 'Champiñones'),
(23, 'Calabaza'),
(24, 'Calabacín'),
(25, 'Maíz'),
(26, 'Patata'),
(27, 'Batata'),
(28, 'Aguacate'),
(29, 'Albahaca'),
(30, 'Cilantro');

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
(2, 2, 'Paella Valenciana', 'Plato tradicional español con arroz, mariscos y pollo', '2024-04-16 14:35:54', 'paella.jpg', 'Preparación de los ingredientes:\n\nLava y corta la judía verde en trozos de aproximadamente 3-4 cm.\nPela y ralla el tomate, o tritúralo si prefieres una textura más fina.\nSi utilizas garrofón seco, ponlo a remojo la noche anterior. Al día siguiente, hiérvelo hasta que esté tierno. Si es fresco o congelado, simplemente descongélalo si es necesario.\nCocinar la carne:\n\nCalienta una paella (sartén grande y plana) a fuego medio-alto y añade un generoso chorro de aceite de oliva.\nCuando el aceite esté caliente, añade los trozos de pollo y conejo. Sofríelos hasta que estén bien dorados por todos lados. Este proceso puede llevar alrededor de 10-15 minutos. Es importante que la carne quede bien dorada para que aporte un buen sabor al plato.\nAñadir las verduras:\n\nUna vez que la carne esté dorada, añade la judía verde y sofríe durante unos 5 minutos, removiendo de vez en cuando para que no se queme.\nAñade los dientes de ajo picados y el tomate rallado. Cocina esta mezcla durante unos 5-7 minutos, hasta que el tomate reduzca y pierda su acidez.\nIncorpora una cucharadita de pimentón dulce, removiendo rápidamente para evitar que se queme, ya que el pimentón puede adquirir un sabor amargo si se quema.\nIncorporar el arroz:\n\nAñade el arroz a la paella y sofríelo durante un par de minutos. Remueve bien para que el arroz se impregne de los sabores de la carne y las verduras. Este paso también ayuda a sellar el arroz, evitando que se abra demasiado durante la cocción.\nAñadir el caldo:\n\nVierte el caldo caliente (aproximadamente el doble que la cantidad de arroz, es decir, por cada taza de arroz, dos tazas de caldo) en la paella y lleva a ebullición.\nAñade las hebras de azafrán para darle color y sabor. Puedes disolver las hebras en un poco de caldo caliente antes de añadirlas para una distribución más uniforme.\nIncorpora el garrofón cocido y añade sal al gusto. Es importante probar el caldo en este momento para ajustar la salinidad.\nCocción del arroz:\n\nCocina a fuego fuerte durante los primeros 10 minutos. Este paso es crucial para que el arroz comience a cocinarse de manera uniforme.\nReduce a fuego medio-bajo y continúa cocinando otros 10-15 minutos, hasta que el arroz esté cocido y el caldo se haya absorbido casi por completo. No remuevas el arroz durante la cocción. Si es necesario, puedes mover la paella con cuidado para distribuir el caldo de manera uniforme.\nSi observas que el caldo se ha evaporado demasiado rápido y el arroz aún no está cocido, puedes añadir un poco más de caldo caliente o agua, siempre en pequeñas cantidades para no alterar la cocción del arroz.\nReposo:\n\nUna vez que el arroz esté cocido y el caldo absorbido, retira la paella del fuego y déjala reposar durante unos 5 minutos, cubierta con un paño limpio o papel de aluminio. Este reposo permite que el arroz termine de absorber el caldo y los sabores se asienten.'),
(3, 3, 'Spaghetti Carbonara', 'Pasta italiana con salsa de huevo, panceta, queso y pimienta negra', '2024-05-08 14:35:54', 'espagueti_carbonara.jpg', 'Preparación de los ingredientes:\n\nGuanciale o panceta: Corta 200 g de guanciale (preferible) o panceta en tiras pequeñas o cubos. El guanciale es tradicional en la carbonara auténtica debido a su sabor distintivo y textura. Si no puedes conseguir guanciale, la panceta es una buena alternativa.\nHuevos y queso: Separa las yemas de 4 huevos y colócalas en un bol grande. Añade 100 g de queso Pecorino Romano rallado al bol con las yemas. Puedes mezclar Pecorino con Parmigiano Reggiano si lo prefieres. Bate las yemas con el queso hasta obtener una mezcla homogénea y cremosa. Reserva.\nCocción de la pasta:\n\nLlena una olla grande con agua y añádele sal (aproximadamente una cucharada por cada litro de agua). Lleva el agua a ebullición.\nAñade 400 g de espaguetis al agua hirviendo y cocina según las instrucciones del paquete, generalmente entre 8 y 10 minutos, hasta que estén al dente. Remueve ocasionalmente para evitar que se peguen.\nUna vez cocidos, reserva una taza del agua de cocción de la pasta antes de escurrirla. Esta agua con almidón será útil más adelante para ajustar la consistencia de la salsa.\nCocinar el guanciale o la panceta:\n\nMientras los espaguetis se cocinan, calienta una sartén grande a fuego medio. No es necesario añadir aceite, ya que el guanciale o la panceta soltarán suficiente grasa.\nAñade el guanciale o la panceta a la sartén caliente y cocínalo hasta que esté crujiente y dorado, aproximadamente 5-7 minutos. Remueve ocasionalmente para asegurar una cocción uniforme. Si prefieres, puedes añadir 2 dientes de ajo enteros y pelados para dar un toque de sabor adicional. Retira los ajos antes de continuar con el siguiente paso.\nUna vez que el guanciale esté crujiente, retira la sartén del fuego y deja que se enfríe ligeramente.\nMezclar la pasta y la salsa:\n\nUna vez que los espaguetis estén cocidos, escúrrelos bien y colócalos directamente en la sartén con el guanciale o la panceta. Asegúrate de que la sartén esté fuera del fuego para evitar que los huevos se cocinen demasiado rápido.\nAñade un poco del agua de cocción de la pasta a la sartén y remueve bien para combinar. Esto ayudará a crear una base cremosa para la salsa.\nPreparar la salsa carbonara:\n\nMientras mezclas los espaguetis con el guanciale, añade lentamente la mezcla de yemas de huevo y queso, removiendo constantemente. Es crucial hacerlo fuera del fuego para evitar que los huevos se conviertan en una especie de revuelto. La salsa debe ser sedosa y cubrir la pasta de manera uniforme.\nSi la salsa parece demasiado espesa, añade más agua de cocción de la pasta poco a poco hasta alcanzar la consistencia deseada. La salsa debe ser cremosa y no líquida.\nCondimentar y servir:\n\nAñade una buena cantidad de pimienta negra recién molida a la pasta. La carbonara tradicional se caracteriza por el sabor robusto de la pimienta.\nPrueba y ajusta la sal si es necesario, aunque el queso Pecorino y el guanciale ya aportan bastante salinidad.'),
(4, 4, 'Sushi', 'Rollo de sushi tradicional japonés con arroz y pescado', '2024-02-01 15:35:54', 'sushi.jpg', 'Preparación del arroz:\n\nLava el arroz: Enjuaga 2 tazas de arroz de sushi varias veces hasta que el agua salga clara.\nCocina el arroz: Cocina el arroz en una arrocera con 2 ½ tazas de agua hasta que esté cocido.\nSazona el arroz: En un bol pequeño, mezcla ½ taza de vinagre de arroz, 2 cucharadas de azúcar y 1 cucharadita de sal. Calienta en el microondas hasta que el azúcar y la sal se disuelvan. Añade esta mezcla al arroz cocido y mezcla bien.\nPreparar los ingredientes:\n\nCorta los ingredientes: Corta pescado fresco (como salmón, atún) y vegetales (como pepino, aguacate) en tiras finas.\nEnrollar el sushi:\n\nColoca el alga nori: Coloca una hoja de alga nori sobre una esterilla de bambú para sushi.\nAñade el arroz: Extiende una capa delgada de arroz sobre el alga, dejando un borde libre en la parte superior.\nAñade los ingredientes: Coloca los ingredientes cortados sobre el arroz en una línea horizontal.\nEnrolla el sushi: Usa la esterilla de bambú para enrollar el sushi firmemente. Corta en piezas y sirve con salsa de soja, wasabi y jengibre encurtido.'),
(5, 4, 'Ceviche', 'Plato peruano de pescado marinado en jugo de limón con cilantro, cebolla y ají', '2024-06-11 14:35:54', 'ceviche.jpg', 'Preparar los ingredientes:\n\nCortar el pescado: Corta 500 g de pescado fresco (como corvina o mero) en cubos pequeños.\nMarinar el pescado:\n\nExprime el jugo: Exprime suficiente jugo de limón para cubrir el pescado (aproximadamente 1 taza).\nAñade el pescado: Coloca el pescado en un bol y añade el jugo de limón. Marinar durante unos 15-20 minutos hasta que el pescado se opaque.\nAñadir los vegetales:\n\nCortar y mezclar: Añade 1 cebolla roja cortada en rodajas finas, 1 ají limo cortado en rodajas, y 2 cucharadas de cilantro picado al bol con el pescado.\nSazonar y servir:\n\nAñade sal y pimienta al gusto. Sirve el ceviche frío, acompañado de maíz tostado, camote hervido y hojas de lechuga.'),
(6, 4, 'Enchiladas Verdes', 'Tortillas rellenas de pollo y cubiertas con salsa verde', '2024-06-11 14:35:54', 'enchiladas_verdes.jpg', 'Preparación de la salsa verde:\n\nCocinar los tomatillos: Cocina 500 g de tomatillos en agua hirviendo hasta que estén suaves.\nLicuar la salsa: Licúa los tomatillos con 1 diente de ajo, 1 chile jalapeño, ½ taza de cilantro y sal al gusto.\nPreparar las tortillas y el relleno:\n\nCalentar las tortillas: Calienta 12 tortillas de maíz en un comal hasta que estén suaves.\nRellenar las tortillas: Rellena cada tortilla con pollo desmenuzado (aproximadamente 2 tazas de pollo cocido).\nMontar las enchiladas:\n\nColocar en una bandeja: Coloca las tortillas rellenas en una bandeja para hornear.\nCubrir con salsa: Vierte la salsa verde sobre las tortillas rellenas.\nHornear y servir:\n\nHornear a 180°C durante 15-20 minutos. Sirve caliente, adornado con crema, queso fresco desmenuzado y cebolla picada.'),
(7, 3, 'Ratatouille', 'Plato francés de vegetales asados en rodajas, servido con salsa de tomate', '2024-06-11 14:35:54', 'ratatouille.jpg', 'Preparar la salsa de tomate:\n\nSofreír los vegetales: Sofríe 1 cebolla picada y 2 dientes de ajo picados en una sartén con aceite de oliva hasta que estén suaves.\nAñadir los tomates: Añade 800 g de tomates triturados y cocina a fuego lento durante 20 minutos. Sazona con sal, pimienta y albahaca fresca.\nPreparar los vegetales:\n\nCortar en rodajas: Corta 1 berenjena, 1 calabacín, 1 pimiento rojo y 1 pimiento amarillo en rodajas finas.\nMontar el ratatouille:\n\nColocar la salsa: Extiende la salsa de tomate en una fuente para horno.\nColocar las rodajas: Coloca las rodajas de vegetales en capas alternadas sobre la salsa de tomate.\nHornear y servir:\n\nHornear a 180°C durante 45 minutos. Sirve caliente, adornado con hojas de albahaca fresca.'),
(8, 1, 'Moussaka', 'Plato griego con capas de berenjena, carne picada y bechamel', '2024-06-11 14:35:54', 'moussaka.jpg', 'Preparar las berenjenas:\n\nCortar y saltear: Corta 2 berenjenas en rodajas y saltéalas en una sartén con aceite de oliva hasta que estén doradas. Reserva.\nPreparar la carne:\n\nSofreír la carne: Sofríe 500 g de carne picada (ternera o cordero) con 1 cebolla picada y 2 dientes de ajo picados hasta que estén cocidos.\nAñadir los tomates: Añade 400 g de tomates triturados, 1 cucharadita de canela, sal y pimienta. Cocina a fuego lento durante 20 minutos.\nPreparar la bechamel:\n\nDerretir la mantequilla: Derrite 50 g de mantequilla en una sartén, añade 50 g de harina y cocina durante 2 minutos.\nAñadir la leche: Añade 500 ml de leche poco a poco, removiendo constantemente hasta que la mezcla espese. Añade una pizca de nuez moscada y sal.\nMontar la moussaka:\n\nColocar las capas: En una fuente para horno, coloca una capa de berenjenas, una capa de carne y repite. Cubre con la bechamel.\nHornear y servir:\n\nHornear a 180°C durante 40 minutos. Deja reposar unos minutos antes de servir.'),
(9, 4, 'Panna Cotta', 'Postre italiano de nata cocida y gelatina, servido con frutas frescas', '2024-06-11 14:35:54', 'panna_cotta.jpg', 'Preparar la gelatina:\n\nHidratar la gelatina: Hidrata 1 sobre de gelatina en polvo (7 g) en 3 cucharadas de agua fría durante 5 minutos.\nPreparar la nata:\n\nCalentar la nata: En una cacerola, calienta 500 ml de nata para montar, 100 ml de leche y 100 g de azúcar a fuego medio hasta que empiece a hervir.\nAñadir la gelatina: Retira del fuego y añade la gelatina hidratada, removiendo hasta que se disuelva por completo.\nVerter en moldes:\n\nRepartir la mezcla: Vierte la mezcla en moldes individuales y refrigera durante al menos 4 horas, o hasta que esté firme.\nServir:\n\nDesmoldar: Desmolda la panna cotta pasando un cuchillo por el borde y sumergiendo brevemente el molde en agua caliente.\nAcompañar: Sirve con frutas frescas, coulis de frutas o caramelo.'),
(10, 2, 'Tiramisú', 'Postre italiano de capas de bizcocho empapado en café, mascarpone y cacao', '2024-06-11 14:35:54', 'tiramisu.jpg', 'Preparar el café:\n\nPreparar el café: Prepara una taza grande de café fuerte y déjalo enfriar. Añade 2 cucharadas de licor de café si lo deseas.\nPreparar la crema de mascarpone:\n\nBatir las yemas: Bate 4 yemas de huevo con 100 g de azúcar hasta que la mezcla esté pálida y cremosa.\nAñadir el mascarpone: Incorpora 500 g de mascarpone hasta obtener una mezcla homogénea.\nMontar las claras:\n\nBatir las claras: Bate 4 claras de huevo hasta obtener picos firmes e incorpóralas suavemente a la mezcla de mascarpone.\nMontar el tiramisú:\n\nSumergir los bizcochos: Sumerge 200 g de bizcochos de soletilla en el café frío y colócalos en una fuente.\nCapas de crema: Alterna capas de bizcochos empapados con capas de crema de mascarpone.\nRefrigerar y servir:\n\nRefrigerar: Refrigera el tiramisú durante al menos 4 horas, preferiblemente toda la noche.\nEspolvorear: Antes de servir, espolvorea con cacao en polvo y adorna con virutas de chocolate si lo deseas.');

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
(3, 10),
(4, 1),
(4, 3),
(4, 4),
(4, 5),
(4, 8),
(4, 11),
(4, 12),
(5, 2),
(5, 4),
(5, 9),
(5, 13),
(5, 14),
(6, 4),
(6, 5),
(6, 7),
(6, 10),
(6, 15),
(6, 16),
(7, 6),
(7, 8),
(7, 9),
(7, 11),
(8, 3),
(8, 5),
(8, 6),
(8, 10),
(8, 13),
(9, 2),
(9, 3),
(9, 4),
(9, 6),
(9, 8),
(9, 9),
(9, 10),
(9, 11),
(9, 14),
(10, 1),
(10, 3),
(10, 7),
(10, 9),
(10, 11),
(10, 13),
(10, 15);

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
(3, 'Pedro', 'pedro@example.com', 'contraseña3', '', NULL),
(4, 'carlos', 'carls@gmail.com', '88e7436afc4ca02741c771e9149a2e7c', '1234', NULL);

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
  ADD KEY `idIngrediente` (`idIngrediente`),
  ADD KEY `idReceta` (`idReceta`,`idIngrediente`) USING BTREE;

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
  MODIFY `idIngrediente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `recetas`
--
ALTER TABLE `recetas`
  MODIFY `idReceta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
