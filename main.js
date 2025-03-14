$(document).ready(function(){
    $('#carrossel-imagens').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            telefone: {
                required:true
            },
            mensagem: {
                required:false
            },
            veiculoInteresse: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
});