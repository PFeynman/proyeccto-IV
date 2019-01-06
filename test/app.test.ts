import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

import app from '../src/app';

describe('Check champion API routes', () => {
  it('should return response to GET all champions request', () => {
    chai.request(app).get('/champions')
      .then(res => {
        chai.expect(res).to.have.status(200);
      })
  })
  it('should return response to POST champions request', () => {
    chai.request(app).post('/champions')
      .then(res => {
        chai.expect(res).to.have.status(200);
      })
  })
  it('should return response to GET specific champion request', () => {
    chai.request(app).get('/champion/Aatrox')
      .then(res => {
        chai.expect(res.status).to.equal(200);
      })
  })
  it('should return response to PUT champion request', () => {
    chai.request(app).put('/champion/100')
      .then(res => {
        chai.expect(res.status).to.equal(200);
      })
  })
  it('should return response to DELETE champion request', () => {
    chai.request(app).del('/champion/100')
      .then(res => {
        chai.expect(res.status).to.equal(200);
      })
  })

})

describe('Check item API routes', () => {
  it('should return response to GET all items request', () => {
    chai.request(app).get('/items')
      .then(res => {
        chai.expect(res).to.have.status(200);
      })
  })
  it('should return response to POST items request', () => {
    chai.request(app).post('/items')
      .then(res => {
        chai.expect(res).to.have.status(200);
      })
  })
  it('should return response to GET specific item request', () => {
    chai.request(app).get('/item/1001')
      .then(res => {
        chai.expect(res.status).to.equal(200);
      })
  })
  it('should return response to PUT item request', () => {
    chai.request(app).put('/item/100')
      .then(res => {
        chai.expect(res.status).to.equal(200);
      })
  })
  it('should return response to DELETE item request', () => {
    chai.request(app).del('/item/1001')
      .then(res => {
        chai.expect(res.status).to.equal(200);
      })
  })

})
