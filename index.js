require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req,res) =>{
    res.send("this is about page")
})

app.get('/login', (req, res) => {
    res.send("this is login page ")
})

app.get('/carrers', (req, res) =>{
    res.send("<h1> welcome to carrers </h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})