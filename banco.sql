CREATE DATABASE sistema_encomendas;

USE sistema_encomendas;

CREATE TABLE visitantes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cpf VARCHAR(14) NOT NULL,
  cep VARCHAR(9),
  data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);