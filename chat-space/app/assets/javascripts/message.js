$(function() {
  setInterval(function() {
  $.ajax({
    url: location.href.json,
  })
  .done(function(data) {
  })
  .fail(function(data) {
  });
} else {
  clearInterval(interval);
 } , 5000 );
});
