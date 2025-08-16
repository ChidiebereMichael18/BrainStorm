const express = require('express');
// const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

connectDb();
const app = express();
const port = 5000

app.use(express.json());
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

// app.use(errorHandler)

app.listen(port, () => 
    console.log(`server is running on port ${port}`)
);