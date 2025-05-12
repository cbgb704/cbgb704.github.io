import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:5000/api/books';

function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: '', author: '' });

  // Fetch all books from the backend API
  const fetchBooks = async () => {
    const res = await axios.get(API);
    setBooks(res.data);
  };

  // Create a new book
  const createBook = async () => {
    try {
      await axios.post(API, form);
      setForm({ title: '', author: '' });
      fetchBooks();  // Refresh the list
    } catch (err) {
      console.error('Failed to create book:', err);
      alert('Error adding book. Check the console for details.');
    }
  };

  // Update a book's author
  const updateBook = async (id) => {
    const newAuthor = prompt('Enter new author:');
    if (newAuthor) {
      await axios.put(`${API}/${id}`, { author: newAuthor });
      fetchBooks();  // Refresh the list
    }
  };

  // Delete a book
  const deleteBook = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchBooks();  // Refresh the list
  };

  // Fetch books when the component mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>📚 Book List</h1>
      <input
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Author"
        value={form.author}
        onChange={e => setForm({ ...form, author: e.target.value })}
      />
      <button onClick={createBook}>Add Book</button>

      <ul>
        {books.map(book => (
          <li key={book._id}>
            <b>{book.title}</b> by {book.author}
            <button onClick={() => updateBook(book._id)}>✏️</button>
            <button onClick={() => deleteBook(book._id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
