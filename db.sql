CREATE DATABASE IF NOT EXISTS quiz_login;
USE quiz_login;
CREATE TABLE users ( 
	id int AUTO_INCREMENT,
	name varchar(20),
	email varchar(20),
	password varchar(128),
	PRIMARY KEY (id)
);