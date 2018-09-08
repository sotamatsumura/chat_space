$(function(){
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    console.log("success");
    var formData = new FormData(this);
    for(item of formData){
      console.log(item);
    }
  });
});
