import SecurePassword from 'secure-password'

const secPassword = new SecurePassword()

/**
 * Given a password buffer, will return an Argon2id hashed password.
 * Returns a promise object.
 *
 * @param {String} password
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

      resolve(hashedPassword.toString())
    })
  })
}

export default hash
