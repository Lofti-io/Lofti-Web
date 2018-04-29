import { User } from '../models'

/**
 * This file contains middle-ware to validate input
 */

/**
* This function will call `next()` if the userId field is present in `req.body`.
* Otherwise returns `next(400 error)
*
* @param {request} req - The express request object
* @param {response} res - The express response object
* @param {function} next - The next handler for this request
*
*
*/
function requiresUserId(req, res, next) {
  if (req.body.userId) return next()

  const err = new Error("'userId' is a required parameter, but is missing.")
  err.status = 400
  return next(err)
}

/**
 * This function will call next() if a user is found with the given id in `req.body.userId`
 * If the user is found it will be set into `req.user` property.
 * Otherwise, returns error(404) with a message
 */
async function findUserOr404(req, res, next) {
  try {
    const user = await User.findById(req.body.userId)

    if (!user) {
      const err = new Error(`No user found with id: ${req.body.userId}`)
      err.status = 404
      return next(err)
    }

    req.user = user
    return next()
  } catch (err) {
    return next(err)
  }
}

export { requiresUserId, findUserOr404 }
