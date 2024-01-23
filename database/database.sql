-create database named "shoppingList"

-- Don't forget to add your create table SQL 
CREATE TABLE "shoppingList" (
	id serial primary key,
	name varchar(80),
	quantity numeric,
	unit varchar(20),
	purchased boolean false,
);
-- It is also helpful to include some test data
INSERT INTO "shoppingList" ("name", "quantity", "unit", "purchased")
values
('Grapes', 1, 'lbs', false),
('Sour Cream', 7.4,'oz', false),
('bread', 1, 'package', false);