const express = require('express')
const { mycon } = require('./db')

const app = express()
const port = 3000

console.log(mycon.get_name())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))