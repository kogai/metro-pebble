var assert = require('assert');
// var getInfo = require('../app.js');

describe( 'mochaのテスト' , function() {
	it( '1 + 1は2になること' , function() {
		assert.equal( 1 + 1 , 2 );
	});
});

// describe( '時刻表JSONデータの形式をテスト' , function(){
// 	it( '#getInfo()はJSONを返す' , function(){
// 		assert.equal( typeof getInfo('chikatetsuakatsuka') , 'object' );
// 	});
// });