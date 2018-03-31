import compression from 'compression'
import express from 'express'

import { STATIC_PATH } from '../shared/config'
import routes from './routes/routes'

const app = express()

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

// Add app routes
app.use(routes)

export default app
