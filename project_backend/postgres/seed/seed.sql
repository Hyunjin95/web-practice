BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) values ('Tim', 'tim@gmail.com', 5, '2018-01-01');
INSERT into login (hash, email) values ('$2y$12$cVtuqQ/Nv1p4.QbQVUO/0e568h9oHbBgY3Xx9ad12dCQU6RXKY4ti', 'tim@gmail.com');

COMMIT;