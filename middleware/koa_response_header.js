module.exports = async (ctx,next)=>{
    ctx.set('Content-Type','application/json; charset=utf-8')
    ctx.set('Access-Control-Allow-Origin','*')
    ctx.set('Access-Control-Allow-Methods','OPTIONS,GET,POST,DELETE,PUT')
    await next()
}