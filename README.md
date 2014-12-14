node-4m
=============

4m for tail wrapper

[![npm version](https://badge.fury.io/js/mmmm.svg)](http://badge.fury.io/js/mmmm)

## Usage

第一步骤创建callback.js

	touch callback.js

执行`4m`命令

	4m -f file.log -e '/hadoop/g' -v
 
说明

- f 文件名称
- e 是要搜索的正则表达
- v 是否打印日志
 
 
## Example

see example.js

```
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
	
var verbose = true;
require('./index')(file, search_content_express, done,verbose)
```

then open example.html with pub/sub

more detail see [i5ting/fayeserver](https://github.com/i5ting/fayeserver)


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本 


## 欢迎fork和反馈

在issue提问或邮件shiren1118@126.com

## License

this gem is released under the [MIT License](http://www.opensource.org/licenses/MIT).
