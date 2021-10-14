const express = require('express')
const app = express()
const port = 3000
const { Client } = require('pg')
process.env.PGUSER='postgres';
process.env.PGHOST='localhost';
process.env.PGPORT=5432;
process.env.PGPASSWORD='postgres';
process.env.PGDATABASE='postgres';

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/db', (req, res) => {
 const client = new Client()
  client.connect( (err2, res2)=>{
	  client.query('SELECT * from demo', (err3, res3) => {
	  res.send('<html>'+new Date()+'<pre>'+JSON.stringify(res3.rows[0]))
  });
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

