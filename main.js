$(document).ready(function(){
    $('#carrossel-imagens').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })
});