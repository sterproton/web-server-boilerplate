const Router = require('koa-router')

const index = new Router()
index.get('/', async (ctx, next) => {
    ctx.body = 'hello'
    await next()
})

module.exports = index
