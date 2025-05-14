CREATE DATABASE  IF NOT EXISTS `welcome@hsb` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `welcome@hsb`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: welcome@hsb
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `gebaeude`
--

DROP TABLE IF EXISTS `gebaeude`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gebaeude` (
  `idGebaeude` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Adresse` varchar(255) NOT NULL,
  PRIMARY KEY (`idGebaeude`),
  UNIQUE KEY `Gebaeude_ID_UNIQUE` (`idGebaeude`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gebaeude`
--

LOCK TABLES `gebaeude` WRITE;
/*!40000 ALTER TABLE `gebaeude` DISABLE KEYS */;
INSERT INTO `gebaeude` VALUES (1,'Campus Airportstadt, Flughafenallee (ZIMT)','ZIMT, Flughafenallee 10, 28199 Bremen'),(2,'Campus Airportstadt, Flughafendamm (AIR/PORT/LAB)','AIR/PORT/LAB - Center for Aerospace and Maritime Systems,Flughafendamm 40,28199 Bremen'),(3,'Campus Airportstadt, Hermann-Köhl-Straße','Hermann-Köhl-Straße 1,28199 Bremen'),(4,'Campus Am Brill (Skills- und Simulationszentrum)','Skills- und Simulationszentrum,Am Brill 2-4,28195 Bremen'),(5,'Campus Neustadt, Große Johannisstraße (POST)','POST, Große Johannisstraße 146 - 148,Bremen 28199'),(6,'Campus Neustadt, Langemarckstraße (L-Gebäude)','L-Gebäude, Langemarckstraße 113,28199 Bremen'),(7,'Campus Neustadt, Neustadtswall (AB-Gebäude)','AB-Gebäude, Neustadtswall 30,28199 Bremen'),(8,'Campus Neustadt, Neustadtswall (E-Gebäude)','E-Gebäude,Neustadtswall 30,28199 Bremen'),(9,'Campus Neustadt, Neustadtswall (M-Gebäude)','M-Gebäude,Neustadtswall 30,28199 Bremen'),(10,'Campus Neustadt, Neustadtswall (SI-Gebäude)','SI-Gebäude,Neustadtswall 30,28199 Bremen'),(11,'Campus Neustadt, Neustadtswall (Trafohaus)','Trafohaus,Neustadtswall 30,28199 Bremen'),(12,'Campus Neustadt, Neustadtswall (UB-Gebäude)','UB-Gebäude,Neustadtswall 27b,28199 Bremen'),(13,'Campus Neustadt, Neustadtswall (WKL-Halle)','WKL-Halle,Neustadtswall 30,28199 Bremen'),(14,'Campus Neustadt, Westerstraße','Westerstraße 10–14,28199 Bremen'),(15,'Campus Werderstraße, Werderstraße (A-Gebäude)','A-Gebäude,Werderstraße 73,28199 Bremen'),(16,'Campus Werderstraße, Werderstraße (B-Gebäude)','B-Gebäude,Werderstraße 73,28199 Bremen'),(17,'Campus Werderstraße, Werderstraße (C-Gebäude)','C-Gebäude,Werderstraße 73,28199 Bremen'),(18,'Campus Werderstraße, Werderstraße (D-Gebäude/Mensa)','D-Gebäude,Werderstraße 73,28199 Bremen'),(19,'Campus Werderstraße, Werderstraße (EW-Gebäude)','EW-Gebäude,Werderstraße 73,28199 Bremen');
/*!40000 ALTER TABLE `gebaeude` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hochschulangehoerige`
--

DROP TABLE IF EXISTS `hochschulangehoerige`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hochschulangehoerige` (
  `idHochschulangehoerige` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `EMail` varchar(255) DEFAULT NULL,
  `Organisationsbereich_idOrganisationsbereich` int NOT NULL,
  PRIMARY KEY (`idHochschulangehoerige`),
  UNIQUE KEY `Hochschulangehoerige_ID_UNIQUE` (`idHochschulangehoerige`),
  KEY `fk_Hochschulangehoerige_Organisationsbereich_idx` (`Organisationsbereich_idOrganisationsbereich`),
  CONSTRAINT `fk_Hochschulangehoerige_Organisationsbereich` FOREIGN KEY (`Organisationsbereich_idOrganisationsbereich`) REFERENCES `organisationsbereich` (`idOrganisationsbereich`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hochschulangehoerige`
--

LOCK TABLES `hochschulangehoerige` WRITE;
/*!40000 ALTER TABLE `hochschulangehoerige` DISABLE KEYS */;
INSERT INTO `hochschulangehoerige` VALUES (1,'Michelle Jakobi','Michelle.Jakobi@hs-bremen.de',8),(2,'Prof. Dr.-Ing. Jasminka Matevska','Jasminka.Matevska@hs-bremen.de',8),(3,'Andreas Lochwitz','Andreas.Lochwitz@hs-bremen.de',8),(4,'Anja Dammasch','Anja.Dammasch@hs-bremen.de',8),(5,'Julia Albers','Julia.Albers@hs-bremen.de',8),(6,'Prof. Dr. rer. nat. Gerlinde Schreiber','Gerlinde.Schreiber@hs-bremen.de',8),(7,'Yana Yerofeyeva','Yana.Yerofeyeva@hs-bremen.de',8),(8,'Prof. Dr. rer. nat. Richard Sethmann','Richard.Sethmann@hs-bremen.de',8),(9,'Prof. Dr. Thorsten Teschke','Thorsten.Teschke@hs-bremen.de',8),(10,'M. Sc. Jendrik Bulk','Jendrik.Bulk@hs-bremen.de',8),(11,'Prof. Dr. Volker Paelke','Volker.Paelke@hs-bremen.de',8),(12,'Prof. Dr. Lars Pradel','Lars.Pradel@hs-bremen.de',8),(13,'Dipl. Oec. Maike Wilken','Maike.Wilken@hs-bremen.de',8),(14,'Torben Woltjen','Torben.Woltjen@hs-bremen.de',8),(15,'Andreas Teufel','Andreas.Teufel@hs-bremen.de',8),(16,'Prof. Dr. Martin Hering-Bertram','Martin.Hering-Bertram@hs-bremen.de',8),(17,'Dr. Benjamin Tannert','Benjamin.Tannert@hs-bremen.de',8),(18,'Dr. Peter Krug','Peter.Krug@hs-bremen.de',8),(19,'Andreas Bentler','Andreas.Bentler@hs-bremen.de',8),(20,'Prof. Dr. jur. Dennis-Kenji Kipker','Dennis-Kenji.Kipker@hs-bremen.de',8);
/*!40000 ALTER TABLE `hochschulangehoerige` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organisationsbereich`
--

DROP TABLE IF EXISTS `organisationsbereich`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organisationsbereich` (
  `idOrganisationsbereich` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Beschreibung` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idOrganisationsbereich`),
  UNIQUE KEY `idOrganisationsbereich_ID_UNIQUE` (`idOrganisationsbereich`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organisationsbereich`
--

LOCK TABLES `organisationsbereich` WRITE;
/*!40000 ALTER TABLE `organisationsbereich` DISABLE KEYS */;
INSERT INTO `organisationsbereich` VALUES (1,'Dezernat 1 – Personalangelegenheiten',NULL),(2,'Dezernat 2 – Haushalt und Finanzen',NULL),(3,'Dezernat 3 – Immatrikulations- und Prüfungsamt',NULL),(4,'Dezernat 4 – Gebäudemanagement',NULL),(5,'Fakultät Architektur, Bau und Umwelt',NULL),(6,'Fakultät Architektur, Bau und Umwelt - Abteilung Bau und Umwelt',NULL),(7,'Fakultät Architektur, Bau und Umwelt - School of Architecture',NULL),(8,'Fakultät Elektrotechnik und Informatik',NULL),(9,'Fakultät Gesellschaftswissenschaften',NULL),(10,'Fakultät Natur und Technik',NULL),(11,'Fakultät Natur und Technik - Abteilung Maschinenbau',NULL),(12,'Fakultät Natur und Technik - Abteilung Schiffbau und Meerestechnik, Nautik und Seeverkehr, Biologie, Bionik',NULL),(13,'Fakultät Wirtschaftswissenschaften',NULL),(14,'Gleichstellungsstelle',NULL),(15,'Hochschulor IntoNation',NULL),(16,'Integrierter Gesundheitscampus Bremen',NULL),(17,'International Graduate Center (IGC)',NULL),(18,'Personalrat',NULL),(19,'Rechenzentrum',NULL),(20,'Referat 01 – Öffentlichkeitsarbeit, Rektoratsangelegenheiten',NULL),(21,'Referat 02 – Rechtsstelle',NULL),(22,'Referat 04 – Arbeits- und Umweltschutz',NULL),(23,'Referat 06 – Zentrale Studienberatung (ZSB)',NULL),(24,'Referat 07 – Forschung und Transfer',NULL),(25,'Referat Kommunikation und Marketing',NULL),(26,'Referat Studienerfolg und Internationalisierung',NULL),(27,'Referat Studienerfolg und Internationalisierung - Akademisches Monitoring',NULL),(28,'Referat Studienerfolg und Internationalisierung - Career Service',NULL),(29,'Referat Studienerfolg und Internationalisierung - International Office',NULL),(30,'Referat Studienerfolg und Internationalisierung - Zentrales Qualitätsmanagement (ZQM)',NULL),(31,'Rektorat',NULL),(32,'Schwerbehindertenvertretung',NULL),(33,'Sprachenzentrum',NULL),(34,'Staats- und Universitätsbibliothek Bremen',NULL),(35,'Theaterwerkstatt',NULL),(36,'Zentrum für Lehren und Lernen (ZLL)',NULL);
/*!40000 ALTER TABLE `organisationsbereich` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `raum`
--

DROP TABLE IF EXISTS `raum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `raum` (
  `idRaum` int NOT NULL AUTO_INCREMENT,
  `Bezeichnung` varchar(255) NOT NULL,
  `Etage` int NOT NULL,
  `Typ` varchar(255) NOT NULL,
  `Gebaeude_idGebaeude` int NOT NULL,
  PRIMARY KEY (`idRaum`),
  UNIQUE KEY `Raum_ID_UNIQUE` (`idRaum`),
  KEY `fk_Raum_Gebaeude1_idx` (`Gebaeude_idGebaeude`),
  CONSTRAINT `fk_Raum_Gebaeude1` FOREIGN KEY (`Gebaeude_idGebaeude`) REFERENCES `gebaeude` (`idGebaeude`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `raum`
--

LOCK TABLES `raum` WRITE;
/*!40000 ALTER TABLE `raum` DISABLE KEYS */;
INSERT INTO `raum` VALUES (1,'012',0,'Hörsaal',1),(2,'013',0,'Mensa',1),(3,'031',0,'Buecherei',1),(4,'032A',0,'Vorlesungsraum',1),(5,'032B',0,'Vorlesungsraum',1),(6,'032C',0,'Vorlesungsraum',1),(7,'104',1,'Buero',1),(8,'106b',1,'Buero',1),(9,'102',1,'Buero',1),(10,'116',1,'Vorlesungsraum',1),(11,'117',1,'Vorlesungsraum',1),(12,'122',1,'Vorlesungsraum',1),(13,'123',1,'Vorlesungsraum',1),(14,'124',1,'Vorlesungsraum',1),(15,'202',2,'Buero',1),(16,'205',2,'Buero',1),(17,'208',2,'Buero',1),(18,'209',2,'Buero',1),(19,'212',2,'Buero',1),(20,'213',2,'Buero',1),(21,'218',2,'Buero',1),(22,'219',2,'Buero',1),(23,'220',2,'Labor',1),(24,'221',2,'Labor',1),(25,'222',2,'Labor',1),(26,'223',2,'Labor',1),(27,'231',2,'Labor',1),(28,'232',2,'Labor',1),(29,'233',2,'Labor',1),(30,'234',2,'Labor',1),(31,'241',2,'Buero',1),(32,'327',3,'Allzweckraum',1),(33,'326',3,'Allzweckraum',1),(34,'316',3,'Allzweckraum',1),(35,'301',3,'Allzweckraum',1),(36,'312a',3,'Buero',1);
/*!40000 ALTER TABLE `raum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `raumnutzung`
--

DROP TABLE IF EXISTS `raumnutzung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `raumnutzung` (
  `Hochschulangehoerige_ID` int NOT NULL,
  `Raum_ID` int NOT NULL,
  KEY `fk_Raumnutzung_Hochschulangehoerige1_idx` (`Hochschulangehoerige_ID`),
  KEY `fk_Raumnutzung_Raum1_idx` (`Raum_ID`),
  CONSTRAINT `fk_Raumnutzung_Hochschulangehoerige1` FOREIGN KEY (`Hochschulangehoerige_ID`) REFERENCES `hochschulangehoerige` (`idHochschulangehoerige`),
  CONSTRAINT `fk_Raumnutzung_Raum1` FOREIGN KEY (`Raum_ID`) REFERENCES `raum` (`idRaum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `raumnutzung`
--

LOCK TABLES `raumnutzung` WRITE;
/*!40000 ALTER TABLE `raumnutzung` DISABLE KEYS */;
INSERT INTO `raumnutzung` VALUES (1,36),(2,15),(3,18),(4,9),(5,34),(6,17),(7,8),(8,19),(9,16),(10,18),(11,22),(12,31),(13,7),(14,36),(15,20),(16,21),(17,21),(18,17),(19,34),(20,20);
/*!40000 ALTER TABLE `raumnutzung` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `veranstaltung`
--

DROP TABLE IF EXISTS `veranstaltung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `veranstaltung` (
  `idVeranstaltung` int NOT NULL AUTO_INCREMENT,
  `Titel` varchar(255) NOT NULL,
  `Beschreibung` text,
  `Datum` date NOT NULL,
  `Startzeit` time NOT NULL,
  `Endezeit` time DEFAULT NULL,
  `Raum_idRaum` int NOT NULL,
  `Topic` varchar(255) DEFAULT NULL,
  `URL` varchar(500) DEFAULT NULL,
  `Ort` text NOT NULL,
  PRIMARY KEY (`idVeranstaltung`),
  UNIQUE KEY `Veranstaltung_ID_UNIQUE` (`idVeranstaltung`),
  KEY `fk_Veranstaltung_Raum1_idx` (`Raum_idRaum`),
  CONSTRAINT `fk_Veranstaltung_Raum1` FOREIGN KEY (`Raum_idRaum`) REFERENCES `raum` (`idRaum`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veranstaltung`
--

LOCK TABLES `veranstaltung` WRITE;
/*!40000 ALTER TABLE `veranstaltung` DISABLE KEYS */;
INSERT INTO `veranstaltung` VALUES (1,'World Robot Olympiad',NULL,'2025-05-09','09:30:00',NULL,4,'Wettbewerb','/die-hsb/aktuelles/veranstaltung/world-robot-olympiad/#2025-05-09T09:30:00+02:00','Campus Airportstadt, Flughafenallee (ZIMT) ZIMT - Erdgeschoss'),(2,'Emotionale Intelligenz',NULL,'2025-05-09','13:30:00','18:00:00',5,'Seminar','/die-hsb/aktuelles/veranstaltung/emotionale-intelligenz/#2025-05-09T13:30:00+02:00','StudiumPlus (ZLL) Langemarckstraße 113, 28199 Bremen'),(3,'Forschung & Datenmanagement',NULL,'2025-05-10','10:00:00','14:15:00',11,'Methodenausbildung','/die-hsb/aktuelles/veranstaltung/forschung-datenmanagement-datenmanagement-leicht-gemacht-praxisnahe-skills-fuer-ihre-wissenschaftlichen-und-beruflichen-projekte/#2025-05-10T10:00:00+02:00','Campus Werderstraße, Werderstraße 73, 28199 Bremen'),(4,'Pflege studieren – na klar!',NULL,'2025-05-11','17:00:00','18:00:00',14,'Info','/die-hsb/aktuelles/veranstaltung/pflege-studieren-na-klar/#2025-05-11T17:00:00+02:00','Online'),(5,'Erasmus+ - lass dich fördern!',NULL,'2025-05-12','13:00:00','14:00:00',1,'Info','/die-hsb/aktuelles/veranstaltung/erasmus-info-veranstaltung-und-sprechstunde-1/#2025-05-12T13:00:00+02:00','Online'),(6,'Kritisch Denken in der digitalen Welt',NULL,'2025-05-12','15:00:00','18:00:00',11,'Seminar','/die-hsb/aktuelles/veranstaltung/kritisch-denken-in-der-digitalen-welt-wege-zur-unterscheidung-von-fakten-und-fiktion-1/#2025-05-12T15:00:00+02:00','Online'),(7,'Spekulatives Design im urbanen Raum',NULL,'2025-05-12','16:00:00','18:00:00',13,'Symposium','/die-hsb/aktuelles/veranstaltung/spekulatives-design-im-urbanen-raum/#2025-05-12T16:00:00+02:00','Online'),(8,'Angewandte Therapiewissenschaften Logopädie / Physiotherapie studieren',NULL,'2025-05-13','09:00:00',NULL,5,'Info','/die-hsb/aktuelles/veranstaltung/angewandte-therapiewissenschaften-logopaedie-physiotherapie-studieren/#2025-05-13T09:00:00+02:00','Online'),(9,'HSB Klimaschutzkonzept: Maßnahmenaktualisierung',NULL,'2025-05-13','13:30:00','16:30:00',12,'Workshop','/die-hsb/aktuelles/veranstaltung/hsb-klimaschutzkonzept-massnahmenaktualisierung/#2025-05-13T13:30:00+02:00','Campus Neustadt, Langemarckstraße (L-Gebäude), Langemarckstraße 113, 28199 Bremen, Foyer'),(10,'Studieren an der HSB - Infotermin',NULL,'2025-05-13','16:30:00','17:30:00',6,'Info','/die-hsb/aktuelles/veranstaltung/allgemeine-infos-und-beratung-rund-ums-studium/#2025-05-13T16:30:00+02:00','Online'),(11,'Bionik und Mikroskopie',NULL,'2025-05-13','17:00:00',NULL,1,'Vortrag','/die-hsb/aktuelles/veranstaltung/bionik-und-mikroskopie-wie-moderne-methoden-helfen-die-geheimnisse-der-natur-zu-entschluesseln/#2025-05-13T17:00:00+02:00','Online'),(12,'Probleme lösen, Entscheidungen treffen',NULL,'2025-05-14','09:00:00','13:30:00',1,'Workshop','/die-hsb/aktuelles/veranstaltung/probleme-loesen-entscheidungen-treffen/#2025-05-14T09:00:00+02:00','StudiumPlus (ZLL) Langemarckstraße 113, 28199 Bremen'),(13,'Systematisch zum Ziel - Probleme clever lösen!',NULL,'2025-05-14','09:00:00','13:30:00',10,'Workshop','/die-hsb/aktuelles/veranstaltung/systematisch-zum-ziel-probleme-clever-loesen/#2025-05-14T09:00:00+02:00','StudiumPlus (ZLL) Langemarckstraße 113, 28199 Bremen'),(14,'Advancing Consumer Rights through SDG 16',NULL,'2025-05-14','13:00:00','14:00:00',6,'Info','/die-hsb/aktuelles/veranstaltung/advancing-consumer-rights-through-sdg-16/#2025-05-14T13:00:00+02:00','Online'),(15,'Angewandte Freizeitwissenschaft studieren!',NULL,'2025-05-14','16:00:00',NULL,12,'Info','/die-hsb/aktuelles/veranstaltung/angewandte-freizeitwissenschaft-studieren-1/#2025-05-14T16:00:00+02:00','Online'),(16,'Barrierefreie Inhalte leicht gemacht: Der Seiten-Editor in AULIS',NULL,'2025-05-15','10:00:00','12:30:00',10,'Workshop','/die-hsb/aktuelles/veranstaltung/barrierefreie-inhalte-leicht-gemacht-der-seiten-editor-in-aulis/#2025-05-15T10:00:00+02:00','Online'),(17,'Aktionstag Digitale Barrierefreiheit: informieren, entdecken, mitgestalten',NULL,'2025-05-15','10:00:00','13:30:00',1,'Workshop','/die-hsb/aktuelles/veranstaltung/aktionstag-digitale-barrierefreiheit-an-der-hsb/#2025-05-15T10:00:00+02:00','Campus Neustadt, Neustadtswall (AB-Gebäude)AB-Gebäude - Erdgeschoss Eingangsbereich Caféteria'),(18,'English Coffee Hour',NULL,'2025-05-15','12:00:00','13:00:00',33,'Info','/die-hsb/aktuelles/veranstaltung/english-coffee-hour/#2025-05-15T12:00:00+02:00','Online'),(19,'Airbus Café',NULL,'2025-05-15','15:15:00','18:30:00',12,'Workshop','/die-hsb/aktuelles/veranstaltung/airbus-cafe/#2025-05-15T15:15:00+02:00','Campus Airportstadt, Flughafenallee (ZIMT) ZIMT - 4. Obergeschoss, Room FL409 (with selected sessions at Airbus and FreiRaum)'),(20,'Nachhaltig gute Entscheidungen treffen',NULL,'2025-05-16','09:00:00','14:00:00',11,'Seminar','/die-hsb/aktuelles/veranstaltung/nachhaltig-gute-entscheidungen-treffen/#2025-05-16T09:00:00+02:00','StudiumPlus (ZLL) Langemarckstraße 113, 28199 Bremen');
/*!40000 ALTER TABLE `veranstaltung` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-10  0:08:30
