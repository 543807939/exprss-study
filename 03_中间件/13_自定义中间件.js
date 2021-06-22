// 需求: 手动模拟一个类似于express.urlencoded的中间件,用来解析POST提交到服务器的表单数据
// 实现步骤:
//  1. 定义一个中间件
//  2. 监听req.data事件
//  3. 监听req.end事件
//  4. 使用querystring模块解析请求体数据
//  5. 将解析出来的数据对象挂在为req.body
//  6. 将自定义的中间件封装为模块
const express = require('express')
const app = express()
// 引入querystring模块
const qs = require('querystring')
const encodedURL = function (req, res, next) {
    // 监听req.data事件
    let str = ''
    req.on('data', trunk => {
        str += trunk
    })
    // 监听req.end事件
    req.on('end', () => {
        // str中存放的是完整的请求体数据
        console.log(str);
    })
    next()
}
// app.use(encodedURL)
app.use(function (req, res, next) {
    // 监听req.data事件
    let str = ''
    req.on('data', trunk => {
        str += trunk
    })
    // 监听req.end事件
    req.on('end', () => {
        // str中存放的是完整的请求体数据
        console.log(str);
        // 使用querystring模块解析请求体数据
        const body = qs.parse(str)
        console.log(body);
        req.body = body
        next()
    })

})

app.post('/user', (req, res) => {
    res.send(req.body)
    // res.send(JSON.stringify(req.query))
})

app.listen(80, function () {
    console.log(`express service running at http://127.0.0.1`);
})