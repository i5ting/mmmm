var file = 'file.log'
var search_content_express = /hadoop/g
var done = function(str,res){
	console.log("----"+str);
}
	
var verbose = true;
require('./index')(file, search_content_express, done,verbose)