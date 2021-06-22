// 引入querystring模块
const qs = require('querystring')
module.exports = function (req, res, next) {
    // 监听req.data事件
    let str = ''
    req.on('data', trunk => {
        str += trunk
    })
    // 监听req.end事件
    req.on('end', () => {
        // str中存放的是完整的请求体数据
        // console.log(str);
        // 使用querystring模块解析请求体数据
        const body = qs.parse(str)
        // console.log(body);
        req.body = body
        next()
    })

}