import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

import app from './app';

describe('Check API routes', () => {
  it('should return response on call', () => {
    return chai.request(app).get('/')
      .then(res => {
        chai.expect(res.status).to.equal(200);
      })
  })
})
