// 引入express
const express = require('express')
// 引入路由模块
const router = require('./02_创建API路由模块')

// 创建服务器
const app = express()
app.use(express.urlencoded({ extended: false }))
// 注册路由
app.use('/api', router)


// 开启服务器
app.listen(80, function () {
    console.log(`express service running at http://127.0.0.1`);
})