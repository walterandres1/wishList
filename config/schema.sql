DROP DATABASE IF EXISTS wishmas_db;
CREATE DATABASE IF NOT EXISTS wishmas_db;

USE DATABASE wishmas_db;

CREATE TABLE list (
    id INT NOT NULL AUTO_INCREMENT;
    item_name VARCHAR(55) NOT NULL,
    item_price DECIMAL(8,2) NOT NULL,
    category VARCHAR(55),
    description VARCHAR(250),
);

