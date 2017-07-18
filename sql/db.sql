drop database if exists rapidpro;
create database rapidpro;

drop user if exists messenger;
create user messenger with password 'test';

grant all privileges on database rapidpro to messenger;

\c rapidpro;
set role messenger;

/* Usuarios */
drop table if exists usuarios cascade;
create table usuarios(
    id serial primary key,
    id_campania integer references tiendas(id),
    usuario text,
    contrasena text,
    email text,
    nombres text,
    apellido_paterno text,
    apellido_materno text,
    rfc text,
    direccion_calle text,
    direccion_numero_int text,
    direccion_numero_ext text,
    direccion_colonia text,
    direccion_localidad text,
    direccion_municipio text,
    direccion_ciudad text,
    direccion_estado text,
    direccion_pais text,
    permiso_tablero boolean,
    permiso_administrador boolean
);

/* Insert admin */
insert into usuarios ("id_campania","usuario","contrasena","nombres","apellido_paterno","apellido_materno","permiso_tablero","permiso_administrador") values
(1,'admin','$2a$10$DmxbjTLBYDdcha8qlXpsaOyUqkJ0BAQ3Q4EIyMtr5HLXm6R0gSvbm','Administrador','','', true, true, true, true);

