import request from 'supertest'

import app from '../src/server/app'

describe('GET /', () => {
  it('should render properly', async () => {
    await request(app).get('/').expect(200)
  })
})
