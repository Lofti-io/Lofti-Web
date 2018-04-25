import SecurePassword from 'secure-password'

const secPassword = new SecurePassword()

// TODO: Remove base64 usage, due to: https://github.com/emilbayes/secure-password/issues/10

/**
 * Given a password buffer, will return an Argon2id hashed password.
 * Returns a promise object.
 *
 * @param {string} password
 *
 */
function hash(password) {
  const passwordBuffer = Buffer.from(password)

  return new Promise((resolve, reject) => {
    secPassword.hash(passwordBuffer, (error, hashedPassword) => {
      if (error) {
        // Clear buffers
        passwordBuffer.fill(0)
        hashedPassword.fill(0)
        reject(error)
      }

      resolve(hashedPassword.toString('base64'))
    })
  })
}

/**
 * ASYNC
 * Returns whether or not the password and hashed password match.
 *
 * @param {string} password
 * @param {string} hashedPassword
 */
function verify(password, hashedPassword) {
  const passwordBuffer = Buffer.from(password)
  const hashBuffer = Buffer.from(hashedPassword, 'base64')

  return new Promise((resolve, reject) => {
    secPassword.verify(passwordBuffer, hashBuffer, (error, result) => {
      hashBuffer.fill(0)

      if (error) {
        passwordBuffer.fill(0)
        reject(error)
      }

      switch (result) {
        case SecurePassword.INVALID_UNRECOGNIZED_HASH:
          passwordBuffer.fill(0)
          reject(new Error('Unrecognized hash when verifying password'))
          break
        case SecurePassword.INVALID:
          passwordBuffer.fill(0)
          resolve(false)
          break
        case SecurePassword.VALID:
          passwordBuffer.fill(0)
          resolve(true)
          break
        case SecurePassword.VALID_NEEDS_REHASH:
          // Rehash password
          secPassword.hash(passwordBuffer, (err, newHash) => {
            passwordBuffer.fill(0)

            if (err) {
              newHash.fill(0)
              reject(err)
            }

            resolve(true, newHash.toString('base64'))
          })
          break
        default:
          passwordBuffer.fill(0)
          reject(new Error('Unknown result when verifying passwords'))
          break
      }
    })
  })
}

export { hash, verify }