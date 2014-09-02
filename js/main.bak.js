$().ready(function () {
	var CODESIZE = [];
	$('.btn').click(function() {
		$.get('https://api.github.com/repos/polandeme/python-note-demo/commits',function (data) {
			for(var i = 0; i <data.length; i++) {
				$.get(data[i].commit.tree.url, function(data) {
					for(var j = 0; j < data.tree.length; j++) {
						if(data.tree[j].mode == '100644') {
							console.log(1);
							CODESIZE.push(data.tree[j].size);
						} else {
							console.log(2);
							$.get(data.tree[j].url, function(data) {
								console.log(3);
								for(var k = 0; k < data.tree.length; k++) {
									if(data.tree[k].mode == '100644') {
										console.log('ddddd');
										CODESIZE.push(data.tree[k].size);
									}
								}
							}).done(function(){console.log(CODESIZE)});
							console.log(4);
						}
						console.log(5)
					}
					console.log(6);
				});
				console.log(7);
			}
		})
	})
})