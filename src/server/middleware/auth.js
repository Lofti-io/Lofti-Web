/**
 * Authentication middle-ware
 *
 * Use on a route that requires user authentication
 */

/**
 * @param {request} req - The express request object
 * @param {response} res - The express response object
 * @param {function} next - The next handler for this request
 *
 * This function will either call `next` or return a `401` error if the user
 * was not able to be authenticated, expects the `req.body.userId` or `req.params.userId`
 * to match the `req.session.userId` that was saved when the user was last logged in.
 */
function requiresLogin(req, res, next) {
  if (req.body.userId && req.session && req.session.userId) {
    if (req.body.userId === req.session.userId) return next()
  } else if (req.params.userId && req.session && req.session.userId) {
    if (req.params.userId === req.session.userId) return next()
  }

  const err = new Error('User authentication is required to access this page')
  err.status = 401
  return next(err)
}

export default requiresLogin
