// 引入exprss
const express = require('express')
// 创建服务器
const app = express()
// 创建错误级别的中间件
const error = function (err, req, res, next) {
    console.log(`发生了错误: ${err.message}`);
    res.send(`${err.message}`)
    next()
}

// 监听post请求
app.post('/user', (req, res) => {
    throw new Error('服务器内部发生错误')
    res.send(JSON.stringify(req.query))
})
// 调用中间件  错误级别的中间件必须在所以路由之后
app.use(function (err, req, res, next) {
    console.log(`发生了错误: ${err.message}`);
    res.send(`${err.message}`)
    // next()
})
// 开启服务器
app.listen(80, function () {
    console.log('服务已开启');
})