// 1. 引入express
const express = require('express')
// 2. 导入路由模块
const userRouter = require('./03_创建路由模块')
// 3. 创建服务器 
const app = express()
// 4. 使用express().use()注册路由模块
app.use(userRouter)  // app.use()用来注册全局中间件
// 5. 启动服务器
app.listen(80, function () {
    console.log('服务已启动');
})