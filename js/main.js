$().ready(function () {
	var CODESIZE = [];
	$('.btn').click(function() {

		function getSize(url) {
				$.get(url).done(function(data) {
					for(var j = 0; j < data.tree.length; j++) {
						if(data.tree[j].mode == '100644') {
							console.log('j=' + j);
							CODESIZE.push(data.tree[j].size);
						} else {
							console.log('----');
							getSize(data.tree[j].url);
						}
					}
				})					
			}
		var dtd = $.Deferred();
		function start() {
			$.get('https://api.github.com/repos/polandeme/python-note-demo/commits',function (data) {

				for(var i = 0; i < data.length; i++) {
					getSize(data[i].commit.tree.url);
				}
				
			}).done(function(){dtd.resolve();});		
			return dtd;	
		}
		$.when(start()).done(function(){
			console.log(CODESIZE);
		});
	})
})