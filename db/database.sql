CREATE DATABASE IF NOT EXISTS cerrajeria;
use cerrajeria;
 create table producto(
    id int(10) not null AUTO_INCREMENT,
    nombre varchar(200) not null ,
    categoria varchar(100) not null,
    precioCliente int(5) not null,
    descripcion varchar(200) default null,
    primary key(id)
 );

  show tables;
 describe producto;
 select * from producto;
 drop table producto;