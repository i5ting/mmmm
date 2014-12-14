var verbose = true;
var file = 'file.log'
var search_content_express = /hadoop/g
var done = function(str,res){
	console.log("----"+str);
	var request = require('request');
	setTimeout(function(){
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
	},0);
	
}

require('./index')(file, search_content_express, done, verbose)
