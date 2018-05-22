'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../app'); // Our app

describe('API endpoint /cars/{id}/tasks', function() {
  this.timeout(5000); // How long to wait for a response (ms)

  before(function() {

  });

  after(function() {

  });

  // GET - Invalid path
  it('should return Not Found', function() {
    return chai.request(app).get('/INVALID_PATH').then((res) => {
      expect(res).to.have.status(404);
    });
  });

  // GET - List tasks by car
  it('should return one car tasks', () => {
    return chai.request(app).get('/cars/' + 5 + '/tasks/').then(function(res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
    });
  });

  // POST - Add new car task
  it('should add new car task', () => {
    return chai.request(app).post('/cars/' + 5 + '/tasks/').send({
      'taskID': 2
    }).then(function(res) {
      expect(res).to.have.status(201);
    });
  });

  // DELETE - delete car task
  it('should delete one car', () => {
    return chai.request(app).delete('/cars/' + 5 + 'tasks' + 2).then(function(res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
    });
  });
});