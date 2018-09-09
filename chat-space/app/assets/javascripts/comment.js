$(function(){
  function buildHTML(message){
    var html = `<p>
                  <strong>
                    <a href=/groups/${message.groups_id}/messages></a>
                    ：
                  </strong>
                  ${message.content}
                </p>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    console.log(this);
    var formData = new FormData(this);
    // for(item of formData){
    //   console.log(item);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    }
    .done(function(data){
      var html = buildHTML(data);
      $('.content__row-mini-lower').append(html)
      $('.content__footer-text-message').val('')
      var datas = $("content__row-left" + data);
      $(window).scrollTop(data.offset().top);
    })
    .fail(function(){
      alert('error');
    })
  });
});
