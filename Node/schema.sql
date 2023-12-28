CREATE DATABASE b1db;
USE b1db;

CREATE TABLE notes(
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);



INSERT INTO NOTES (title,contents)
VALUES
('My First Note','A note about something'),
('My Second Note', 'A note about something else');