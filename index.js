Tail = require('tail').Tail;

module.exports = function (file, search_content_express, done,verbose) {
	console.log('mmmm start...');
	
	tail = new Tail(file);

	tail.on("line", function(data) {
		var str = data;
		var res = str.match(search_content_express); //使用g选项，全局匹配   
		// console.log(res); //输出[ 'aaa', 'aaa' ] 所有匹配的字符串组成的数组
	
		if(res && res.length > 0){
			log("matched: " + str);
			done(str,res);
		}
	});

	tail.on("error", function(error) {
	  log('ERROR: ', error);
	});
	
	
	function log(t){
		if(verbose)
			console.log("[MMMM LOG]"+t);
	}
}



