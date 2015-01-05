define(["jquery"], function($, masonry) {
  var container;
  container = $('.tiles');
  console.log(container.first());
  if (container.length > 0) {
    return require(['masonry', 'libs/imagesloaded'], function(masonry, imagesLoaded) {
      return imagesLoaded(container[0], function() {
        var msnry;
        console.log('Running Masonry');
        return msnry = new masonry(container[0], {
          itemSelector: '.tile'
        });
      });
    });
  }
});
