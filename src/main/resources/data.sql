INSERT INTO person (id, city, country, email, first_name, gender, last_name, password, phone_number, state, street, zip_code, picture_url)
VALUES (1, 'Sarajevo', 'Bosnia and Herzegovina', 'johndoe1@gmail.com', 'John', 'MALE', 'Doe', '$Pc9P3C7&+u]ETJ', '123-456-789', 'Queensland', 'Green Street', '68000', 'https://images.unsplash.com/photo-1515201899114-98ba64d41df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjI0NjQ4Mzcw&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit');
INSERT INTO person (id, city, country, email, first_name, gender, last_name, password, phone_number, state, street, zip_code, picture_url)
VALUES (2, 'Belgrade', 'Serbia', 'jimgrace@gmail.com', 'Jim', 'MALE', 'Grace', '$TS!JgEwuEAa!4U9T', '789-101-123', 'Tasmania', 'Red Street', '69000', 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit');
INSERT INTO person (id, city, country, email, first_name, gender, last_name, password, phone_number, state, street, zip_code, picture_url)
VALUES (3, 'Zagreb', 'Croatia', 'jessicawilliams1@gmail.com', 'Jessica', 'FEMALE', 'Williams', '$3brz*e-76RarH8-', '141-516-171', 'South Australia', 'Blue Street', '70000', 'https://images.unsplash.com/photo-1633114074391-a3927f92f44b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTgyMDM1Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080');
INSERT INTO person (id, city, country, email, first_name, gender, last_name, password, phone_number, state, street, zip_code, picture_url)
VALUES (4, 'Podgorica', 'Montenegro', 'lindaparker1@gmail.com', 'Linda', 'FEMALE', 'Parker', '$Yp!T)&#2SJzM3.]2', '819-202-122', 'Western Australia', 'Purple Street', '71000', 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit');
INSERT INTO person (id, city, country, email, first_name, gender, last_name, password, phone_number, state, street, zip_code, picture_url)
VALUES (5, 'Ljubljana', 'Slovenia', 'ramonjohnson1@gmail.com', 'Ramon', 'MALE', 'Johnson', '$tf!@7ktEQk)^XXjS', '223-242-526', 'New South Wales', 'Yellow Street', '72000', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit');

INSERT INTO category (id, name) VALUES (1, 'Fashion');
INSERT INTO category (id, name) VALUES (2, 'Accessories');
INSERT INTO category (id, name) VALUES (3, 'Jewellery');
INSERT INTO category (id, name) VALUES (4, 'Shoes');
INSERT INTO category (id, name) VALUES (5, 'Sportswear');
INSERT INTO category (id, name) VALUES (6, 'Home');
INSERT INTO category (id, name) VALUES (7, 'Electronics');
INSERT INTO category (id, name) VALUES (8, 'Mobile');
INSERT INTO category (id, name) VALUES (9, 'Computer');

INSERT INTO subcategory (id, name, category_id, picture_url)
VALUES (1, 'Hats', 1, 'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit');
INSERT INTO subcategory (id, name, category_id, picture_url)
VALUES (2, 'Sunglasses', 2, 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit');
INSERT INTO subcategory (id, name, category_id, picture_url)
VALUES (3, 'Rings', 3, 'https://images.unsplash.com/photo-1550368566-f9cc32d7392d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit');
INSERT INTO subcategory (id, name, category_id, picture_url)
VALUES (4, 'Men sneakers', 4, 'https://images.unsplash.com/photo-1552346154-21d32810aba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit');
INSERT INTO subcategory (id, name, category_id, picture_url)
VALUES (5, 'Men shorts', 5, 'https://images.unsplash.com/photo-1621496503717-095a410e1566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjYzNzU0Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080');
INSERT INTO subcategory (id, name, category_id, picture_url)
VALUES (6, 'Pet', 6, 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit');
INSERT INTO subcategory (id, name, category_id, picture_url)
VALUES (7, 'TV', 7, 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE4OTEyNTM5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit');
INSERT INTO subcategory (id, name, category_id, picture_url)
VALUES (8, 'Cases', 8, 'https://images.unsplash.com/photo-1535157412991-2ef801c1748b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit');
INSERT INTO subcategory (id, name, category_id, picture_url)
VALUES (9, 'RAM', 9, 'https://images.unsplash.com/photo-1562976540-1502c2145186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDM4NTE0Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080');

INSERT INTO product (id, city, color, country, description, end_date, featured, name, phone_number, shipping_cost, size, start_date, start_price, street, zip_code, person_id, subcategory_id)
VALUES (1, 'Berlin', 'white', 'Germany', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisl eget purus ullamcorper viverra a in risus. Nunc imperdiet.', '2022-05-22 09:10:57.521000', true, 'Hat', '222-111-333', true, 'SMALL', '2020-12-17 15:16:17.537000', 25, 'Green Street', '68000', 1, 1);
INSERT INTO product (id, city, color, country, description, end_date, featured, name, phone_number, shipping_cost, size, start_date, start_price, street, zip_code, person_id, subcategory_id)
VALUES (2, 'New York', 'black', 'USA', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisl eget purus ullamcorper viverra a in risus. Nunc imperdiet.', '2022-05-22 09:10:57.521000', true, 'Brown Sunglasses', '222-111-333', true, 'MEDIUM', '2019-06-12 15:16:17.537000', 50, 'Red Street', '69000', 2, 2);
INSERT INTO product (id, city, color, country, description, end_date, featured, name, phone_number, shipping_cost, size, start_date, start_price, street, zip_code, person_id, subcategory_id)
VALUES (3, 'Marseille', 'red', 'France', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisl eget purus ullamcorper viverra a in risus. Nunc imperdiet.', '2022-05-22 09:10:57.521000', true, 'Ring', '222-111-333', true, 'SMALL', '2019-04-13 15:16:17.537000', 350, 'Blue Street', '70000', 3, 3);
INSERT INTO product (id, city, color, country, description, end_date, featured, name, phone_number, shipping_cost, size, start_date, start_price, street, zip_code, person_id, subcategory_id)
VALUES (4, 'Denver', 'black', 'USA', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisl eget purus ullamcorper viverra a in risus. Nunc imperdiet.', '2022-05-22 09:10:57.521000', true, 'Sneakers', '222-111-333', true, 'LARGE', '2019-11-02 15:16:17.537000', 199, 'Purple Street', '71000', 4, 4);
INSERT INTO product (id, city, color, country, description, end_date, featured, name, phone_number, shipping_cost, size, start_date, start_price, street, zip_code, person_id, subcategory_id)
VALUES (5, 'Milano', 'red', 'Italy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisl eget purus ullamcorper viverra a in risus. Nunc imperdiet.', '2022-05-22 09:10:57.521000', true, 'Shorts', '222-111-333', true, 'MEDIUM', '2019-03-15 15:16:17.537000', 35, 'Yellow Street', '72000', 5, 5);
INSERT INTO product (id, city, color, country, description, end_date, featured, name, phone_number, shipping_cost, size, start_date, start_price, street, zip_code, person_id, subcategory_id)
VALUES (6, 'Istanbul', 'red', 'Turkey', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisl eget purus ullamcorper viverra a in risus. Nunc imperdiet.', '2022-05-22 09:10:57.521000', true, 'Blue sofa', '222-111-333', true, 'LARGE', '2020-01-17 15:16:17.537000', 2500, 'Green Street', '68000', 1, 6);
INSERT INTO product (id, city, color, country, description, end_date, featured, name, phone_number, shipping_cost, size, start_date, start_price, street, zip_code, person_id, subcategory_id)
VALUES (7, 'Oslo', 'blue', 'Norway', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisl eget purus ullamcorper viverra a in risus. Nunc imperdiet.', '2022-05-22 09:10:57.521000', true, 'TV Led', '222-111-333', true, 'LARGE', '2020-05-16 15:16:17.537000', 1200, 'Red Street', '69000', 2, 7);
INSERT INTO product (id, city, color, country, description, end_date, featured, name, phone_number, shipping_cost, size, start_date, start_price, street, zip_code, person_id, subcategory_id)
VALUES (8, 'Helsinki', 'white', 'Finland', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisl eget purus ullamcorper viverra a in risus. Nunc imperdiet.', '2022-05-22 09:10:57.521000', true, 'Phone Case', '222-111-333', true, 'SMALL', '2020-03-24 15:16:17.537000', 10, 'Blue Street', '70000', 3, 8);
INSERT INTO product (id, city, color, country, description, end_date, featured, name, phone_number, shipping_cost, size, start_date, start_price, street, zip_code, person_id, subcategory_id)
VALUES (9, 'Barcelona', 'blue', 'Spain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisl eget purus ullamcorper viverra a in risus. Nunc imperdiet.', '2022-05-22 09:10:57.521000', true, 'RAM 2GB DD3', '222-111-333', true, 'MEDIUM', '2020-06-15 15:16:17.537000', 15, 'Yellow Street', '71000', 4, 9);

INSERT INTO picture (id, url, product_id, featured)
VALUES (1, 'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit', 1, true);
INSERT INTO picture (id, url, product_id, featured)
VALUES (2, 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit', 2, true);
INSERT INTO picture (id, url, product_id, featured)
VALUES (3, 'https://images.unsplash.com/photo-1550368566-f9cc32d7392d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit', 3, true);
INSERT INTO picture (id, url, product_id, featured)
VALUES (4, 'https://images.unsplash.com/photo-1552346154-21d32810aba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit', 4, true);
INSERT INTO picture (id, url, product_id, featured)
VALUES (5, 'https://images.unsplash.com/photo-1621496503717-095a410e1566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjYzNzU0Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080', 5, true);
INSERT INTO picture (id, url, product_id, featured)
VALUES (6, 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit', 6, true);
INSERT INTO picture (id, url, product_id, featured)
VALUES (7, 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE4OTEyNTM5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit', 7, false);
INSERT INTO picture (id, url, product_id, featured)
VALUES (8, 'https://images.unsplash.com/photo-1535157412991-2ef801c1748b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit', 8, true);
INSERT INTO picture (id, url, product_id, featured)
VALUES (9, 'https://images.unsplash.com/photo-1562976540-1502c2145186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDM4NTE0Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080', 9, true);
