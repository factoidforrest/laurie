
define ["jquery"], ($, masonry) ->
	container = $('.tiles')
	console.log container.first()
	if container.length > 0
		require ['masonry', 'libs/imagesloaded'], (masonry, imagesLoaded) ->
			imagesLoaded container[0], () ->
				console.log 'Running Masonry'
				msnry = new masonry container[0], 
				  itemSelector: '.tile',
				  #columnWidth: 250



