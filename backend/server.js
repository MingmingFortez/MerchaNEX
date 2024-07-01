
require('dotenv').config();

console.log('DATABASE_URL:', process.env.DATABASE_URL);


const express = require("express");
const cors = require("cors");
const pg = require('pg');
const db = require("./database");

const app = express();

app.use(express.json());
app.use(cors());



// Route to get all devices
app.get("/", async (req, res) => {
    try {
        const query = 'SELECT "id", "name", "apuser" FROM A_APPLIANCE ORDER BY "id"';
        const result = await db.query(query);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving devices");
    }
});

// If you have a route for specific APUSER, update it as well:
app.get("/devices/:apuser", async (req, res) => {
    const apuser = req.params.apuser;
    try {
        const query = 'SELECT "id", "name" FROM A_APPLIANCE WHERE apuser = $1 ORDER BY "id"';
        const result = await db.query(query, [apuser]);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving devices");
    }
});

app.post('/user', async (req, res) => {
  const { id, email, name, upassword } = req.body;

  console.log('ID:', id);
  console.log('Email:', email);
  console.log('Name:', name);
  console.log('Password:', upassword);

  const insertSMT = 'INSERT INTO a_userepassword (id, email, name, upassword) VALUES ($1, $2, $3, $4)';

  try {
      await db.query(insertSMT, [id, email, name, upassword]);
      console.log('Data Saved');
      res.send('User added successfully');
  } catch (err) {
      console.error('Error adding user:', err);
      res.status(500).send('Error adding user');
  }
});

app.get('/db', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM test_table');
        res.json({ 'results': result.rows });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error " + err);
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


