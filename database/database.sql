-- Don't forget to add your create table SQL 
CREATE TABLE "shoppingList" (
	id serial primary key,
	name varchar(80),
	quantity integer,
	unit varchar(20)
);
-- It is also helpful to include some test data
INSERT INTO "shoppingList" ("name", "quantity", "unit")
values
('Grapes', 1, 'lbs'),
('Sour Cream', 7.4,'oz'),
('bread', 1, 'package');