//Utility
if (typeof Object.create !== 'function') {
    Object.create = function( obj ) {
        function F(){};
        F.prototype = obj;
        return new F();
    }
}
//Plugin slider
(function( $, window, document, undefined ) {

    var Slider = {
        init: function( options, elem ) {
            var plugin = this;
            plugin.$elem = $(elem);
            plugin.options = $.extend({}, $.fn.slider.options, options);
            // console.log("slider funfando");

            //Contagem de Seletores
            var total = 0,
                current = 0,
                bannerInterval = 0,
                bullets = "",
                // containers
                container,
                items,
                direction = "next",
                isAnimated = "true";

            plugin.$elem
                .addClass("djr-slider")
                .width(plugin.options.width + "px")
                .height(plugin.options.height + "px")
                .wrap("<div class=\"djr-slider-container\"></div>")
                .find("li")
                    .addClass("djr-slider-item")

                    .each(function(index) {
                        var $this = $(this)
                        $this
                            .attr( "data-count", index );
                        if (index === current) {
                            $this
                                .addClass("djr-slider-item-selected");
                        }
                        else {
                            $this.css({"left": plugin.options.width + "px"});
                        }
                        total = index;
                        // console.log(total);
                    });
            controller();
            startInterval();
            // _buildHideButton();
            // _buildBullets();
            //add class à escolha do usuário no container :)
            function controller() {
                var button = "<div class=\"djr-slider-controller\">";

                button += "<button class=\"djr-slider-button djr-s-button-prev\" data-dir=\"prev\">";
                button += plugin.options.buttonPrevText;
                button += "</button>"
                button += "<button class=\"djr-slider-button djr-s-button-next\" data-dir=\"next\">";
                button += plugin.options.buttonNextText;
                button += "</button>";
                button += "</div>";

                plugin.$elem.parent().append(button).find(".djr-slider-button").on("click", controllerHandler);
                if(plugin.options.buttonClass) {
                    plugin.$elem.parent().find(".djr-slider-controller").addClass(plugin.options.buttonClass);
                }

            }
            function controllerHandler() {
                if(isAnimated) {
                    var buttonDirection = $(this).attr("data-dir");
                    buttonDirection === "next" ? direction = "next" : direction = "prev";
                    animate();
                }
            }

            function _buildBullets() {
                var bullets = "<ul class=\"djr-slider-bullets-container\">";
                plugin.$elem.find("li").each(function(i) {
                    bullets += "<li class=\"djr-slider-bullet\"><img src=\"images/seletor-off.png\" /></li>"
                });
                bullets += "</ul>";
                plugin.$elem.parent().append(bullets);
            }

            // wrap button
            // position wrapper
            // hover in wrapper

            function _buildHideButton() {
                plugin.$elem
                .parent()
                .find(".djr-slider-button")
                .wrap("<div class=\"djr-slider-button-wrap\"></div>")
                .parent()
                .hover(_showButton, _hideButton);
            }

            function _showButton() {
                $(this).find(".djr-slider-button").show();
            }
            function _hideButton() {
                $(this).find(".djr-slider-button").hide();
            }

            function animate() {
                var nextSlider,
                    dir,
                    loc;
                if(direction === "next") {
                    current < total ? current++ : current = 0;
                    dir = "-="
                    loc = plugin.options.width
                } else {
                    current < 0 ? current = 0 : current--;
                    dir = "+="
                    loc = -plugin.options.width
                }
                isAnimated = false;
                nextSlider = plugin.$elem.find(".djr-slider-item").eq(current);
                plugin.$elem.find(".djr-slider-item-selected").animate({"left": dir + plugin.options.width},plugin.options.animationTime).removeClass("djr-slider-item-selected");
                nextSlider.css({"left": loc}).animate({"left": dir + plugin.options.width},plugin.options.animationTime, startInterval).addClass("djr-slider-item-selected");
            }

            function startInterval() {
                isAnimated = true;
                clearInterval(bannerInterval);
                bannerInterval = setInterval(function() {
                    animate()
                }, plugin.options.time)
            }

            function resize(element) {
                var newHeight = 0;
                plugin.$elem
                    .find(element)
                        .each(function(index) {
                            var height = $(this).height();
                            // console.log(height + " of element " + index);
                            if(height > newHeight) {
                                newHeight = height;
                            }
                })
                        .end()
                    .height(newHeight);

            }

            $(window).on("load", function() {
                resize(".djr-slider-item");
            });

            // animate();
        }
    }

    $.fn.slider = function( options ) {
        return this.each(function(){
            var slider = Object.create( Slider );
            slider.init( options, this );
        });

    }
     $.fn.slider.options = {
        // vazio por enquanto
        "height": 100,
        "width": 300,
        "time": 4500,
        "animationTime": 1000,
        "buttonClass": "",
        "buttonNextText": "Next",
        "buttonPrevText": "Prev"
    }

})(jQuery, window, document);