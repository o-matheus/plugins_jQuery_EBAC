# Pluguins jQuery
Nesta aula estamos trabalhando com uma landing page de uma loja de veículos, vamos baixar pluguins e aprender a utiliza-los para a construção de uma galeria de imagens em formato de carrossel e do menu hamburguer, uma forma de deixar os elementos do menu mais discretos no site.

## Eventos
### Aula 1
Na aula 1 estamos começando a criar a estrutura para o menu hamburguer, começamos criando uma div logo abaixo do header com a classe "menu-hamburguer" e adicionamos três spans.

Estou adicionando no HTML e CSS somente as mudanças em relação ao código disponibilizado na aula.

#### HTML
``` HTML
 <div class="menu-hamburguer">
                <span></span>
                <span></span>
                <span></span>
            </div>
```

#### CSS
``` CSS
header > .container {
    
}

.menu-hamburguer {
    width: 32px;
}

.menu-hamburguer span {
    height: 2px;
    width: 100%;
    background-color: #fff;
    display: block;
    margin-bottom: 4px;
}
```
No CSS Escrevemos dessa forma header > .container para dizer que queremos que as instruções contidas nesse campo só vão ser aplicadas a tag filha direta, no caso a primeira classe .container
No nav é como se fosse o "neto" do header então não tem muita diferença.  
