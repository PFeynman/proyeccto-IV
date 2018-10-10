import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

import app from '../src/app';

describe('Check champion API routes', () => {
  it('should return response to GET all champions request', () => {
    return chai.request(app).get('/champions')
      .then(res => {
        chai.expect(res).to.have.status(200);
      })
  })
  it('should return response to POST champions request', () => {
    return chai.request(app).post('/champions')
      .then(res => {
        chai.expect(res).to.have.status(200);
      })
  })
  it('should return response to GET specific champion request', () => {
    return chai.request(app).get('/champion/100')
      .then(res => {
        chai.expect(res.status).to.equal(200);
      })
  })
  it('should return response to PUT champion request', () => {
    return chai.request(app).put('/champion/100')
      .then(res => {
        chai.expect(res.status).to.equal(200);
      })
  })
  it('should return response to DELETE champion request', () => {
    return chai.request(app).del('/champion/100')
      .then(res => {
        chai.expect(res.status).to.equal(200);
      })
  })

})

describe('Check item API routes', () => {
  it('should return response to GET all items request', () => {
    return chai.request(app).get('/items')
      .then(res => {
        chai.expect(res).to.have.status(200);
      })
  })
  it('should return response to POST items request', () => {
    return chai.request(app).post('/items')
      .then(res => {
        chai.expect(res).to.have.status(200);
      })
  })
  it('should return response to GET specific item request', () => {
    return chai.request(app).get('/item/100')
      .then(res => {
        chai.expect(res.status).to.equal(200);
      })
  })
  it('should return response to PUT item request', () => {
    return chai.request(app).put('/item/100')
      .then(res => {
        chai.expect(res.status).to.equal(200);
      })
  })
  it('should return response to DELETE item request', () => {
    return chai.request(app).del('/item/100')
      .then(res => {
        chai.expect(res.status).to.equal(200);
      })
  })

})
