import { Router } from 'express'

const routes = Router()

/**
 * GET user by username.
 * Returns a User object given the username.
 */
routes.get('/:userId', (req, res) => {
  res.send(`User ID: ${req.params.userId}`)
})

/**
 * GET user reviews by username.
 * Returns the Review objects given the username.
 */
routes.get('/:userId/reviews', (req, res) => {
  res.send(`Reviews for ID: ${req.params.userId}`)
})

export default routes
