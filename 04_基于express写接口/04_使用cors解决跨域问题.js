const express = require('express')
const router = require('./02_创建API路由模块')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api', router)

app.listen(80, function () {
    console.log(`express service runnning at http://127.0.0.1`);
})