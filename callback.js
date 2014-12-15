// node callback.js 
// 参数
// - str = /Users/sang/specification/云计算/hadoop/hadoop-0.20.2/src/contrib/thriftfs/src/java 
// - file = file.log 
// - regexp = /hadoop/g

console.log("i am callback.js. process.argv是: " + process.argv);

var str = process.argv[2]

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