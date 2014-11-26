requirejs.config({
  paths: {
    jquery: [["//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min"], "libs/jquery-min"],
    bootstrap: [["//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min"], "libs/bootstrap-min"]
  },
  shim: {
    bootstrap: ["jquery"]
  }
});

require(["jquery", "bootstrap"], function($) {
  return console.log('JS loaded');
});
