// 引入express
const express = require('express')
// 创建userRouter对象
const router = express.Router()
router.get('/', (req, res) => {
    res.send('收到了你的get请求')
})
router.post('/', (req, res) => {
    res.send('收到了你的post请求')
})

module.exports = router