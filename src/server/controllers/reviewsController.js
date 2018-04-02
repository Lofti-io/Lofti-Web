import { User, Review } from '../models'

class ReviewController {
  // Creates a todo from the given request
  static create(req, res) {
    return Review
      .create({
        userId: req.params.userId,
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
      })
      .then(review => res.status(201).send(review))
      .catch(error => res.status(401).send(error.toString()))
  }

  // Returns a list of reviews for a specific user
  static list(req, res) {
    return User
      .findById(req.params.userId, {
        include: [{
          model: Review,
          as: 'reviews',
        }],
      })
      .then(user => res.status(201).send(user.reviews))
      .catch(error => res.status(401).send(error.toString()))
  }
}

export default ReviewController
