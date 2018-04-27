import 'babel-polyfill'

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
        return done()
      })
  })
})

describe('PUT /users/create', function() {
  it('should create new user -- 201', function(done) {
    api
      .put('/users/create')
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({
        name: 'User Test',
        email: 'usertest@mail.com',
        password: 'password',
      })
      .expect(201)
      .end(function(err, res) {
        expect(res.body.name).to.equal('User Test')
        expect(res.body.email).to.equal('usertest@mail.com')
        return done()
      })
  })
})

// Uses test user in src/seeders/testUser1.js
describe('POST /users/login', function() {
  it('should login test user -- 200', function(done) {
    api
      .post('/users/login')
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({
        userId: 'ddeb27fb-d9a0-4624-be4d-4615062daed4',
        password: 'testpass',
      })
      .expect(200)
      .end(function(err, res) {
        expect(res.body.message).to.equal('Logged in')
        return done()
      })
  })
})

// Logs out a non-existent user, should return 200
describe('POST /users/logout', function() {
  it('should return already logged out message -- 200', function(done) {
    api
      .post('/users/logout')
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({
        userId: 'not-an-id',
      })
      .expect(200)
      .end(function(err, res) {
        expect(res.body.message).to.equal('Already logged out')
        return done()
      })
  })
})
