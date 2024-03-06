const database = require('../database')

// Get a list of books
exports.listBooks = async (request, response) => {
  const { page = 1, limit = 30 } = request.query
  try {
    const [books] = await database.query('SELECT * FROM books LIMIT ?, ?', [
      (page - 1) * limit,
      +limit,
    ])
    response.json(books)
  } catch (error) {
    response
      .status(500)
      .json({ message: 'Error retrieving books', error: error.message })
  }
}

// Get a book by ID
exports.getBookById = async (request, response) => {
  const { id } = request.params
  try {
    const [book] = await database.query('SELECT * FROM books WHERE id = ?', [
      id,
    ])
    if (book.length > 0) {
      response.json(book[0])
    } else {
      response.status(404).json({ message: 'Book not found' })
    }
  } catch (error) {
    response
      .status(500)
      .json({ message: 'Error retrieving the book', error: error.message })
  }
}

// Add a new book
exports.addBook = async (request, response) => {
  const { title, author, publicationYear } = request.body
  if (!title || !author || !publicationYear) {
    return response.status(400).json({ message: 'Missing Required Fields' })
  }
  try {
    const [result] = await database.query(
      'INSERT INTO books (title, author, publicationYear) VALUES (?, ?, ?)',
      [title, author, publicationYear],
    )
    response
      .status(201)
      .json({ id: result.insertID, title, author, publicationYear })
  } catch (error) {
    response
      .status(500)
      .json({ message: 'Error adding the book', error: error.message })
  }
}

// Update a book by ID
exports.updateBook = async (request, response) => {
  const { id } = request.params
  const { title, author, publicationYear } = request.body
  try {
    const [result] = await database.query(
      'UPDATE books SET title = ?, author = ?, publicationYear = ? WHERE id = ?',
      [title, author, publicationYear, id],
    )
    if (result.affectedRows > 0) {
      response.json({ message: 'Book updated successfully!' })
    } else {
      response.status(404).json({ message: 'Book not found' })
    }
  } catch (error) {
    response
      .status(500)
      .json({ message: 'Error updating the book', error: error.message })
  }
}

// Delete a book by ID
exports.deleteBook = async (request, response) => {
  const { id } = request.params
  try {
    const [result] = await database.query('DELETE FROM books WHERE id = ?', [
      id,
    ])
    if (result.affectedRows > 0) {
      response.json({ message: 'Book deleted successfully!' })
    } else {
      response.status(404).json({ message: 'Book not found' })
    }
  } catch (error) {
    response
      .status(500)
      .json({ message: 'Error deleting the book', error: error.message })
  }
}

// Search for books by title or author
exports.searchBooks = async (request, response) => {
  const { q } = request.query
  try {
    const [books] = await database.query(
      'SELECT * FROM books WHERE title LIKE ? OR author LIKE ?',
      [`%${q}%`, `%${q}%`],
    )
    response.json(books)
  } catch (error) {
    response
      .status(500)
      .json({ message: 'Error searching for books', error: error.message })
  }
}

// Get stats about the book collection
exports.getStats = async (request, response) => {
  try {
    const [totalBooks] = await database.query(
      'SELECT COUNT(*) AS total FROM books',
    )
    const [earliestPublicationYear] = await database.query(
      'SELECT MIN(publicationYear) AS earliestYear FROM books',
    )
    const [latestPublicationYear] = await database.query(
      'SELECT MAX(publicationYear) AS latestYear FROM books',
    )
    response.json({
      totalBooks: totalBooks[0].total,
      earliestPublicationYear: earliestPublicationYear[0].earliestYear,
      latestPublicationYear: latestPublicationYear[0].latestYear,
    })
  } catch (error) {
    response
      .status(500)
      .json({ message: 'Error retrieving stats', error: message.error })
  }
}
