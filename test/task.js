'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../app'); // Our app

describe('API endpoint /tasks', function() {
  this.timeout(5000); // How long to wait for a response (ms)

  before(function() {

  });

  after(function() {

  });

  // GET - List all cars
  it('should return all cars', () => {
    return chai.request(app).get('/tasks').then(function(res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
    });
  });

  // GET - Invalid path
  it('should return Not Found', function() {
    return chai.request(app).get('/INVALID_PATH').then((res) => {
      expect(res).to.have.status(404);
    });
  });

  // GET - List one task
  it('should return one car', () => {
    return chai.request(app).get('/tasks/' + "Electric").then(function(res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
    });
  });
});