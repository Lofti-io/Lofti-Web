import { Router } from 'express'
import UserController from '../controllers/usersController'
import ReviewController from '../controllers/reviewsController'

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
* PUT user, creates a new user
*/
routes.put('/', UserController.create)

/**
 * POST review, creates a new review under the given user
 */
routes.post('/:userId/reviews', ReviewController.create)

/**
 * GET user reviews by username.
 * Returns the Review objects given the username.
 */
routes.get('/:userId/reviews', ReviewController.list)

export default routes
