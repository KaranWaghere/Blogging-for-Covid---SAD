const chai = require('chai');
const expect = chai.expect;
const app = require('../server.js');
describe('GET /', () => {
    it('should return Hello world', done => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.deep.equal("hello world");
          done();
        });
    });
  });