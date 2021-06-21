// 1. 导入express和path
const express = require('express')
const path = require('path')
// 2. 创建服务器
const app = express()
// 3. 托管静态资源
app.use('/public', express.static(path.join(__dirname, '../01_express基本使用/clock')))
// 4. 监听get请求
// 路由的组成 express().METHOD(URL,HANDLER) 
// method :请求方法
// url:请求地址
// handler:回调函数
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`${req.params}        ${req.query}`)
})
// 5. 开启服务器
app.listen(80, () => {
    console.log('已启动');
})