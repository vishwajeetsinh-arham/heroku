const express = require('express')
const app = express()

const port = 8080
app.get('/', (req, res) => {
    res.send('hello123w')
})


app.listen(port)