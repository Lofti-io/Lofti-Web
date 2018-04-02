import request from 'supertest'
import app from '../src/server/app'

describe("GET /",function(){
  it("should return home page",function(done){
    request(app)
    .get("/")
    .expect(200)
    .end(function(err,res){
      if (err) return done(err)
      done()
    })
  })
})
