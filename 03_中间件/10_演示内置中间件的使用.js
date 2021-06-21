const express = require('express')
const app = express()
// 除了错误级别中间件,其他中间件必须在路由之前配置
// 为了接收json格式的body,需要配置express.json()中间件
app.use(express.json())

app.post('/user', (req, res) => {
    res.send(req.query)
    console.log(req.body);
})

app.listen(80,function(){
    console.log(`express service running at http://localhost`);
})