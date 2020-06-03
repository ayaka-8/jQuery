//課題5
(function($, window) {
  $(function() {
    $('#zip').jpostal({
        postcode : [
            '#zip',
        ],
        address : {
            '#pref'  : '%3',
            '#city'  : '%4',
            '#street'  : '%5'
        }
    });
  });
})(jQuery, window);