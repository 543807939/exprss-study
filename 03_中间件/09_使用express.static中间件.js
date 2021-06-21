const express = require('express')
const path = require('path')
const app = express()

app.use('/public',express.static(path.join(__dirname,'../01_express基本使用/clock')))

app.listen(80,function(){
    console.log(`express service running at http://localhost`);
})