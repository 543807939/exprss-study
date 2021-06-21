// 1. 引入express
const express = require('express')
// 2. 调用exprss.Router()创建路由对象
const router = express.Router()
// 3. 在路由对象上挂载具体的路由
router.get('/', (req, res) => {
    res.send('hello, It\'s a get request')
})
router.post('/', (req, res) => {
    res.send('hello, It\'s a post request')
})
router.get('/username/:name', (req, res) => {
    res.send('hello, It\'s a get request  ' + req.params)
})
router.post('/user', (req, res) => {
    console.log(req.query);
    res.send('hello, It\'s a post request  ' + JSON.stringify(req.query))
})
// 4. 向外共享路由对象
module.exports = router