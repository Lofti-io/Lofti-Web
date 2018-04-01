import compression from 'compression'
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'

import { STATIC_PATH } from '../shared/config'
import { isProd } from '../shared/util'
import routes from './routes/routes'

const app = express()

// Add middle-ware
app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))
// Use logger on requests
app.use(logger(isProd ? 'production' : 'dev'))
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Add app routes
app.use(routes)

export default app
