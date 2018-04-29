import { Sequelize, User, Review } from '../models'

// Defines all possible operations on the User model
class UserController {
  // Creates a new user given name, email and password
  static create(req, res) {
    return User
      .create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
      .then(user => res.status(201).send(user))
      // Only happens when creating a user that already has given email
      .catch(Sequelize.UniqueConstraintError, uniqError =>
        res.status(409).json({
          'message:': uniqError.errors[0].message,
          'value:': uniqError.errors[0].value,
        }))
      // Error caused by invalid email, name length, etc
      .catch(Sequelize.ValidationError, valError =>
        res.status(409).json({
          'errors:': valError.errors.map(val => ({ message: val.message, value: val.value })),
        }))
      .catch(error => res.status(400).json({ message: error.toString() }))
  }

  // Logs a user in
  static async login(req, res) {
    if (!req.body.password) {
      return res.status(400).json({ message: "'password' is a required parameter, but is missing." })
    }

    const verified = await req.user.verifyPassword(req.body.password)

    if (!verified) {
      return res.status(401).json({ message: 'Incorrect password' })
    }

    // Create authenticated session
    req.session.userId = req.user.id

    return res.status(200).json({ message: 'Logged in' })
  }

  // Logs a user out
  static logout(req, res) {
    if (req.session && req.session.userId) {
      return req.session.destroy((error) => {
        if (error) return res.status(500).json({ message: `Error: ${error.toString()}` })
        return res.status(200).json({ message: 'Logged out successfully' })
      })
    }

    return res.status(200).json({ message: 'Already logged out' })
  }

  // Returns a user given a `id`
  static get(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error.toString()))
  }

  // Deletes a user from the database
  static async delete(req, res) {
    try {
      await req.user.destroy()
      return res.status(200).json({ message: `User with id: ${req.body.userId} has been deleted` })
    } catch (error) {
      return res.status(500).json({ message: `Error: ${error.toString()}` })
    }
  }

  // Returns all the users from the database
  // TODO: Think about removing this function from production
  static list(req, res) {
    return User
      .findAll({
        include: [{
          model: Review,
          as: 'reviews',
        }],
      })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error.toString()))
  }
}

export default UserController
