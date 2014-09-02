$().ready(function () {
	var CODESIZE = [0];
	var SIZE = 0;
	$('.btn').click(function() {

		// var dtd = $.Deferred();
		// function getSize(url, dtd) {
		// 	if(!dtd) {
		// 		dtd = $.Deferred();
		// 	}
		// 		$.get(url).done(function(data) {
		// 			for(var j = 0; j < data.tree.length; j++) {
		// 				if(data.tree[j].mode == '100644') {
		// 					SIZE += data.tree[j].size;
		// 					dtd.resolve();
		// 					return dtd;
		// 				} else {
		// 					getSize(data.tree[j].url, dtd);
		// 				}
		// 				console.log('000');
		// 			}
					
		// 		});
		// 		// dtd.notify(); 
		// 		return dtd;
		// 	}
		// var dtd = $.Deferred();
		// function getSize(dtd) {
		// 	var task = function () {
		// 		setTimeout(console.log('ddddd'), 5000);
		// 		dtd.resolve();
		// 	}
		// 	setTimeout(task, 2000);
		// 	return dtd;

		// }
		// $.when(getSize(dtd)).done(function() {
		// 	console.log('size=' +　SIZE);
		// // });
		// var dtd = $.Deferred();
		// 	function start(data) {

		// 	}
		// var def = $.Deferred();
		function getSize(url) {
			$.get(url, function(data) {
				for(var i = 0; i < data.tree.length; i++) {
					if(data.tree[i].mode == '100644') {
						SIZE += data.tree[i].size;
						// def.resolve();
						// return def.promise();
					} else {
						getSize(data.tree[i].url);
					}
					console.log(SIZE);
				}
				// console.log(SIZE);
			})
			// def.notify(); 
			// return def.promise();
		};

		// $.get('https://api.github.com/repos/polandeme/python-note-demo/commits',function (data) {

		// 	for(var i = 0; i < data.length; i++) {
		// 		$.when(getSize(data[i].commit.tree.url, dtd)).done(function() {
		// 			console.log('size=' +　SIZE);
		// 		}).done(function() {
		// 			console.log('si' + SIZE);
		// 		});
		// 	}

		// });	


		// $.when(start()).done(function(){
		// 	console.log('--------');
		// 	console.log(CODESIZE);
		// });
		var start = function () {

			if(length === dataLength) {
				clearInterval(setId);
			}
			$.get('https://api.github.com/repos/polandeme/python-note-demo/commits', function(data) {
				// for(var i = 0; i <  data.length; i++) {
					getSize(data[0].commit.tree.url);
				// }
			});
			console.log(SIZE);
		}
		start();
			
		// setTimeout(start,2000);
		// var setId = setInterval(start, 1000);
		// .done(function(data) {
		// 	console.log(data);
		// })
		// .done(function() {
		// 	console.log(SIZE);
		// });

// 宣布失败，原因使用promise 不太熟练，递归。setInterval 取消条件？。
// 过一段时间在回过头来看吧 20140903 0:48
// 下一步用爬虫爬去github上现有的图分析
// 补充基础知识，学习promise规范
		
	})
})