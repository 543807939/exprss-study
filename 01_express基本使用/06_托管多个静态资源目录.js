// 1. 引入express和path
const express = require('express')
const path = require('path')
// 2. 创建服务器
const app = express()
// 3. 托管静态资源,托管多个静态资源只需要多次调用express().use()
app.use(express.static(path.join(__dirname, './clock')))
app.use(express.static(path.join(__dirname, './songs')))
// 4. 开启服务器
app.listen(80, console.log('express service running at http://127.0.0.1'))