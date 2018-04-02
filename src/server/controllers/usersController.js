import { User, Review } from '../models'

// Defines all possible operations on the User model
class UserController {
  // Creates a new user given userName, email and password
  static create(req, res) {
    return User
      .create({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error.toString()))
  }

  // Returns a user given a `userId`
  static get(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error.toString()))
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
      .then(users => res.status(201).send(users))
      .catch(error => res.status(401).send(error.toString()))
  }
}

export default UserController
