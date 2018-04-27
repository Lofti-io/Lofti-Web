// All user routes that require/use authentication of some sort
import supertest from 'supertest'
import session from 'supertest-session'
import { should, expect } from 'chai'

import app from '../src/server/app'

const api = supertest(app)

const testSession = session(app)
let authSession = null

// Before testing, log the user in and set authSession
// Uses the test user with id: 'ddeb27fb-d9a0-4624-be4d-4615062daed4'
before(function(done) {
  console.log('Cunnnnnt?')
  testSession
    .post('/users/login')
    .set('Accept', 'application/x-www-form-urlencoded')
    .send({
      userId: 'ddeb27fb-d9a0-4624-be4d-4615062daed4',
      password: 'testpass',
    })
    .expect(200)
    .end(function(err) {
      console.log(err)
      if (err) return done(err)
      authSession = testSession
      return done()
    })
})

// Logs out a logged-in user, should return 200 AND logout the user
describe('POST /users/logout', function() {
  it('should log out the user -- 200', function(done) {
    authSession
      .post('/users/logout')
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({
        userId: 'ddeb27fb-d9a0-4624-be4d-4615062daed4',
      })
      .expect(200)
      .end(function(err, res) {
        console.log(err, res)
        expect(res.body.message).to.equal('Logged out successfully')
        return done()
      })
  })
})
