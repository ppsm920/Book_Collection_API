-- This is how I structure MySQL dump file 
CREATE TABLE books {
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    publicationYear YEAR NOT NULL
}

--  This is how I insert the data into bookCollection database 
INSERT INTO books (title, author, publicationYear) VALUES 
('book1 title ', 'book1 author' year)
... 

-- If you want to test POST or PUT requests on Postman, you can use the following JSON file : 
{ "title" : "testBook1",
  "author" : "testAuthor",
  "publicationYear" : 2024 }