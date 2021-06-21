// 引入express
const express = require('express')
const router = require('./userRouter')
// 创建服务器
const app = express()
// 创建一个全局中间件,来获取请求时间
app.use(function (req, res, next) {
    const time = new Date()
    console.log(time);
    next()
})
app.use(router)
// 开启服务器
app.listen(80, function () {
    console.log('服务开启');
})
