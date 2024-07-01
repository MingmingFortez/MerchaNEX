// server.js
import pg from 'pg'
import { User } from './user-model';
// const {Client} = pg
// const client = new Client({
//     user: 'myuser',
//     host: 'localhost',
//     database: 'mydatabase',
//     password: 'mypassword',
//     port: 5432,
// });
// client.connect();

// client.query('SELECT * FROM users', (err, res) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(res.rows);
//     client.end();
//   });

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5432;


app.get('/', (req, res) => {
 //res.send('Hello from the backend!');
 User.findAll().then(data => {
  console.log(data);
  res.send(data);
})
});

app.post('/data', function(req,res){
  User.create({
      email: req.body.email,
      password: req.body.password
  }).then(data => {
    console.log('Data posted!');
    res.send({
      status: 'Data sent!',
      email: req.body.email,
      password: req.body.password
    });
  });
  })

app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});


