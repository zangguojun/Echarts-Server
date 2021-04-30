const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async (ctx, next) => {
    let filePath = '../data' +
        ctx.request.url.replace('/api', '') + '.json'
    filePath = path.join(__dirname, filePath)
    console.log(filePath)
    const ret = await fileUtils.getFileJsonData(filePath)
    ctx.response.body = ret
    try {

    } catch (error) {
        const errorMsg = {
            message: '文件不存在',
            status: 404
        }
        ctx.response.body = JSON.stringify(errorMsg)
    }

    await next()
}