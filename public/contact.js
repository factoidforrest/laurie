define(["jquery", "spin", "ladda"], function($, spin, Ladda) {
  return $("#contact-form").submit(function(e) {
    var ajaxSettings, error, l, success, url;
    e.preventDefault();
    l = Ladda.create($('#form-submit')[0]);
    l.start();
    url = "contact";
    success = function(data) {
      console.log("submitted successfully");
      console.log(data);
      $('.error-container').html(data);
      return l.stop();
    };
    error = function(xhr, error, reason) {
      console.log("the request failed because: ", error, reason);
      alert("Error connecting to server, please check your connection");
      return l.stop();
    };
    ajaxSettings = {
      type: "POST",
      url: url,
      data: $("#contact-form").serialize(),
      success: success,
      error: error
    };
    $.ajax(ajaxSettings);
    return false;
  });
});
