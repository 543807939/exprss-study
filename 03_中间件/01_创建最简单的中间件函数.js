// 导入express
const express = require('express')
// 创建服务器
const app = express()
// 定义中间件
const mw = function (req, res, next) {
    console.log('这是最简单的中间件函数');
    // 把流转关系转交给下一个中间件或路由
    next()
}
// 将mw注册为全局生效的中间件
app.use(mw)
// 定义路由
app.get('/', function (req, res) {
    res.send('get请求')
})
// 开启服务器
app.listen(80, function () {
    console.log('http://127.0.0.1');
})