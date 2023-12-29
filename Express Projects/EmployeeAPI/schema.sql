CREATE DATABASE sumu;

USE sumu;

CREATE TABLE employee(
    id integer PRIMARY KEY AUTO_INCREMENT,
    name varchar(25) NOT NULL,  
    age integer NOT NULL,
    created timestamp NOT NULL default now()
);

insert into employee(name,age) values("abc",28),("xyz",52);