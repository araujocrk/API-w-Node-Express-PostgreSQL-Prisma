const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.json('Olá mundo')
})

app.get('/user', function (req, res) {
    res.json('Olá Ryan')
})

app.listen(3000, () => {
    console.log('Rodando servidor em http://localhost:3000')
})