// 引入express
const express = require('express')
// 创建服务器
const app = express()
// 创建多个全局中间件
app.use(function (req, res, next) {
    console.log('第一个全局中间件执行');
    next()
})
app.use(function (req, res, next) {
    console.log('第二个全局中间件执行');
    next()
})
app.use(function (req, res, next) {
    console.log('第三个全局中间件执行');
    next()
})
app.use(function (req, res, next) {
    console.log('第四个全局中间件执行');
    next()
})
// 监听get请求
app.get('/', (req, res) => {
    res.send('已读')
})
// 开启服务器
app.listen(80, function () {
    console.log('服务开始');
})