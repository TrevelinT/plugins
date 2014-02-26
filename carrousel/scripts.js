// jQuery carrousel plugin
// by Danilo Muller and Raphael Guastaferro

// Carrousel
// Funções básicas: (ou o q sabemos)

// passar através da animação da margem

// esconder as setas quando não há imagens o suficiente no Carrousel

// esconder a seta da esquerda no começo do Carrousel

// esconder a seta da direita no final do Carrousel

// variáveis: (ou o q não sabemos)

// tamanho do Carrousel

// quantas imagens serão mostradas

// quantas imagens são passadas (referencia = site do ehealth)

// quantidade de 

// css em 2 partes: (ou como não quebrar o estilo)

// estrutural (o que precisa pra ele funcionar)

// estilo (fru fru)

//Novo carrousel

(function($) {
    var container = $('.galeria-container'), //deve ser a ul
        controllers = $('.galeria-controles'), //deve ser a ul
        images = 4, //quantidade é variável. A pessoa seta.
        imageWidth = parseInt(container.width()) / images, //tamanho que as li vão ter. O estilo delas não pode ter margem. Talvez um adendo pra margem.
        containerFullWidth = (container.find('li').length) * imageWidth; // tamanho do container final. Esse container não contem overflow:hidden

    //inicialização da função
    container
        .css('width': containerFullWidth)
        .find('li')
        .css('width': imageWidth);
    //controles
    controllers.on('click', 'button', function() {
        var direction = "";
        button.data('dir') === 'next' ? direction = "-=" : direction = "+=";
        button.data('dir') === 'next' ? position++ : position--;
        container.animate({'margin-left': direction + imageWidth}, 1000, function(){
            position === 0 ?  $('.prev').addClass('.hidden') : $('.prev').removeClass('.hidden');
            // this.positioning()
        });
        // Criar função positioning pra ela checar o posicionamento e fazer as funções com base nisso
    });

})(jQuery);

//Carrousel parceiros
(function($) {
    var total = $('.parceiros-lista').find('li').length,
            pos = 0,
            controles = $('.parceiros-controles');

    $('.parceiros-lista').css('width', (total * 110) + 'px');
    $('.parceiros').addClass('js');

    controles
            .on('click', '.esquerda', function() {
        if (pos > 0) {
            pos--;
            $('.parceiros-lista').animate({'margin-left': '-' + (pos * 110) + 'px'}, 1000);
            if (pos == 0) {
                $(this).css('visibility', 'hidden');
            } else {
                $(this).css('visibility', 'visible');
            }
            if (pos == total - 8) {
                controles.find('.direita').css('visibility', 'hidden');
            } else {
                controles.find('.direita').css('visibility', 'visible');
            }
        }
    })
            .find('.esquerda')
            .css('visibility', 'hidden');

    controles.on('click', '.direita', function() {
        if (pos < total - 8) {
            pos++;
            $('.parceiros-lista').animate({'margin-left': "-" + (pos * 110) + 'px'}, 1000);
            if (pos == total - 8) {
                $(this).css('visibility', 'hidden');
            } else {
                $(this).css('visibility', 'visible');
            }
            if (pos == 0) {
                controles.find('.esquerda').css('visibility', 'hidden');
            } else {
                controles.find('.esquerda').css('visibility', 'visible');
            }
        }
    });
    if (total <= 8) {
        controles.find('.direita').css('visibility', 'hidden');
    }
})(jQuery);

//Carrousel galeria video
(function($) {
    var total = $('.galeria').find('li').length,
            pos = 0,
            controles = $('.galeria-controles-normal');

    $('.galeria')
            .find('ul')
            .css('width', (total * 80) + 'px')
            .end()
            .addClass('js');

    controles
            .on('click', '.esquerda', function() {
        if (pos > 0) {
            pos--;
            $('.galeria').find('ul').animate({'margin-left': '-' + (pos * 80) + 'px'}, 1000);
            if (pos == 0) {
                $(this).css('visibility', 'hidden');
            } else {
                $(this).css('visibility', 'visible');
            }
            if (pos == total - 8) {
                controles.find('.direita').css('visibility', 'hidden');
            } else {
                controles.find('.direita').css('visibility', 'visible');
            }
        }
    })
            .find('.esquerda')
            .css('visibility', 'hidden');

    controles.on('click', '.direita', function() {
        if (pos < total - 8) {
            pos++;
            $('.galeria').find('ul').animate({'margin-left': "-" + (pos * 80) + 'px'}, 1000);
            if (pos == total - 8) {
                $(this).css('visibility', 'hidden');
            } else {
                $(this).css('visibility', 'visible');
            }
            if (pos == 0) {
                controles.find('.esquerda').css('visibility', 'hidden');
            } else {
                controles.find('.esquerda').css('visibility', 'visible');
            }
        }
    });
    if (total <= 8) {
        controles.find('.direita').css('visibility', 'hidden');
    }
})(jQuery);