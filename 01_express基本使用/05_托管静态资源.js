// 1. 引入express和path
const express = require('express')
const path = require('path')
// 2. 创建服务器
const app = express()
// 3. 托管静态资源
app.use(express.static(path.join(__dirname, './songs')))
// 4. 开启服务器
app.listen(80, function () {
    console.log(`express service running at http://localhost`);
})