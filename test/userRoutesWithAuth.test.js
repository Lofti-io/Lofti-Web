// All user routes that require/use authentication of some sort
import supertest from 'supertest'
import session from 'supertest-session'
import { should, expect } from 'chai'

import app from '../src/server/app'
import { TEST_USER_ID } from '../src/shared/constants'

const api = supertest(app)

const testSession = session(app)
let authSession = null

// Before testing, log the user in and set authSession
beforeEach(function(done) {
  testSession
    .post('/users/login')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({
      userId: TEST_USER_ID,
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
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        userId: TEST_USER_ID,
      })
      .expect(200)
      .end(function(err, res) {
        expect(res.body.message).to.equal('Logged out successfully')
        return done()
      })
  })
})

describe('DELETE /users/delete', function () {
  it('should delete the test user -- 200', function(done) {
    authSession
      .delete('/users/delete')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        userId: TEST_USER_ID,
      })
      .expect(200)
      .end(function (err, res) {
        expect(res.body.message).to.equal(`User with id: ${TEST_USER_ID} has been deleted`)
        return done()
      })
  })
})
