$(function() {
  function buildHTML(message) {
    (message.image.url) ? var { insertImage = `<img src="${message.image.url}">`;
    }
    var html = `
              <div class="content-ajax" data-message-id=: "${message.id}"}>
                <div class="content__row-left">
                  <div class="content__row-left-text"">
                  ${message.name}
                  </div>
                  <div class="content__row-left-days"">
                  ${message.date}
                  </div>
                </div>
                <div class="content__row-mini">
                  <p class="content__row-mini-lower">
                  ${message.content}
                  </p>
                  ${insertImage}
                </div>
              </div>
               `;
    return html
  }

  setInterval(function() {
    $.ajax({
      url: location.href,
      type: 'GET',
      dataType: 'json'
    })
    .done(function(data) {
      console.log(123)
      var insertHTML = '';
      data.messages.forEach(function(message) {
          insertHTML += buildHTML(message);
      });
      $('.content__row').html(insertHTML);
    })
    .fail(function(){
      alert('error');
    });
  }, 5000);
});
