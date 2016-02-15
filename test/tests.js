// tests.js

var chai = require('chai'),
	assert = chai.assert;

var lib = require('../index');

describe('testing the test suite', function() {
	it('should be true', function() {
		assert.equal(true, !false, "not false should be true");
	});
	it('should not be false', function() {
		assert.notEqual(true, false, "false should not be true");
	});
});

describe('test the solver', function() {
	var solver = lib.solver();
	it('should return a function', function(){
		assert.isFunction(solver, "solver is a function");
	});
	it('should return a string when called', function(){
		assert.isString(solver(), "solver() is a string");
	});
	it('should return the correct string', function(){
		assert.equal(solver(), "solved!", "solver() is a string");
	});
});