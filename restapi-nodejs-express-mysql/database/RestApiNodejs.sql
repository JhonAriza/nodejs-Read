

--
-- Base de datos: `Konecta`


-- --------------------------------------------------------

CREATE TABLE empleado (
  id INT(10) NOT NULL AUTO_INCREMENT,
  fecha_ingreso DATE NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  salario DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO empleado VALUES ( 1,'2020-10-23','juan', 1020.22);
INSERT INTO empleado VALUES ( 2,'2020-10-23','pedro', 120.500);
INSERT INTO empleado VALUES ( 3,'2020-10-23','luna',20.5220);
INSERT INTO empleado VALUES ( 4,'2020-10-23','pepa', 20.025525);


-- --------------------------------------------------------

CREATE TABLE solicitud (
  id INT(10) NOT NULL AUTO_INCREMENT,
  codigo VARCHAR(20) NOT NULL,
  descripcion TEXT NOT NULL,
  resumen VARCHAR(100) NOT NULL,
  id_empleado INT(10) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_empleado) REFERENCES empleado(id)
);


INSERT INTO solicitud VALUES ( 2,34,'llamdo de atencion','hoy',2);
INSERT INTO solicitud VALUES ( 3,332,'carro','vive lejos' ,2);
INSERT INTO solicitud VALUES ( 4,3422332,'solicita bicicleta','se pincho' ,3);
INSERT INTO solicitud VALUES ( 5,3423232,'descanso','trabajo el domingo' ,4);