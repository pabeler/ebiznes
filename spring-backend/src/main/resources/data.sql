INSERT into categories (id, name) values (1, 'Fiction');
INSERT into categories (id, name) values (2, 'Nonfiction');
INSERT into categories (id, name) values (3, 'Fantasy');


INSERT into publishers (id, name) values (1, 'Houghton Mifflin Harcourt');
INSERT into publishers (id, name) values (2, 'Harper Perennial Modern Classics');
INSERT into publishers (id, name) values (3, 'Signet Classics');
INSERT into publishers (id, name) values (4, 'Penguin Classics');
INSERT into publishers (id, name) values (5, 'Scribner');


INSERT INTO books (id, image_url, price, title, publisher_id,quantity)
VALUES
    (1, '/images/blank.png', 10.99, 'The Hobbit', 1, 10),
    (2, '/images/blank.png', 14.99, 'To Kill a Mockingbird', 2, 5),
    (3, '/images/blank.png', 9.99, '1984', 3, 3),
    (4, '/images/blank.png', 12.99, 'Pride and Prejudice', 4, 5),
    (5, '/images/blank.png', 8.99, 'The Great Gatsby', 5, 6);

insert into books_categories (bookid, categoryid) values (1, 3);
insert into books_categories (bookid, categoryid) values (2, 1);
insert into books_categories (bookid, categoryid) values (3, 2);
insert into books_categories (bookid, categoryid) values (4, 1);
insert into books_categories (bookid, categoryid) values (5, 1);