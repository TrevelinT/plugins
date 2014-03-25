//Criar função para navegadores antigos.
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}
(function($, document, window, undefined){
	var ImageResizer = {
		init: function(elem, options){
			base = this;
			base.elem = elem;
			base.$elem = $(elem);
			base.options = $.extend({}, $.fn.djrImageResizer.options, options);

			ImageResizer._build();
		},
		_build: function(){
			base.$elem
				.wrap("<div class=\"djr-resizer-container\"></div>")
				.addClass("djr-resizer-element")
				.addClass("djr-resizer-square")
				.parent()
				.css({
					"width": base.options.width,
					"height": base.options.height
				});
			ImageResizer.resize();
		},
		resize: function(){
			var elemWidth = parseInt(base.$elem.width()),
				elemHeight = parseInt(base.$elem.height())
				containerWidth = parseInt(base.$elem.parent().width()),
				result = Math.abs((containerWidth - elemWidth)/2);
			base.$elem.css({"left": result});
		},
		_resizeCalc: function(){
		},
		// Não sei se precisa usar o handler dessa forma
		_resizeHandler: function(){
			if(width === height) {
				base.$elem.addClass("djr-resizer-square");
			} else {
				base.$elem.addClass("djr-resizer-rectangle");
			}
		}
	}
	$.fn.djrImageResizer = function(options){
		return this.each(function(){
			var imageResizer = Object.create(ImageResizer);
			imageResizer.init(this, options);
		});
	};
	$.fn.djrImageResizer.options = {
		width: "60",
		height: "60"
	};
})(jQuery, document, window);
