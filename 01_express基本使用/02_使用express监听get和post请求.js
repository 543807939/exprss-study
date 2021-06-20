// 1. 引入express
const express = require('express')
// 2. 创建web服务器
const app = express()
// 3. 监听get请求和post请求,并返回内容
app.get('/user',function(req,res){
    console.log(req);
    // 调用express提供的res.send() 向客户端响应一个json对象
    res.send({
        "name":"张三",
        "age":10,
        "gender":"男"
    })
})
app.post('/user',function(req,res){
    // 调用express提供的res.send() 向客户端响应一个json对象
    // res.send('请求成功')
    res.send({
        "method":"POST",
        "name":"张三",
        "age":10,
        "gender":"男"
    })
})
// 4. 开启服务器
app.listen(80,function(){
    console.log('express service start at http://127.0.0.1');
})
