const express = require('express')
const router = express.Router()

router.get('/get', (req, res) => {
    let query = req.query
    console.log(query);
    res.send({
        status: 0,
        msg: '请求发送成功!',
        data: query
    })
})
router.post('/post', (req, res) => {
    let body = req.body
    console.log(body);
    res.send({
        status: 0,
        msg: '请求发送成功!',
        data: body
    })
})
module.exports = router