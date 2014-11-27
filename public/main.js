requirejs.config({
  paths: {
    jquery: [["//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min"], "libs/jquery-min"],
    bootstrap: [["//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min"], "libs/bootstrap-min"],
    spin: ["./libs/ladda/spin.min"],
    ladda: ["./libs/ladda/ladda.min"]
  },
  shim: {
    bootstrap: ["jquery"],
    "spin": {
      exports: "Spinner"
    },
    "ladda": {
      depends: "spin",
      exports: "Ladda"
    }
  }
});

require(["jquery", "ladda", "bootstrap", "contact"], function($, Ladda) {
  window.ladda = Ladda;
  return console.log("JS loaded");
});
