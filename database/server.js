// npm run dev

const express = require('express'); // HTTP requests
const mysql = require('mysql'); // Database
const cors = require('cors'); // For web security


const app = express();

// check jsx files

app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.jsx')) {
      res.set('Content-Type', 'application/javascript');
    }
  }
}));




app.use(cors());

let defaultport = 3307;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: defaultport,
  password: 'password',
  database: 'my_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as ID ' + db.threadId);

  // Define a route for the root URL '/'
app.get('/', (req, res) => {
  // Respond with a JSON message
  return res.json("From backend side");
});

app.get('/nav', (req, res) => {
  const sql = "select * from my_db.nav"; // SQL query to select all items
  
  db.query(sql, (err, data) => { // Execute the SQL query
      if (err) return res.json(err); // If there's an error, return the error
      return res.json(data); // Otherwise, return the data as JSON
  })
});

app.get('/profile', (req, res) => {
  const sql = "select * from my_db.profile"; // SQL query to select all items
  
  db.query(sql, (err, data) => { // Execute the SQL query
      if (err) return res.json(err); // If there's an error, return the error
      return res.json(data); // Otherwise, return the data as JSON
  })
});


app.get('/about', (req, res) => {
  const sql = "select * from my_db.about"; // SQL query to select all items
  
  db.query(sql, (err, data) => { // Execute the SQL query
      if (err) return res.json(err); // If there's an error, return the error
      return res.json(data); // Otherwise, return the data as JSON
  })
});


app.get('/experience', (req, res) => {
  const sql = "select * from my_db.experience"; // SQL query to select all items
  
  db.query(sql, (err, data) => { // Execute the SQL query
      if (err) return res.json(err); // If there's an error, return the error
      return res.json(data); // Otherwise, return the data as JSON
  })
});

// Define a route to fetch all items from the 'items' table
app.get('/skillset', (req, res) => {
  const sql = "select * from my_db.skillset"; // SQL query to select all items
  db.query(sql, (err, data) => { // Execute the SQL query
      if (err) return res.json(err); // If there's an error, return the error
      return res.json(data); // Otherwise, return the data as JSON
  })
});

app.get('/projects', (req, res) => {
  const sql = "select * from my_db.projects"; // SQL query to select all items
  db.query(sql, (err, data) => { // Execute the SQL query
      if (err) return res.json(err); // If there's an error, return the error
      return res.json(data); // Otherwise, return the data as JSON
  })
});

// Start the server and listen on port 3308
app.listen(3308, () => {
  console.log("listening");
});

});