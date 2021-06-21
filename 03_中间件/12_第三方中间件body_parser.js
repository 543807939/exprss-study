// 引入所需模块
const express = require('express')
const parser = require('body-parser')

// 创建服务
const app = express()

// 使用第三方全局中间件
app.use(parser.urlencoded({extended:false}))

// 监听请求
app.post('/book',(req,res)=>{
    // res.send(req.query)
    console.log(req.body);
    res.send(req.body)
})

// 开启服务
app.listen(80,function(){
    console.log(`express service running at http://127.0.0.1`);
})