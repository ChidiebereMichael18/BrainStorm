const express = require('express');
const cors = require('cors');
// const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/connectDb');

connectDb();
const app = express();
const port = 5000

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173', // Vite's default port
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/stats', require('./routes/statsRoutes')); 

// app.use(errorHandler)

app.listen(port, () => 
    console.log(`server is running on port ${port}`)
);