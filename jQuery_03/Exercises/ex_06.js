//課題6
(function($, window) {
  $(function() {
    $('#zip').jpostal({
        click : '#find_postcode',
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
    
