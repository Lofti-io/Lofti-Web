import express from 'express'
import compression from 'compression'
import { APP_NAME, STATIC_PATH, WEB_PORT } from '../shared/config'
import { isProd } from '../shared/util'
import renderApp from './render-app'

const app = express()

app.get('/', (req, res) => {
    res.send(renderApp(APP_NAME))
})

app.listen(WEB_PORT, () => {
     // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' : '(development)'}.`)
});
