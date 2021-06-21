const express = require('express')
const app = express()

// 调用express.json()中间件
app.use(express.json())
// 调用express.urlencoded()中间件
app.use(express.urlencoded({extended:false}))
app.post('/user', (req, res) => {
    res.send(req.query)
    console.log(req.body);
})

app.listen(80, function () {
    console.log(`express service running at http://127.0.0.1`);
})