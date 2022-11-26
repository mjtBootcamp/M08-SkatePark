CREATE DATABASE skatepark;
\c skatepark;
CREATE TABLE skater (
    id SERIAL PRIMARY KEY, 
    email VARCHAR(50) NOT NULL,  
    nombre VARCHAR(25) NOT NULL, 
    password VARCHAR(25) NOT NULL, 
    anos_experiencia INT NOT NULL, 
    especialidad VARCHAR(50) NOT NULL, 
    foto VARCHAR(255) NOT NULL, 
    estado BOOLEAN NOT NULL);

ALTER TABLE skater ADD adm BOOLEAN;
TRUNCATE skater;
INSERT INTO skater (email,  nombre, password, anos_experiencia, especialidad, foto, estado, adm) 
VALUES 
('Danny_true_@gmail.com', 'Danny_true',20, 20, 'Especialidad', 'Danny.jpg', true, false),
('Evelien_false_@gmail.com', 'Evelien_false',21, 21, 'Especialidad', 'Evelien.jpg', false, false),
('tony_true_@gmail.com', 'tony_true',22, 22, 'Especialidad', 'tony.jpg', true, false),
('Danny_false_@gmail.com', 'Danny_false',23, 23, 'Especialidad', 'Danny.jpg', false, false),
('tony_tru_@gmail.com', 'tony_tru',24, 24, 'Especialidad', 'tony.jpg', true, false);

INSERT INTO skater (email, nombre, password, anos_experiencia, especialidad, foto, estado, adm) 
            VALUES 
                    ('Admin1@gmail.com','Nombre Admin 1', '123', 0, 'Admin', 'admin.jpg' , true, true),
                    ('Admin2@gmail.com','Nombre Admin 2', '123', 0, 'Admin', 'admin.jpg' , true, true);

            