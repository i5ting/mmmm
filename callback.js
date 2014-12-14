console.log("i am callback.js. process.argv是: " + process.argv);

var request = require('request');

request.post({
	url:'http://at35.com:4567/pub', 
	form: {
		key:'foo',
		value:'' + str
	}
}, function(err,httpResponse,body){ 
	/* ... */ 
	if(err)
		console.log(err);
})	