DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(125) NOT NULL,
  department_name VARCHAR(65) NOT NULL, 
  price DECIMAL (5, 2) NOT NULL, 
  stock_quantity INT(3),
  PRIMARY KEY (id)
);

select * from products; 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Red Shoes', 'shoe department', 20, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Hairbrush', 'beauty & health', 10.95, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Taken', 'movies music & games', 19.96, 115);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Dj Table', 'electronics', 1300, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Dog Toy', 'pets', 5, 77);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Makeup Remover', 'beauty & health', 8.5, 97);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Beats Speaker', 'electronics', 100.98, 21);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Pot', 'home appliances', 29.99, 105);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Blanket', 'home decor', 75.99, 212);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Dog bed', 'pets', 12.59, 510);