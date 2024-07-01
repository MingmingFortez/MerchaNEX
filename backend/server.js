// server.js
import pg from 'pg'
const {Client} = pg
const client = new Client({
    user: 'u8eniq7su6io8s',
    host: 'ccba8a0vn4fb2p.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
    database: 'd21orf41k6c3r2',
    password: 'p54a40fc4963d81bc289f08a47008bd4fffb57304edf02a3e85563d30f6b35547',
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


