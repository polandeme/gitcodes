var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');

var url = 'https://github.com/polandeme';
request.get(url, function(e, res, body){
	res.setEncoding('utf-8');
	var html = body.toString();
	var $ = cheerio.load(html);
	// for(var )
	var svg = $('svg g g').eq(5).find('rect').eq(4).attr('data-count');
	svg = '\r\n' + svg + '\t';
	fs.appendFile('./data.csv', svg, 'utf8', function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log('success');
		}
	})
	console.log(svg + "\n" + 'dds');
}); 