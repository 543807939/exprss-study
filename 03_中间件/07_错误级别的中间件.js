// 引入express
const express = require('express')
// 创建服务器
const app = express()
// 定义错误级别的中间件
const err = function (err, req, res, next) {
    res.send(`出现错误! ${err.message}`)
    // next()
}
app.use(function (err, req, res, next) {
    res.send(`出现错误! ${err.message}`)
    // next()
})
// 监听get请求
app.get('/', function (req, res) {
    throw new Error('服务器内部出现问题')
    res.send('收到')
})
// 开启服务器
app.listen(80, function () {
    console.log('服务启动');
})