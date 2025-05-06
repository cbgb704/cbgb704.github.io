const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Create
router.post('/', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.json(book);
});

// Read all
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Update
router.put('/:id', async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
