$(function() {
  function AddBuildHTML(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">
                    ${ user.name }
                  </p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
                </div>`
    return html;
  }
  function RemoveBuildHTML(user){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                <input name='group[user_ids][]' type='hidden' value="${ user.id }">
                <p class='chat-group-user__name'>${ user.name }</p>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
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
      if (data.length !== 0) {
        data.forEach(function(data){
          datas = data
        });
      }
      var html = AddBuildHTML(datas);
      $('#user-search-result').append(html)
    })
    .fail(function(){
      alert('error');
    })
  });
  $(document).on("click", ".user-search-add", function () {
    $(".chat-group-user").empty();
    var html = RemoveBuildHTML(datas);
    $('#chat-group-users').append(html)
  });
  $(document).on("click", ".user-search-remove", function () {
    $(".chat-group-user").empty();
  });
});
