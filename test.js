'use strict';
var assert = require('assert');
var monthDays = require('./');

it('should get the days of a month', function () {
	assert.strictEqual(monthDays(5, 2014), 30);
	assert.strictEqual(monthDays(5), 30);
	assert(monthDays() >= 28);
	assert.strictEqual(monthDays(0, 2015), 31);
});
