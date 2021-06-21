// 引入exprss
const express = require('express')
// 创建服务器
const app = express()
// 定义中间件函数
const mw1 = function (req, res, next) {
    console.log('我是局部生效的中间件');
    next()
}
// 监听get请求,使用mw1中间件
app.get('/', mw1, (req, res) => {
    res.send('收到')
})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    res.send('收到')
})
app.listen(80, function () {
    console.log('开始服务');
})