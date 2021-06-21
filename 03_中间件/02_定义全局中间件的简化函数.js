// 引入express
const express = require('express')
// 创建服务器
const app = express()
// 定义全局生效的中间件
app.use(function (req, res, next) {
    console.log('简写的中间件');
    next()
})
// 监听get请求
app.get('/', function (req, res) {
    res.send('已读,高冷,不回')
})
// 开启服务器
app.listen(80, function () {
    console.log('服务开启');
})