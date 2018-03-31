import { Router } from 'express'

const routes = Router()

/**
 * GET user by username.
 * Returns a User object given the username.
 */
routes.get('/:userName', (req, res) => {
  res.send(`User for username: ${req.params.userName}`)
})

/**
 * GET user reviews by username.
 * Returns the Review objects given the username.
 */
routes.get('/:userName/reviews', (req, res) => {
  res.send(`Reviews for: ${req.params.userName}`)
})

export default routes
