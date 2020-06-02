(function($, window) {
  $(function() {
    $('#index').find('li').each(function() {
      alert($(this).text());
    });
  });
})(jQuery, window);
