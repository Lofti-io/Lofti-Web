/**
 * This file contains middle-ware to validate input
 */

/**
* @param {request} req - The express request object
* @param {response} res - The express response object
* @param {function} next - The next handler for this request
*
* This function will call `next()` if the userId field is present in `req.body`.
* Otherwise returns `next(400 error)`
*/
function requiresUserId(req, res, next) {
  if (req.body.userId) return next()

  const err = new Error("'userId' is a required parameter, but is missing.")
  err.status = 400
  return next(err)
}

export default requiresUserId
