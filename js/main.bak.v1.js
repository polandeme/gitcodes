$().ready(function () {
	var CODESIZE = [0];
	$('.btn').click(function() {

		var defferred = $.Deferred();
		function getSize(url) {
				$.get(url).done(function(data) {
					console.log('0909');
					for(var j = 0; j < data.tree.length; j++) {
						if(data.tree[j].mode == '100644') {
							CODESIZE.push(data.tree[j].size);
						} else {
							getSize(data.tree[j].url);
						}
					}
					defferred.resolve(data);
				})		
				return defferred;			
			}
		var dtd = $.Deferred();
		function start() {
			$.get('https://api.github.com/repos/polandeme/python-note-demo/commits',function (data) {

				for(var i = 0; i < data.length; i++) {
					getSize(data[i].commit.tree.url);
				}
				console.log(0);
				dtd.resolve(data);
			});		
			return dtd;	
		}
		$.when(start()).done(function(){
			console.log('--------');
			console.log(CODESIZE);
		});
	})
})