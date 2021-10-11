const express = require('express')
const app = express()
const port = 3000
const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/db', (req, res) => {
  pool.query('SELECT * from demo', (err2, res2) => {
  res.send('<html><pre>'+JSON.stringify(res2.rows[0]))
  pool.end() 
})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

