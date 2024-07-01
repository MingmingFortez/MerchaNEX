// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5432;


app.get('/', (req, res) => {
 res.send('Hello from the backend!');
});


app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});


