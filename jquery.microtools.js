/*
 * jQuery Microtools - (c) Matthias Lienau
 * License: [The MIT License](http://opensource.org/licenses/MIT)
 * github.com/atufkas
 * www.mlienau.de
 */
(function($) {
  
  function isOverflown(e,axis) {
    var ox = e.scrollWidth > e.clientWidth + 20;
    var oy = e.scrollHeight > e.clientHeight;
    
    switch(axis) {
      case 'x':
        return ox;
      case 'y':
        return oy;
      default:
        return ox||oy;
    }
  }
  
  var pseudos = {
		'mt-overflow': function(elm) {
			return isOverflown(elm);
		},
		
		'mt-overflow-x': function(elm) {
			return isOverflown(elm,'x');
		},
		
		'mt-overflow-y': function(elm) {
			return isOverflown(elm,'y');
		}
	};
	
	$.extend($.expr[':'], pseudos);
  
})(jQuery);