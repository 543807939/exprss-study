// 1. 引入express和path
const express = require('express')
const path = require('path')
// 2. 开启服务器
const app = express()
// 3. 挂载路由  不建议直接将路由挂在在app上,因为随着业务增长 路由会越来越多 导致文件过大 所以要路由模块化
app.get('/', (req, res) => {
    res.send('method is get')
})
app.post('/', (req, res) => {
    res.send('method is post')
})
// 4. 开启服务器
app.listen(80, function () {
    console.log('服务已开启');
})