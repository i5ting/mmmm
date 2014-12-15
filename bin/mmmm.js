#!/usr/bin/env node

/**
 * Module dependencies.
 */
function isDefined(x) { return x !== null && x !== undefined; } 
Array.prototype.contain = function(obj) {
  return this.indexOf(obj) !== -1;
}

var program = require('commander');
var version = require("../package.json").version;

program
  .version(version)
	.usage(" 4m -f file.log -e '/hadoop/g' -v ")
  .option('-f, --file [file]', '可选值：file.log')
  .option('-e, --express [express]', '可选值：/ss/g ')
	.option('-c, --callback [callback]', '默认值：callback.js')
	.option('-v, --verbose', '打印详细日志')
  .parse(process.argv);

var module_name = '';
if(isDefined(program.file) == true && typeof program.file == 'string' ){
	module_name = program.file;
}else{
	console.log("没有知道模块名称，请重新输入,比如\n\t -f file.log -e '/hadoop/g' -v ");
	return;
}

var file = "nohup.out";
var callback = "callback.js";
var express = eval("/log/g");

if (program.file) {
	file = program.file;
}

if (program.express) {
	express = program.express;
	express = eval(program.express);
}

var verbose = false;
if (program.verbose) {
	verbose = program.verbose;
}

if (program.callback) {
	callback = program.callback;
}

var _verbose = verbose;
function log(str){
	if(_verbose == true){
		console.log(str);
	}
}

log('tail file = ' + file);
log('regexp express = ' + express);
log('callback file = ' + callback);
log('verbose = ' + verbose);

var search_content_express = express
	
var done = function(str,res){
	setTimeout(function(){
		require('shelljs/global');
		if (!test('-f', callback)){
			echo('Error: there is no callback.js in current dir');
			return;
		}
		try{
			var _cmd = 'node ' + callback + ' ' + str + ' '+file + ' ' + program.express;
			log('callback command = ' + _cmd);
			
			if (exec(_cmd).code !== 0) {
			  echo('Error: 4m callback failed');
			  exit(1);
			}
		}catch(e){
			console.log(e);
		}
	},0);
}
	
var verbose = true;
// main 
require('../index')(file, search_content_express, done,verbose)