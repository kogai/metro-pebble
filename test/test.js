var assert = require('assert');
var getInfo = require('../src/js/app.js');

describe( 'mochaのテスト' , function() {
	it( '1 + 1は2になること' , function() {
		assert.equal( 1 + 1 , 2 );
	});
});