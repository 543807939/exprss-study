// 1. 引入express
const express = require('express')
// 2. 引入路由模块
const userRouter = require('./03_创建路由模块')
// 3. 创建服务器
const app = express()
// 4. 挂载路由模块,并添加访问前缀
app.use('/api', userRouter)
// 4. 开启服务器
app.listen(80, function () {
    console.log('exprss service running at http://127.0.0.1');
})