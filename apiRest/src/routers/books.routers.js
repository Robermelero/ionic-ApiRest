const express = require('express');
const router = express.Router();
const booksCtrl = require('../controller/book.controller');

router.get('/books/:id_book', booksCtrl.getBook);
router.post('/books', booksCtrl.addBook);
router.put('/books', booksCtrl.updateBook);
router.delete('/books', booksCtrl.deleteBook);

module.exports = router;
