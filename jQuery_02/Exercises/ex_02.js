//課題5
(function($, window) {
  $(function() {
    $('#index').find('li').each(function() {
      var length = $(this).text().length;
      $(this).append('[' + length + '文字]');
    });
  });
})(jQuery, window);

//課題4
(function($, window) {
  $(function() {
    $('#index').find('li').each(function() {
      alert($(this).text().length);
    });
  });
})(jQuery, window);

//課題3
(function($, window) {
  $(function() {
    $('#index').append('<li>メソッド</li>');
  });
})(jQuery, window);

//課題1
(function($, window) {
  $(function() {
    $('h2').remove();
  });
})(jQuery, window);
