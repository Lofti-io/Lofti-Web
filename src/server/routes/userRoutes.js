import { Router } from 'express'
import UserController from '../controllers/usersController'

const routes = Router()

/**
 * GET users
 * Returns all the users in the DB.
 * TODO: Probably remove this function from production
 */
routes.get('/', UserController.list)

/**
 * GET user by username.
 * Returns a User object given the username.
 */
routes.get('/:userId', UserController.get)

/**
* POST user, creates a new user
*/
routes.put('/', UserController.create)

/**
 * GET user reviews by username.
 * Returns the Review objects given the username.
 */
routes.get('/:userId/reviews', (req, res) => {
  res.send(`Reviews for ID: ${req.params.userId}`)
})

export default routes
