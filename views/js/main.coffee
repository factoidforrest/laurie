
requirejs.config
  paths:
    
    # Load jquery from google cdn. On fail, load local file. 
    jquery: [["//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min"], "libs/jquery-min"]

    # Load bootstrap from cdn. On fail, load local file. 
    bootstrap: [["//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min"], "libs/bootstrap-min"]
    spin: ["./libs/ladda/spin.min"]
    ladda: ["./libs/ladda/ladda.min"]
    masonry: ["https://cdnjs.cloudflare.com/ajax/libs/masonry/3.2.2/masonry.pkgd.min"]

  shim: {
    bootstrap: ["jquery"],
    "spin": {exports: "Spinner"}
    "ladda": {
      depends: "spin",
      exports: "Ladda"
    }

  }
require [
  "jquery"
  "ladda"
  "bootstrap"
  "contact"
  "tiles"
], ($, Ladda) -> 
  window.ladda = Ladda
  console.log "JS loaded"
