const fileUtils = require('../utils/file_utils')
const path = require('path')
const WebSocket = require('ws')
const wss = new WebSocket.Server({
    port:9998
})
//服务器开启监听
module.exports.listen = ()=>{
    // 对客户端的连接事件进行监听
    wss.on('connection',client =>{
        // client：代表的是客户端的连接socket对象
        // console.log('客户端连接...'+client)
        // 对客户端的连接对象进行message事件的监听
        // msg: 由客户端往服务器发送的数据
        client.on('message',async msg=>{
            let payload = JSON.parse(msg)
            console.log(payload)
            if (payload.action === 'getData') {
                let filePath = '../data/' + payload.chartName + '.json'
                filePath = path.join(__dirname,filePath)
                const ret = await fileUtils.getFileJsonData(filePath)
                payload.data = ret
                client.send(JSON.stringify(payload))
            } else {
                wss.clients.forEach(client=>{
                    client.send(msg)
                })
            }
        })
    })
}
