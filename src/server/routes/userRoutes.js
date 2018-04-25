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
 * GET user by user id.
 * Returns a User object given the user id.
 */
routes.get('/:userId', UserController.get)

/**
* PUT user, creates a new user
*/
routes.put('/create', UserController.create)

/**
 * POST login, logs a user in
 */
routes.post('/login', UserController.login)

/**
 * POST review, creates a new review under the given user
 */
routes.post('/:id/reviews', ReviewController.create)

/**
 * GET user reviews by user id.
 * Returns the Review objects given the user id.
 */
routes.get('/:id/reviews', ReviewController.list)

export default routes
