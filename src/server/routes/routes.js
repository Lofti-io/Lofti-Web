import { Router } from 'express'
import userRoutes from './userRoutes'

const routes = Router()

// TODO: Add actual root route
routes.get('/', (req, res) => {
  res.send('Lofti\nComing soon...')
})

// Add the '/users' routes
routes.use('/users', userRoutes)

export default routes
