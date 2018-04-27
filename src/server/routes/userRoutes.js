import { Router } from 'express'
import UserController from '../controllers/usersController'
import ReviewController from '../controllers/reviewsController'
import requiresUserId from '../middleware/valid'

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
routes.post('/login', requiresUserId, UserController.login)

/**
 * POST logout, logs out a user, or does nothing if no user logged in
 */
routes.post('/logout', requiresUserId, UserController.logout)

/**
 * POST review, creates a new review under the given user
 */
routes.post('/:userId/reviews', ReviewController.create)

/**
 * GET user reviews by user id.
 * Returns the Review objects given the user id.
 */
routes.get('/:userId/reviews', ReviewController.list)

export default routes
