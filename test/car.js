'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../app'); // Our app

describe('API endpoint /cars', function() {
  this.timeout(5000); // How long to wait for a response (ms)

  before(function() {

  });

  after(function() {

  });

  // GET - List all cars
  it('should return all cars', () => {
    return chai.request(app).get('/cars').then(function(res) {
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

  // GET - List one cars
  it('should return one car', () => {
    return chai.request(app).get('/cars/' + 5).then(function(res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
    });
  });

  // POST - Add new car
  it('should add new car', () => {
    return chai.request(app).post('/cars').send({
      'make': 'XXX',
      'model': 'Model 3',
      'year': 2018,
      'type': 'Electric',
      'mileage': 2,
      'tasks': 'hi',
    }).then(function(res) {
      expect(res).to.have.status(201);
    });
  });

  // POST - Bad Request
  it('should return bad request', () => {
    return chai.request(app).post('/cars').send({
      'test': 'wrong'
    }).then(function(res) {
      expect(res).to.have.status(201);
    });
  });

  // PUT - update car
  it('should update car', () => {
    return chai.request(app).post('/cars').send({
      'make': 'XXX',
      'model': 'Model 3',
      'year': 2018,
      'type': 'Electric',
      'mileage': 2,
      'tasks': 'hi',
    }).then( () => {
      chai.request(app).put('/cars' + 5).send({
        'make': 'XXX',
        'model': 'Model 3',
        'year': 2018,
        'type': 'Electric',
        'mileage': 2,
        'tasks': 'hi',
      }).then(function(res) {
        expect(res).to.have.status(201);
      });
    });
  });

  // DELETE - delete car
  it('should delete one car', () => {
    return chai.request(app).delete('/cars/' + 5).then(function(res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
    });
  });
});