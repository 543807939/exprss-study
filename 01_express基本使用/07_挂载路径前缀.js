// 1. 引入express和path
const express = require('express')
const path = require('path')
// 2. 创建服务器
const app = express()
// 3. 托管静态资源  express().use(path,express.static(path))  访问的时候必须添加path前缀
app.use('/public', express.static(path.join(__dirname, './clock')))
// 4. 开启服务器
app.listen(80, console.log('exprss service running at http://127.0.0.1'))