const req = require('supertest');
const app = require('../server/httpHandler.js');

describe('Testing GET request on endpoint: mosaic', () => {

  test('send back 200 status code in headers', () => {
    return req(app).get('/mosaic')
      .then((res) => {
        expect(res.statusCode).toBe(200)
      })
  })
})