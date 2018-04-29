import { Router } from 'express'

import UserController from '../controllers/usersController'
import ReviewController from '../controllers/reviewsController'
import { requiresUserId, findUserOr404 } from '../middleware/valid'
import requiresLogin from '../middleware/auth'

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
 * GET user reviews by user id.
 * Returns the Review objects given the user id.
 */
routes.get('/:userId/reviews', ReviewController.list)

/**
* PUT user, creates a new user
*/
routes.put('/create', UserController.create)

/**
 * POST login, logs a user in
 */
routes.post('/login', requiresUserId, findUserOr404, UserController.login)

/**
 * POST logout, logs out a user, or does nothing if no user logged in
 */
routes.post('/logout', requiresUserId, UserController.logout)

/**
 * DELETE user, deletes the user specified by the `req.body.userId` param
 */
routes.delete('/delete', requiresUserId, requiresLogin, findUserOr404, UserController.delete)

/**
 * POST review, creates a new review under the given user
 */
routes.post('/:userId/reviews', ReviewController.create)

export default routes
