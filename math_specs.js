// tell the spec where to find our code
var math = require('../math.js');

describe("A simple arithmetic program", function() {
	it("can add two numbers", function() {
		expect(add(3,5)).toBe(8);
	});

	it("can subtract two numbers", function() {
		expect(subtract(3,5)).toBe(8);
	});
});

