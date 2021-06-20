// 1. 引入express
const express = require('express')
// 2. 创建服务器对象
const app = express()
// 3. 监听post请求和get请求
app.get('/user', (req, res) => {
    // 通过req.query对象获取查询参数
    console.log(req.query);
})
app.post('/user', (req, res) => {
    console.log(req.query);
    res.send('收到收到')
})
// 4. 开启服务器
app.listen(80, function () {
    console.log('exprss service running at http://127.0.0.1');
})