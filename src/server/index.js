import app from './app'
import { WEB_PORT } from '../shared/config'
import { isProd } from '../shared/util'

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' : '(development)'}.`)
})
