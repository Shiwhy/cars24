const express = require('express');
const mssql = require('mssql');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

const config = {
  user: 'meet',
  password: 'meet',
  server: 'DESKTOP-F4QVLAC\\SQLEXPRESS',
  database: 'workshop_system',
  options: {
    encrypt: false,
    trustedConnection: true,
    trustServerCertificate: true
  }
}


const pool = new mssql.ConnectionPool(config)
const poolConnection = pool.connect().then(console.log('Connected'))

app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


// Signup 
app.post('/signup', async (req, res) => {
  try {
    await poolConnection;

    const { name, email, username, password } = req.body;

    const existingUserQuery = `
      select * from signup
      where username = '${username}' and email = '${email}'; 
    `;
    const user = await pool.request().query(existingUserQuery);

    if (user.recordset.length > 0) {
      res.status(401).json({ error: 'User Already Exist' });
      return;
    }
    else {
      const signUpQuery = `
        insert into signup ( name, username, email, password) 
        values ( '${name}', '${username}', '${email}', '${password}' );
      `;
      await pool.request().query(signUpQuery);
      return res.status(200).json({ message: 'Signup successfull' });
    }
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message:  'Server error' });
  }
});


// Login
app.post('/login', async (req, res) => {
  try {
    await poolConnection;

    const { username, password } = req.body;

    const loginQuery = `
      select count(*) as loginUser from signup
      where username = '${username}' and password = '${password}';
    `;
    const loginResult = await pool.request().query(loginQuery);
    const user = loginResult.recordset[0].loginUser;

    if(user === 1) {
      return res.status(200).json({ message: 'Login Successfull' });
    }
    else {
      return res.status(401).json({ error: 'nvalid username or password' });
    }

  } catch (err) {
    console.log(err)
    return res.status(500).send('Error logging in');
  }
});



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
