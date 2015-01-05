
define ["jquery"], ($, masonry) ->
	container = $('.tiles')
	console.log container.first()
	if container.length > 0
		require ['masonry'], (masonry) ->
			
			$( window ).load -> 
				console.log 'Running Masonry'
				msnry = new masonry container[0], 
				  itemSelector: '.tile',
				  #columnWidth: 250



