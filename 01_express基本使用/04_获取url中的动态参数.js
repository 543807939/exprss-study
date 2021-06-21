// 1. 导入express
const express = require('express')
// 2. 创建web服务器实例
const app = express()
// 3. 监听get请求
app.get('/user/:id', (req, res) => {
    // 获取动态参数
    let params = req.params
    console.log(params);
})
// 4. 开启服务器
app.listen(80, console.log('express service running at http://127.0.0.1'))