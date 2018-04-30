const Koa = require('koa')
const registerRouter = require('./router')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const routeConfig = require('./config/routeConfig')
const { setTime } = require('./utils/optionalUtils')
const cors = require('@koa/cors')


const app = new Koa()

app.use(logger())

app.use(setTime())

app.use(cors({
    credentials: true,
    allowHeaders: [
        'Content-Type',
        'Authorization',
    ],
}))

app.use(bodyParser())

app.use(registerRouter(routeConfig))

app.listen(3000, '127.0.0.1', null, () => {
    console.log('Server running in localhost port 3000')
})
