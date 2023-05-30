CREATE DATABASE  IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mydb`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `caracteristicas`
--

LOCK TABLES `caracteristicas` WRITE;
/*!40000 ALTER TABLE `caracteristicas` DISABLE KEYS */;
INSERT INTO `caracteristicas` VALUES (9,'Cocina','fas fa-sink'),(10,'Televisor','fas fa-tv'),(11,'Aire acondicionado','fas fa-snowflake'),(12,'Apto mascotas','fas fa-paw'),(13,'Estacionamiento gratuito','fas fa-car'),(14,'Pileta','fas fa-swimmer'),(15,'Wifi','fas fa-wifi');
/*!40000 ALTER TABLE `caracteristicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'807.105 casas','Casa','https://s3.amazonaws.com/pdb.grupo3/categorias/categoria-casa.jpg'),(2,'55.105 departamentos','Departamento','https://s3.amazonaws.com/pdb.grupo3/categorias/categoria-departamento.jpg'),(3,'227.103 casas de playa','Casa de playa','https://s3.amazonaws.com/pdb.grupo3/categorias/categoria-casa-playa.jpg'),(4,'7.105 cabañas','Cabaña','https://s3.amazonaws.com/pdb.grupo3/categorias/categoria-caba%C3%B1a.jpg');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ciudades`
--

LOCK TABLES `ciudades` WRITE;
/*!40000 ALTER TABLE `ciudades` DISABLE KEYS */;
INSERT INTO `ciudades` VALUES (5,'Carilo','Argentina'),(6,'Adrogué','Argentina'),(7,'C.A.B.A','Argentina'),(8,'San Isidro','Argentina'),(16,'Paros','Grecia'),(17,'Punta del Este','Uruguay'),(18,'Tigre ','Argentina'),(19,'Ranchos ','Argentina');
/*!40000 ALTER TABLE `ciudades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (92);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (21,'fotocasa con pileta 1','https://s3.amazonaws.com/pdb.grupo3/productos/casa1-A.jpg',20),(22,'fotocasa con pileta 2','https://s3.amazonaws.com/pdb.grupo3/productos/casa1-B.jpg',20),(23,'fotocasa con pileta 3','https://s3.amazonaws.com/pdb.grupo3/productos/casa1-C.jpg',20),(24,'fotocasa con pileta 4','https://s3.amazonaws.com/pdb.grupo3/productos/casa1-D.jpg',20),(25,'fotocasa con pileta 5','https://s3.amazonaws.com/pdb.grupo3/productos/casa1-E.jpg',20),(31,'fotocasaadrogue 1','https://s3.amazonaws.com/pdb.grupo3/productos/casa2-A.jpg',30),(32,'fotocasaadrogue 2','https://s3.amazonaws.com/pdb.grupo3/productos/casa2-B.jpg',30),(33,'fotocasaadrogue 3','https://s3.amazonaws.com/pdb.grupo3/productos/casa2-C.jpg',30),(34,'fotocasaadrogue 4','https://s3.amazonaws.com/pdb.grupo3/productos/casa2-D.jpg',30),(35,'fotocasaadrogue 5','https://s3.amazonaws.com/pdb.grupo3/productos/departamento1-F.jpg',30),(41,'fotodepartamento 1','https://s3.amazonaws.com/pdb.grupo3/productos/departamento1-A.jpg',40),(42,'fotodepartamento 2','https://s3.amazonaws.com/pdb.grupo3/productos/departamento1-B.jpg',40),(43,'fotodepartamento3','https://s3.amazonaws.com/pdb.grupo3/productos/departamento1-C.jpg',40),(44,'fotodepartamento 4','https://s3.amazonaws.com/pdb.grupo3/productos/departamento1-D.jpg',40),(45,'fotodepartamento 5','https://s3.amazonaws.com/pdb.grupo3/productos/departamento1-E.jpg',40),(46,'fotodepartamento 6','https://s3.amazonaws.com/pdb.grupo3/productos/departamento1-F.jpg',40),(52,'fotodepa 1','https://s3.amazonaws.com/pdb.grupo3/productos/departamento2-A.jpg',51),(53,'fotodepa 2','https://s3.amazonaws.com/pdb.grupo3/productos/departamento2-B.jpg',51),(54,'fotodepa 3','https://s3.amazonaws.com/pdb.grupo3/productos/departamento2-C.jpg',51),(55,'fotodepa 4','https://s3.amazonaws.com/pdb.grupo3/productos/departamento2-D.jpg',51),(56,'fotodepa 5','https://s3.amazonaws.com/pdb.grupo3/productos/departamento2-E.jpg',51),(61,'Fotopaloma 1','https://s3.amazonaws.com/pdb.grupo3/productos/casa-playa1-A.jpg',60),(62,'Fotopaloma 2','https://s3.amazonaws.com/pdb.grupo3/productos/casa-playa1-B.jpg',60),(63,'Fotopaloma 3','https://s3.amazonaws.com/pdb.grupo3/productos/casa-playa1-C.jpg',60),(64,'Fotopaloma 4','https://s3.amazonaws.com/pdb.grupo3/productos/casa-playa1-D.jpg',60),(65,'Fotopaloma 5','https://s3.amazonaws.com/pdb.grupo3/productos/casa-playa1-E.jpg',60),(69,'FotoParos 1','https://s3.amazonaws.com/pdb.grupo3/productos/casa-playa2-A.jpg',68),(70,'FotoParos 2','https://s3.amazonaws.com/pdb.grupo3/productos/casa-playa2-B.jpg',68),(71,'FotoParos 3','https://s3.amazonaws.com/pdb.grupo3/productos/casa-playa2-C.jpg',68),(72,'FotoParos 4','https://s3.amazonaws.com/pdb.grupo3/productos/casa-playa2-D.jpg',68),(73,'FotoParos 5','https://s3.amazonaws.com/pdb.grupo3/productos/caba%C3%B1a2-C.jpg',68),(77,'FotopaFotCarmela 1','https://s3.amazonaws.com/pdb.grupo3/productos/caba%C3%B1a1-A.jpg',76),(78,'FotopaFotCarmela 2','https://s3.amazonaws.com/pdb.grupo3/productos/caba%C3%B1a1-B.jpg',76),(79,'FotopaFotCarmela 3','https://s3.amazonaws.com/pdb.grupo3/productos/caba%C3%B1a1-C.jpg',76),(80,'FotopaFotCarmela 4','https://s3.amazonaws.com/pdb.grupo3/productos/caba%C3%B1a1-D.jpg',76),(81,'FotopaFotCarmela 5','https://s3.amazonaws.com/pdb.grupo3/productos/caba%C3%B1a1-E.jpg',76),(85,'FotoSoñada 1','https://s3.amazonaws.com/pdb.grupo3/productos/caba%C3%B1a2-A.jpg',84),(86,'FotoSoñada 2','https://s3.amazonaws.com/pdb.grupo3/productos/caba%C3%B1a2-B.jpg',84),(87,'FotoSoñada 3','https://s3.amazonaws.com/pdb.grupo3/productos/caba%C3%B1a2-C.jpg',84),(88,'FotoSoñada 4','https://s3.amazonaws.com/pdb.grupo3/productos/caba%C3%B1a2-D.jpg',84),(89,'FotoSoñada 5','https://s3.amazonaws.com/pdb.grupo3/productos/caba%C3%B1a2-E.jpg',84);
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `politicas`
--

