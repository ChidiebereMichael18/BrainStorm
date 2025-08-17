const express = require('express');
const cors = require('cors');
// const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/connectDb');
const bodyParser = require("body-parser");

connectDb();
const app = express();
const port = 5000

// CORS configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.json());
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/stats', require('./routes/statsRoutes')); 

// app.use(errorHandler)

app.listen(port, () => 
    console.log(`server is running on port ${port}`)
);