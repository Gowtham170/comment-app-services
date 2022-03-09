const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

//imports routes
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comment');

const connection = require('./config/dbconfig');

const app = express();

//env variable
dotenv.config();
const PORT = process.env.PORT;

//db connection
connection();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/user', userRoutes);
app.use('/api/comment', commentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on the http://localhost:${PORT}`);
});