LOCK TABLES `politicas` WRITE;
/*!40000 ALTER TABLE `politicas` DISABLE KEYS */;
INSERT INTO `politicas` VALUES (26,'Check-out: 10:00 am \n No fumar \n No cambiar de lugar muebles','Normas de la casa',20),(27,'Detector de humo \n Mesa con Cinturon de Seguridad incluido \n valvulas de presion en caldera','Seguridad',20),(28,'30 días antes para reintegro total\n 15 dias antes o menos reintegro 50%','Cancelacion',20),(29,'Ropa de Pileta (Malla o similar)\n Prohibido Nudismo \n Prohibido ahogarse','Reglas Pileta',20),(36,'Check-out: 10:00 am \n No fumar \n No cambiar de lugar muebles','Normas de la casa',30),(37,'Detector de humo \n Mesa con Cinturon de Seguridad incluido \n valvulas de presion en caldera','Seguridad',30),(38,'30 días antes para reintegro total\n 15 dias antes o menos reintegro 50%','Cancelacion',30),(39,'Ropa de Pileta (Malla o similar)\n Prohibido Nudismo \n Prohibido ahogarse','Reglas Pileta',30),(47,'Check-out: 10:00 am \n No fumar \n No cambiar de lugar muebles','Normas de la casa',40),(48,'Detector de humo \n Mesa con Cinturon de Seguridad incluido \n valvulas de presion en caldera','Seguridad',40),(49,'30 días antes para reintegro total\n 15 dias antes o menos reintegro 50%','Cancelacion',40),(50,'Ropa de Pileta (Malla o similar)\n Prohibido Nudismo \n Prohibido ahogarse','Reglas Pileta',40),(57,'Check-out: 10:00 am \n No fumar \n No cambiar de lugar muebles','Normas de la casa',51),(58,'Detector de humo \n Mesa con Cinturon de Seguridad incluido \n valvulas de presion en caldera','Seguridad',51),(59,'30 días antes para reintegro total\n 15 dias antes o menos reintegro 50%','Cancelacion',51),(66,'Check-out: 10:00 am \n No fumar \n No cambiar de lugar muebles','Normas de la casa',60),(67,'Detector de humo \n Mesa con Cinturon de Seguridad incluido \n valvulas de presion en caldera','Seguridad',60),(74,'Check-out: 10:00 am \n No fumar \n No cambiar de lugar muebles','Normas de la casa',68),(75,'Detector de humo \n Mesa con Cinturon de Seguridad incluido \n valvulas de presion en caldera','Seguridad',68),(82,'Check-out: 10:00 am \n No fumar \n No cambiar de lugar muebles','Normas de la casa',76),(83,'Detector de humo \n Mesa con Cinturon de Seguridad incluido \n valvulas de presion en caldera','Seguridad',76),(90,'Check-out: 10:00 am \n No fumar \n No cambiar de lugar muebles','Normas de la casa',84),(91,'Detector de humo \n Mesa con Cinturon de Seguridad incluido \n valvulas de presion en caldera','Seguridad',84);
/*!40000 ALTER TABLE `politicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `producto_caracteristicas`
--

LOCK TABLES `producto_caracteristicas` WRITE;
/*!40000 ALTER TABLE `producto_caracteristicas` DISABLE KEYS */;
INSERT INTO `producto_caracteristicas` VALUES (20,9),(20,10),(20,11),(20,12),(20,13),(20,14),(20,15),(30,9),(30,10),(30,11),(30,12),(30,13),(30,14),(30,15),(40,9),(40,10),(40,11),(40,12),(40,13),(40,14),(40,15),(51,9),(51,10),(51,11),(51,12),(51,13),(51,14),(51,15),(60,9),(60,10),(60,11),(60,12),(68,9),(68,10),(68,11),(68,12),(84,9),(84,11),(84,14);
/*!40000 ALTER TABLE `producto_caracteristicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (20,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','32º59′48″ S','60º40′44″ O  ','Increíble Casa c/ Piscina, WiFi, Bosque y Playa en Carilo',1,5),(30,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','32º59′48″ S','60º40′44″ O  ','Hermosa casa, a minutos de la estación',1,6),(40,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','31° 25′ 1″ S','64° 10′ 59″ O','Moderno depto en ubicación perfecta',2,7),(51,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','31° 25′ 1″ S','64° 10′ 59″ O','Nuevo Exclusivo Loft con Piscina, Parking y BBQ!',2,8),(60,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','31° 25′ 1″ S','64° 10′ 59″ O','La Paloma',3,16),(68,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','31° 25′ 1″ S','64° 10′ 59″ O','Villa Kantounes Studio Ostria',3,17),(76,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','3° 27′ 56″ N','76° 32′ 59″ O','La Carmelita',4,18),(84,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','3° 27′ 56″ N','76° 32′ 59″ O','La Soñada',4,19);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-10 18:51:51
