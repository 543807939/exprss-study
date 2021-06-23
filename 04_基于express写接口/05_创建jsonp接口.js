const express = require('express')
const cors = require('cors')
const app = express()
// 如果项目中已经配置了cors跨域资源共享,为了防止冲突,需要在配置cors中间件之前配置JSONP接口
app.get('/api/jsonp', (req, res) => {
    // 获取函数的名称
    let funName = req.query.callback
    // 定义要返回到客户端的数据对象
    let data = { name: '张三', age: 12 }
    // 拼接一个函数的调用
    let scriptStr = `${funName}(${JSON.stringify(data)})`
    // 把拼接的字符串响应给客户端
    res.send(scriptStr)
})
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.post('/user', (req, res) => {
    let body = req.body
    let query = req.query
    let data = { ...body, ...query }
    console.log(query);
    console.log(body);
    res.send({
        status: 0,
        message: '请求成功',
        data: data
    })
})

app.listen(80, function () {
    console.log(`express service running at http://127.0.0.1`);
})