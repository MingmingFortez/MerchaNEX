
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
app.get("/devices", async (req, res) => {
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

app.post("/adduser", async (req, res) => {
    const { username, password } = req.body;

    console.log("Username:" + username);
    console.log("Password:" + password);

    const insertSMT = 'INSERT INTO accounts(username, password) VALUES ($1, $2)';

    try {
        const response = await db.query(insertSMT, [username, password]);
        console.log("Data Saved");
        console.log(response);
        res.send("User added successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding user");
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


