const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
const connectDB = require('./config/db');
const colors = require('colors');

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/chat', (req, res) => {
  res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
  const singleChat = chats.find((chat) => chat._id == req.params.id);
  res.send(singleChat);
});

app.listen(PORT, () => console.log(`Server Started on ${PORT}`.yellow.bold));
