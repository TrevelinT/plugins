$.fn.rdjCarrousel = function(settings){


    //DECLARANDO DEFAULT
    var config = {
        "setas":true,
        "efeito":"horizontal",
        "automatico":true,
        "tempoTransicao":1000
    }

    //SUBSTITUINDO AS OPÇÕES DO DESENVOLVEDOR SOBRE O DEFAULT
    if (settings){$.extend(config, settings);}



    //VARIAVEIS GLOBAIS
    var este = $(this),
        tamanho_ul = 0,
        contagem = 0,
        passando = false,
        atual = 1;

    


    //criando a estrutura
    $(this).wrap("<div id=\"carrousel\"><div class=\"carrousel-container\"><div class=\"carrousel\"></div></div></div>");
    

    var container = este.parent().parent();



    

    //SE EFEITO HORIZONTAL
    if(config.efeito == "horizontal"){
        $("> li",este).each(function(){
            contagem++;
            $(this).addClass('carrousel-horizontal-li');
            $(this).attr('tamanho',$(this).width());
            $(this).attr('contagem',contagem);
            tamanho_ul += parseInt($(this).width());
        });

        este.css("width",tamanho_ul+"px");

    }

    //SE OPTOU POR SETAS

    if(config.setas == true){
        container.append("<div class=\"carrousel-controllers\"><button data-dir=\"prev\">Previous</button><button data-dir=\"next\">Next</button></div>")

        click_next = function(){
        }

        click_prev = function(){
        }
    }

}
