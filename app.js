const Koa = require('koa')
const app = new Koa()

const resDurationMiddleware = require('./middleware/koa_response_duration')
const resHeaderMiddleware = require('./middleware/koa_response_header')
const resDataMiddleware = require('./middleware/koa_response_data')

app.use(resDurationMiddleware)
app.use(resHeaderMiddleware)
app.use(resDataMiddleware)

app.listen(8888)

const webSocketService = require('./service/web_socket_service')
webSocketService.listen()
