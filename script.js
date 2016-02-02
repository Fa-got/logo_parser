$(function(){
	var array = [];

	$.getJSON('out_goods.json', function(data){
  		console.log(data);
  		$.each(data, function(key, val) {
  			if($.inArray(val.BRAND, array) == -1)
			array.push(val.BRAND);

		});
  	})
  	.done(function() {
    	console.log(array.length)
    	console.log(array)
 	});
});


