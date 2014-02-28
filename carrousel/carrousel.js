$.fn.rdjCarrousel = function(settings){


    //DECLARANDO DEFAULT
    var config = {
        "setas":true,
        "efeito":"horizontal",
        "automatico":true,
        "transition":1000,
        "width":1024,
        "height":768,
        "esconderSetas":false
    }

    //SUBSTITUINDO AS OPÇÕES DO DESENVOLVEDOR SOBRE O DEFAULT
    if (settings){$.extend(config, settings);}



    //VARIAVEIS GLOBAIS
    var este = $(this),
        tamanho_ul = 0,
        contagem = 0,
        passando = false,
        atual_prev = 0,
        atual_next = 1,
        emTransicao = false,
        object = {};


    //criando a estrutura
    este.addClass("ul-carrousel");
    este.wrap("<div id=\"carrousel\"><div class=\"carrousel-container\"><div class=\"carrousel\"></div></div></div>");
    

    var carousel = este.parent();
    var container = este.parent().parent();
    este.css("left",0);



    

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
        carousel.width(config.width);
    }

    //SE EFEITO VERTICAL
    if(config.efeito == "vertical"){
        $("> li",este).each(function(){       
            contagem++;
            $(this).addClass('carrousel-vertical-li');
            $(this).attr('tamanho',$(this).height());
            $(this).attr('contagem',contagem);
            tamanho_ul += parseInt($(this).height());

        });

        este.css("height",tamanho_ul+"px");
        carousel.height(config.height);
    }


    //SE OPTOU POR SETAS

    if(config.efeito == "vertical" && config.setas == true){
        container.prepend("<div class=\"carrousel-controllers\"><button data-dir=\"prev\">Previous</button><button data-dir=\"next\">Next</button></div>");


         object.next = function(){
             if(emTransicao == false){
                emTransicao = true;
                top_atual = este.css('top').replace("px","");
                if(top_atual == "auto"){
                    top_atual = 0;
                }
                if((+tamanho_ul + +top_atual) > config.height){
                    passar = $("li[contagem="+atual_next+"]",este).attr('tamanho');
                    atual_prev++;
                    atual_next++;
                    
                    este.animate({
                        top: +top_atual - passar + "px"
                    },config.transition, "swing", function(){
                    emTransicao = false;
                });
                    $(".carrousel-controllers > button[data-dir='prev']",container).show();
                    if((+tamanho_ul + (+top_atual - passar)) <= config.height) {
                       $(".carrousel-controllers > button[data-dir='next']",container).hide(); 
                    }
                }else{
                     emTransicao = false;
                }
            }
        }

         object.prev = function(){
              if(emTransicao == false){
                emTransicao = true;
                top_atual = este.css('top').replace("px","");
                if(top_atual == "auto"){
                    top_atual = 0;
                }
                if((+top_atual) < 0) {
                    passar = $("li[contagem="+atual_prev+"]",este).attr('tamanho'); //pega o atributo de tamanho da LI atual
                    atual_prev--;
                    atual_next--;
                    // alert(+top_atual);
                    // alert(passar);
                    este.animate({
                        top: +top_atual + +passar + "px"
                    },config.transition, "swing", function(){
                        emTransicao = false;
                    });
                    $(".carrousel-controllers > button[data-dir='next']",container).show();
                    if((+top_atual + +passar) >= 0) {
                       $(".carrousel-controllers > button[data-dir='prev']",container).hide(); 
                    }
                }else{
                     emTransicao = false;
                }
            }
        }



        //ESCONDENDO SETAS (colocar if se é para esconder as setas. Padrão é false)
        $(".carrousel-controllers > button[data-dir='prev']",container).hide();

        $(".carrousel-controllers > button[data-dir='next']",container).click(function(){
            object.next();
        }); 

        $(".carrousel-controllers > button[data-dir='prev']",container).click(function(){
             object.prev();
        });
    }

    //SE OPTOU POR SETAS

    if(config.efeito == "horizontal" && config.setas == true){

        object.next = function(){
             if(emTransicao == false){
                emTransicao = true;
                left_atual = este.css('left').replace("px","");
                if(left_atual == "auto"){
                    left_atual = 0;
                }
                if((+tamanho_ul + +left_atual) > config.width){
                    passar = $("li[contagem="+atual_next+"]",este).attr('tamanho');
                    atual_prev++;
                    atual_next++;
                    
                    este.animate({
                        left: +left_atual - passar + "px"
                    },function(){
                    emTransicao = false;
                });
                    $(".carrousel-controllers > button[data-dir='prev']",container).show();
                    if((+tamanho_ul + (+left_atual - passar)) <= config.width) {
                       $(".carrousel-controllers > button[data-dir='next']",container).hide(); 
                    }
                }else{
                     emTransicao = false;
                }
            }
        }

         object.prev = function(){
              if(emTransicao == false){
                emTransicao = true;
                left_atual = este.css('left').replace("px","");
                if(left_atual == "auto"){
                    left_atual = 0;
                }
                if((+left_atual) < 0) {
                    passar = $("li[contagem="+atual_prev+"]",este).attr('tamanho'); //pega o atributo de tamanho da LI atual
                    atual_prev--;
                    atual_next--;
                    // alert(+left_atual);
                    // alert(passar);
                    este.animate({
                        left: +left_atual + +passar + "px"
                    },function(){
                        emTransicao = false;
                    });
                    $(".carrousel-controllers > button[data-dir='next']",container).show();
                    if((+left_atual + +passar) >= 0) {
                       $(".carrousel-controllers > button[data-dir='prev']",container).hide(); 
                    }
                }else{
                     emTransicao = false;
                }
            }
        }

        container.append("<div class=\"carrousel-controllers\"><button data-dir=\"prev\">Previous</button><button data-dir=\"next\">Next</button></div>")

         //ESCONDENDO SETAS (colocar if se é para esconder as setas. Padrão é false)
        $(".carrousel-controllers > button[data-dir='prev']",container).hide();

        $(".carrousel-controllers > button[data-dir='next']",container).click(function(){
            object.next();
        }); 

        $(".carrousel-controllers > button[data-dir='prev']",container).click(function(){
             object.prev();
        });

        
    }

    object.position = function(){
       return atual_next;
    }


    return object;
}
