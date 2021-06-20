// 1. 导入express
const express = require('express')
// 2. 创建express服务器
const app = express()
// 3. 启动服务器
app.listen(80,function(){
    console.log('express serve running at http://127.0.0.1:80');
})