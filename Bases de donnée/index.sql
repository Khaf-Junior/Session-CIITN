CREATE DATABASE MariamaBa; -- Creer une base de donnée nommé Mariama Ba;
USE MariamaBa; -- utilisation de la base de donnée

-- Création de la table etudiant
CREATE TABLE Etudiants (
	id INT PRIMARY KEY NOT NULL,
	NomComplet TEXT NOT NULL,
	age INT NOT NULL
);

INSERT INTO Etudiants VALUES (1,'Pape Ibrahima MBAYE',17); -- Inserer une donnée dans une table
INSERT INTO Etudiants VALUES (2,'Mariama BA',19),(3,'Sarah',17); -- Affecter 2 lignes

INSERT INTO Etudiants (id,NomComplet) VALUES  (4,'Assane');
SELECT * FROM Etudiants;

CREATE TABLE Secretaire (
	id INT PRIMARY KEY,
	NomComplet VARCHAR(100),
	age INT 
);

INSERT INTO Secretaire (id,NomComplet) VALUES (1,'Rajah Cisse');
SELECT * FROM Secretaire;