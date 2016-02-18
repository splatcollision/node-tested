// tests.js

var chai = require('chai'),
	assert = chai.assert;

var lib = require('../index');

describe('a mode function', function() {

    it ('should find the single most frequent value', function(){
        assert.deepEqual(lib.frequent([0,1,1,1,1,2,6,7,3,2,5,6,6,6,6,9]), [ 6 ]);
    })
    
    it ('should find the multiple most frequent value', function(){
        assert.deepEqual(lib.frequent([1,2,3]), [ 1, 2, 3 ]);
    });
    it ('should find another multiple most frequent value', function(){
        assert.deepEqual(lib.frequent([1,2,3, 44, 44, 44, 55, 55, 55]), [ 44, 55 ]);
    });
	it ('should work with different types', function(){
		assert.deepEqual(lib.frequent([1,2,3, "44", "44", "44", "55", "55", "55", 1.2345, 1.2345, 1.2345]), [ "44", "55", 1.2345 ]);
	});

})

// describe('testing the test suite', function() {
// 	it('should be true', function() {
// 		assert.equal(true, !false, "not false should be true");
// 	});
// 	it('should not be false', function() {
// 		assert.notEqual(true, false, "false should not be true");
// 	});
// });

// describe('test the solver', function() {
// 	var solver = lib.solver();
// 	it('should return a function', function(){
// 		assert.isFunction(solver, "solver is a function");
// 	});
// 	it('should return a string when called', function(){
// 		assert.isString(solver(), "solver() is a string");
// 	});
// 	it('should return the correct string', function(){
// 		assert.equal(solver(), "solved!", "solver() is a string");
// 	});
// });