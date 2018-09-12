$(function() {
  function buildHTML(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">
                    ${ user.name }
                  </p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
                </div>`
    return html;
  }
  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(data){
      for (var i = 0; i < data.length; i++) {
        datas = (data[i]);
      }
      var html = buildHTML(datas);
      $('#user-search-result').append(html)
    })
//     .fail(function(){
//       alert('error');
//     })
  });
});
