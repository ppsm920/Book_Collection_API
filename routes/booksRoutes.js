const express = require('express')
const booksController = require('../controllers/booksController')
const router = express.Router()

router.get('/books', booksController.listBooks)
router.get('/books/stats', booksController.getStats)
router.get('/books/search', booksController.searchBooks)

router.get('/books/:id', booksController.getBookById)
router.post('/books', booksController.addBook)
router.put('/books/:id', booksController.updateBook)
router.delete('/books/:id', booksController.deleteBook)

module.exports = router
