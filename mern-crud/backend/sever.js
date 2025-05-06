const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const booksRoute = require('./routes/books');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/books', booksRoute);

mongoose.connect('mongodb://127.0.0.1:27017/merncrud', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));