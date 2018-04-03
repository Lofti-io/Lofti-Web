import supertest from 'supertest'
import app from '../src/server/app'
import { should, expect } from 'chai'

const api = supertest(app)

describe('GET /', function() {
  it('should return home page', function(done) {
    api
      .get("/")
      .expect(200, done)
  })
})
