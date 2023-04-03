const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
const connectDB = require('./config/db');
const colors = require('colors');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//   res.send('API is running');
// });

app.use('/api/user', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server Started on ${PORT}`.yellow.bold));
