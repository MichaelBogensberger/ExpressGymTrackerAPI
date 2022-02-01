const express = require('express')
var mysql = require('mysql');
const bodyparser = require('body-parser');

const app = express()
const port = 3000

var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'gymtracker'
});

conn.connect((err)=>{
  if(!err)
  console.log("DB connection -> success");
  else
  console.log("DB connection -> failed -> Error:" + JSON.stringify(err));
});

app.use(bodyparser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



app.get('/', (req, res) => {
  conn.query('SELECT * FROM user', (err, rows, fields) => {

    if(!err) {
      console.log(rows);
    }
    else {
      console.log(err);
    }

  })
  res.send('Hello World!')
})
