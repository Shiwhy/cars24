const express = require('express');
const sql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

const config = {
  host: 'localhost',
  user: 'root',
  password: 'mysqlserver',
  database: 'workshop'
};
const connection = sql.createConnection( config );


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});


app.post('/signup', (req, res) => {
  const { username, password, name, email } = req.body;
  connection.query('insert into login ( username, password, name, email ) values (?, ?, ?, ?)', [username, password, name, email], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    } else {
      return res.status(200).json({ message: 'Login Successfully' });
    }
  });
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  connection.query('select * from login where username = ? and password = ?', [username, password], (err, result) => {
    if(err) {
      console.log(err)
      res.status(500).json({ message: 'Internal Server Error' })
    }

    if (result.length > 0) {
      return res.status(200).json({ message: 'Login Successfull' });
    } else {
      return res.status(401).json({ message: "Invalid Username or Password"})
    }
  })
});


app.listen(PORT, () => {
  console.log(`Server is running on '${ PORT }'`);
});