$(function(){
  function buildHTML(message){
    var html = `<div class="content__row-left">
                 <div class="content__row-left-text">
                   ${ message.user_name }
                 </div>
                 <div class="content__row-left-days">
                 ${ message.created_at }
                 </div>
               </div>
               <div class="content__row-mini">
                 <p class="content__row-mini-lower">
                 ${ message.content }
                 </p>
               </div>`
    return html;
  }
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    console.log(this);
    var formData = new FormData(this);
    console.log(formData)
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.content__row').append(html)
      $('.content__footer-text-message').val('')
      // $("html,body").animate({scrollTop:$('#header').offset().top});
    })
    .fail(function(){
      alert('error');
    });
  });
});
