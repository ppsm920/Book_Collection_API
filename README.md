# Book Collection API # 
This RESTful API is developed using Node.js and Express, designed to manage a collection of books. 
It supports CRUD operation, allowing users to create, read, update, and delete book entires. Additionally, the API provides functionalities for pagination, searching books, by title or author, and fetching statistics about the book collection 

This project is done for an Erewhon take-home assignment by Sumin Kim :smile:

## Features ## 
* CRUD operations on books
* Pagination support for listing books
*  Input validation for creating and updating books details
* Search functionality based on book title of author 
* Statistics about the book collection, including total number of books and publication year range

## Technologies Used ## 
* Node.js
* Express
* MySQL 
* dotenv for managing environment variables 

## Getting Started ##

  ### Prerequisites ###
  * Node.js installed on your machine
  * MySQL server running locally to use <u>MySQL Dump file</u> (separately attached as '.sql' file)
  * Here is the guide to use MySQL Dump file 
    * Download and locate the Dump file 
    * Navigate to the directory where the Dump file is located 
    : type `cd path/to/directory` in the terminal
    * Log in to MySQL (require YOUR MySQL username / password ) 
    : type `mysql -u YOUR_MYSQL_USERNAME -p` 
    * Create a new database where we can embed the Dump file I provided 
    : type `CREATE DATABASE anyNameForDB`
      * anyNameForDB : you can name it anything you want
    * Import the Dump file
    : type `mysql -u YOUR_MYSQL_USERNAME -p anyNameForDB < path/to/dumpFile.sql` 
      * 'path/to/dumpFile.sql' : needed an actual path to the dump file (where you saved it earlier)
    * Now you can test and review the db contents as needed :smile:


  ### Set up ###
  1. Clone the repository : `git clone https://github.com/ppsm920/Book_Collection_API.git`
  2. Install dependencies : `npm install`
  3. Configure environment variables 
     : update '.env' file, filling in your MySQL database connection details 
    <u>(DB name you created in previous step | your MySQL username & password)</u>
  4. Start the server : `npm start` 
  
  * I personally recommend to use <u>Postman</u> 
    to test CRUD operation & Search/Stats functionalities :smile:

  ### API Endpoints ###
 * GET `/books` : it also supports pagination via `?page=` & `?limit=` query parameters
 * GET `/books/search?q={query}` : Search functionality 
 * GET `/books/stats` : Get statistics about the book collection
 * GET `/books/:id` : book by ID
 * POST `/books`: add a new book, required title, author, publicationYear in the request body 
 * PUT `/books/:id` : update a book
 * DELETE `/books/:id` : delete a book

  ### Project Structure ###
  * `app.js` : Entry point of the app
  * `.env` : Environment variables for database configuration
  * `/controllers` : Handle API logic
  * `/routes` : Route definitions for the API
  * `/database` : To provide SQL db schema 
                  & Guide to test `POST` or `PUT` requests by adding/updating books 
  * `database.js` : Handle database connection 


# Question # 
Feel free to reach out for any questions via email: ppsm920@gmail.com Thanks!