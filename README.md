# Plugins jQuery

## Tabela de conteúdos
- [Aula 1](#aula-1)
    - [HTML](#html-1)
    - [CSS](#css-1)
    - [Plugins](#plugins-1)


## Descrição Módulo 10

Nesta aula, estamos trabalhando com uma landing page de uma loja de veículos. Vamos baixar plugins e aprender a utilizá-los para a construção de uma galeria de imagens em formato de carrossel e do menu hambúrguer, uma forma de deixar os elementos do menu mais discretos no site.

## Eventos

### Aula 1

Na aula 1, estamos começando a criar a estrutura para o menu hambúrguer. Começamos criando uma `div` logo abaixo do `header` com a classe `menu-hamburguer` e adicionamos três `span`.

Estou adicionando no HTML e CSS somente as mudanças em relação ao código disponibilizado na aula.

#### HTML 1

```html
<div class="menu-hamburguer">
    <span></span>
    <span></span>
    <span></span>
</div>

<div id="carrossel-imagens">
        <img src="images/slide1.png" alt="Carro da Porsche">
        <img src="images/slide2.png" alt="SUV BMW">
        <img src="images/slide3.png" alt="Ford GT">
    </div>


```

#### CSS 1

```css
header {
    padding-top: 16px;
}

header > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
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

No CSS, escrevemos dessa forma `header > .container` para indicar que queremos que as instruções contidas nesse seletor sejam aplicadas apenas à `div` filha direta do `header`, no caso, a classe `.container`.

Já o `nav` seria como se fosse o "neto" do `header`, então essa diferença na hierarquia pode impactar o comportamento do estilo aplicado.

#### Plugins 1

[Slick Carousel](https://kenwheeler.github.io/slick/)  

No caso específico do slick ele vai mostrar como podemos importar para a o nosso projeto.  

Demo -> Mostra as possibilidades e como vai ficar no nosso projeto

Usage -> Como vamos adicionar ao nosso HTML, CSS e JS.

1. Importar a biblioteca jQuery. 

    ```HTML
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    ```

    (Na aula ele só copia o código do site puxando uma versão mais antiga, achei melhor puxar a versão mais recente, acredito que não vá ocorrer nenhum problema, já como no site diz que os requisitos mínimos é o jQuery 1.7 )


2. Importação do slick por uma CDN
     ```HTML
    <script src="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js"></script>
    ```
    (Significa que estamos puxando da internet os arquivos para do slick, assim como puxamos uma fonte do google, da mesma forma que estamos usando o jQuery, os benefícios são tempo de carregamento os perigos são dos servidores ficarem indisponíveis)

    (Da mesma forma que o jQuery pedi para puxar a versão mais recente do slick)

3. Adicionando os estilos base do slick
    ```HTML
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick-theme.css"/>
    ```

    (Torcendo para não dar nenhum erro porque to pedindo ajuda do GPT nessa parte para pegar esses comandos de puxar a versão mais recente, qualquer coisa depois mudo aqui o codigo e o README)

    (O primeiro vai adicionar o CSS base do slick, o segundo vai adicionar CSS EXTRA, como setas, dots e transições padrões)

4. Adicionando JS
    ```HTML
    <script src="main.js"></script>
    ```

    ```JS
    $(document).ready(function(){
        $('#carrossel-imagens').slick();
    });
    ```

     ```JS
    $(document).ready(function(){
        $('#carrossel-imagens').slick({
        autoplay: true
        });
    });
    ```

    (Na aula ele coloca o JS dentro do HTML direto usando a tag script, mas para ficar mais organizado estou adicionando um arquivo JS separado, acredito que não vai dar problemas.)

    (Funcionando até aqui, esse JS criou o carrossel com as 3 imagens que adicionamos via HTML)

    (Desta primeira forma fica a versão inicial do carrossel, mas é possível chamar funções pelo slick)

    (autoplay(true) -> Adiciona a passagem automática das imagens)

    (Se adicionarmos uma "," podemos colocar mais parametros em seguida.)