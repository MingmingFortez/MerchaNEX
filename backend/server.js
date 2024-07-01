// server.js
import pg from 'pg'
const {Client} = pg
const client = new Client({
    user: 'myuser',
    host: 'localhost',
    database: 'mydatabase',
    password: 'mypassword',
    port: 5432,
});
client.connect();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5432;


app.get('/', (req, res) => {
 res.send('Hello from the backend!');
});


app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});


