import supertest from 'supertest'
import { should, expect } from 'chai'

import app from '../src/server/app'

const api = supertest(app)

describe('GET /users', function() {
  it('should return a list of users -- 200', function(done) {
    api
      .get('/users')
      .set('Accept', 'content/application-json')
      .expect(200)
      .end(function(err, res) {
        expect(res.body.length > 0)
        done()
      })
  })
})

describe('PUT /users', function() {
  it('should create new user -- 201', function(done) {
    api
      .put("/users")
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({
        name: 'User Test',
        email: 'usertest@mail.com',
        password: 'password'
      })
      .expect(201)
      .end(function(err, res) {
        expect(res.body.name).to.equal('User Test')
        expect(res.body.email).to.equal('usertest@mail.com')
        expect(res.body.password).to.equal('password')
        done()
      })
  })
})
