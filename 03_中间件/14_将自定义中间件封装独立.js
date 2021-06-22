const express = require('express')
const encodedURL = require('./encodedURL')
const app = express()

app.use(encodedURL)

app.post('/user', function (req, res) {
    console.log(1111111);
    res.send(req.body)
})


app.listen(80, function () {
    console.log(`express service runnning at http://127.0.0.1`);
})