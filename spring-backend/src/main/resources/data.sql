INSERT into categories (id, name) values (1, 'Fiction');
INSERT into categories (id, name) values (2, 'Nonfiction');
INSERT into categories (id, name) values (3, 'Fantasy');


INSERT into publishers (id, name) values (1, 'Houghton Mifflin Harcourt');
INSERT into publishers (id, name) values (2, 'Harper Perennial Modern Classics');
INSERT into publishers (id, name) values (3, 'Signet Classics');
INSERT into publishers (id, name) values (4, 'Penguin Classics');
INSERT into publishers (id, name) values (5, 'Scribner');


INSERT INTO books (id, image_url, price, title, publisher_id)
VALUES
    (1, 'https://images-na.ssl-images-amazon.com/images/I/51ZU%2BZ7%2BxlL._SX331_BO1,204,203,200_.jpg', 10.99, 'The Hobbit', 1),
    (2, 'https://images-na.ssl-images-amazon.com/images/I/51bKaqqzP8L._SX346_BO1,204,203,200_.jpg', 14.99, 'To Kill a Mockingbird', 2),
    (3, 'https://images-na.ssl-images-amazon.com/images/I/51Uj2qJXW1L._SX331_BO1,204,203,200_.jpg', 9.99, '1984', 3),
    (4, 'https://images-na.ssl-images-amazon.com/images/I/51r2x9NXJmL._SX327_BO1,204,203,200_.jpg', 12.99, 'Pride and Prejudice', 4),
    (5, 'https://images-na.ssl-images-amazon.com/images/I/51eBh-ldzBL._SX322_BO1,204,203,200_.jpg', 8.99, 'The Great Gatsby', 5),
    (6, 'https://images-na.ssl-images-amazon.com/images/I/51ZU%2BZ7%2BxlL._SX331_BO1,204,203,200_.jpg', 10.99, 'The Hobbit', 1),
    (7, 'https://images-na.ssl-images-amazon.com/images/I/51bKaqqzP8L._SX346_BO1,204,203,200_.jpg', 14.99, 'To Kill a Mockingbird', 2),
    (8, 'https://images-na.ssl-images-amazon.com/images/I/51Uj2qJXW1L._SX331_BO1,204,203,200_.jpg', 9.99, '1984', 3),
    (9, 'https://images-na.ssl-images-amazon.com/images/I/51r2x9NXJmL._SX327_BO1,204,203,200_.jpg', 12.99, 'Pride and Prejudice', 4),
    (10, 'https://images-na.ssl-images-amazon.com/images/I/51eBh-ldzBL._SX322_BO1,204,203,200_.jpg', 8.99, 'The Great Gatsby', 5),
    (11, 'https://images-na.ssl-images-amazon.com/images/I/51ZU%2BZ7%2BxlL._SX331_BO1,204,203,200_.jpg', 10.99, 'The Hobbit', 1),
    (12, 'https://images-na.ssl-images-amazon.com/images/I/51bKaqqzP8L._SX346_BO1,204,203,200_.jpg', 14.99, 'To Kill a Mockingbird', 2),
    (13, 'https://images-na.ssl-images-amazon.com/images/I/51Uj2qJXW1L._SX331_BO1,204,203,200_.jpg', 9.99, '1984', 3),
    (14, 'https://images-na.ssl-images-amazon.com/images/I/51r2x9NXJmL._SX327_BO1,204,203,200_.jpg', 12.99, 'Pride and Prejudice', 4);

insert into books_categories (bookid, categoryid) values (1, 3);
insert into books_categories (bookid, categoryid) values (2, 1);
insert into books_categories (bookid, categoryid) values (3, 2);
insert into books_categories (bookid, categoryid) values (4, 1);