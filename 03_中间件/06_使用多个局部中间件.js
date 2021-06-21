// 引入express
const express = require('express')
// 创建服务器
const app = express()
// 定义多个局部中间件
const mw1 = function (req, res, next) {
    console.log('第一个局部中间件被调用');
    next()
}
const mw2 = function (req, res, next) {
    console.log('第二个局部中间件被调用');
    next()
}
const mw3 = function (req, res, next) {
    console.log('第三个局部中间件被调用');
    next()
}
// 监听post请求
app.post('/user', mw1, mw2, mw3, function (req, res) {
    res.send(JSON.stringify(req.query))
})
// 开启服务器
app.listen(80, function () {
    console.log('服务开始');
})