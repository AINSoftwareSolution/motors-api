const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan');

const authRoutes = require('./Auth/authRoute');
const carRoutes = require('./Cars/carRoute');
const connectDB = require('./config/db')

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api', carRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('This is the root URL');
});

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})