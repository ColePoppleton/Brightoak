const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ensure views directory is set correctly
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route handlers
const homeRouter = require('./routes/home');
app.use('/', homeRouter);

const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PROTOCOL = 'http';
const SERVER_URL = `${PROTOCOL}://${HOSTNAME}:${PORT}`;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    console.log(`Visit the server at: ${SERVER_URL}`);
});