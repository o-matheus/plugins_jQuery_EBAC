# Plugins jQuery

## Tabela de conteúdos
- [Aula 1](#aula-1)
    - [HTML](#html-1)
    - [CSS](#css-1)
    - [Plugins](#plugins-1)
- [Aula 2](#aula-2)
    - [HTML](#html-2)
    - [CSS](#css-2)
    - [JS](#js-2)
- [Aula 3](#aula-3)
    - [HTML](#html-3)
    - [CSS](#css-3)
- [Aula 4](#aula-4)
    - [Plugins](#plugins-4)
- [Considerações Finais](#considerações-finais)

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

No caso específico do Slick, ele mostra como podemos importá-lo para o nosso projeto.

- **Demo** → Mostra as possibilidades e como vai ficar no nosso projeto.
- **Usage** → Explica como adicionar ao nosso HTML, CSS e JS.

##### 1. Importar a biblioteca jQuery
```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```
- Na aula, ele apenas copia o código do site puxando uma versão mais antiga. Preferi utilizar a versão mais recente, pois no site informa que os requisitos mínimos são o jQuery 1.7.

##### 2. Importação do Slick por uma CDN
```html
<script src="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js"></script>
```
- Significa que estamos puxando os arquivos do Slick diretamente da internet, assim como fazemos com uma fonte do Google ou o próprio jQuery.
- Os benefícios são o tempo de carregamento reduzido; os riscos incluem a possibilidade de os servidores ficarem indisponíveis.
- Assim como no jQuery, optei por puxar a versão mais recente do Slick.

##### 3. Adicionando os estilos base do Slick
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick-theme.css"/>
```
- O primeiro arquivo adiciona o CSS base do Slick.
- O segundo arquivo adiciona estilos extras, como setas, dots e transições padrão.

##### 4. Adicionando JS
```html
<script src="main.js"></script>
```
```js
$(document).ready(function(){
    $('#carrossel-imagens').slick();
});
```
```js
$(document).ready(function(){
    $('#carrossel-imagens').slick({
        autoplay: true
    });
});
```

###### 4.1 Organização do código
- Na aula, o JS é colocado diretamente dentro do HTML usando a tag `<script>`, mas, para manter a organização, preferi adicionar um arquivo JS separado. Acredito que isso não causará problemas.

###### 4.2 Funcionamento
- Até aqui, o JS criou o carrossel com as três imagens que adicionamos via HTML.
- Essa primeira configuração mantém a versão básica do carrossel, mas podemos personalizá-lo com funções do Slick.

###### 4.3 Personalização
- `autoplay: true` → Adiciona a transição automática das imagens.
- Podemos adicionar mais parâmetros separando-os por vírgula `,`.

### Aula 2
O menu hambúrguer ainda não foi aplicado. A construção do código na última aula gerou uma barra de rolagem na página, e aparentemente iremos removê-la.

#### HTML 2
```html
<section id="sobre-a-loja">
    <div class="container container-flex">
        <img src="images/loja.jpg" alt="Imagem de um estacionamento da loja EBAC Motors">
        <div>
            <h2>Sobre a EBAC Motors</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugiat, natus amet voluptatum, dignissimos quod illo deserunt iste explicabo aperiam veniam a vitae. Eligendi nulla ducimus, sint veniam provident nobis?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore consequuntur impedit temporibus, et aliquid magnam unde in asperiores nulla, officiis adipisci? Hic labore iste eligendi animi culpa, facilis aspernatur nam!</p>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <h2>Em destaque</h2>
        <ul class="container-flex lista-veiculos">
            <li>
                <img src="images/carro-bmw.png" alt="">
                <h3>Carro BMW</h3>
                <p>Câmbio automático, 4 portas, vidros e travas elétricas</p>
                <div class="price">
                    <strong>R$ 75.000,00</strong>
                </div>
                <button type="button">Tenho interesse</button>
            </li>
        </ul>
    </div>
</section>

<section>
    <div class="container">
        <h2>Promoções</h2>
        <ul class="container-flex lista-veiculos">
            <li>
                <img src="images/carro-bmw.png" alt="">
                <h3>Carro BMW</h3>
                <p>Câmbio automático, 4 portas, vidros e travas elétricas</p>
                <div class="price">
                    <del>R$ 100.000,00</del>
                    <strong>R$ 75.000,00</strong>
                </div>
                <button type="button">Tenho interesse</button>
            </li>
        </ul>
    </div>
</section>
```
`del` -> Deixa o texto riscado, geralmente usado para indicar preços antigos ou valores removidos.
`strong` -> Deixa o texto em negrito.
`ctrl + d` -> Permite a alteração de múltiplos elementos no VS Code ao mesmo tempo.

#### CSS 2
```css
html {
    overflow-x: hidden;
}
```

`overflow-x: hidden` -> Oculta qualquer conteúdo que ultrapasse o tamanho da tela no eixo horizontal.

#### JS 2
```js
$('.menu-hamburguer').click(function(){
    $('nav').slideToggle();
});
```
`slideToggle()` -> Faz o elemento aparecer ou desaparecer com um efeito deslizante, dependendo do estado atual do `nav`. 

### Aula 3
Fizemos o formulário, rodapé e alteramos o CSS para que o cabeçalho ficasse fixo no topo.

#### HTML 3
```html
<form>
    <div class="form-campo">
        <label for="nome">Nome:</label>
        <input type="text" id="nome">
    </div>
</form>

<footer>
    <div class="container container-flex">
        2025 &copy; EBAC Motors - Todos os direitos reservados.
    </div>
</footer>
```
`&copy;` -> Adiciona o símbolo de copyright.
`label` -> Adiciona um rótulo ao campo de entrada e, se estiver associado ao `input`, direciona o foco para o campo ao ser clicado.

#### CSS 3
```css
header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
}

.form-campo textarea {
    resize: none;
    height: 120px;
}
```
Essas configurações fazem com que o cabeçalho fique fixo no topo do site e acompanhe a rolagem da tela.

`resize: none;` -> Impede que o usuário altere manualmente o tamanho do campo de texto.

### Aula 4
Nesta aula, vamos aplicar validações com o jQuery e aprender a usar máscaras em alguns elementos com o jQuery Mask.

#### Plugins 4
[jQueryMask](https://igorescobar.github.io/jQuery-Mask-Plugin/)

##### 1. Baixando a biblioteca
- Diferente da outra biblioteca, esta será baixada e adicionada manualmente ao nosso site.

##### 2. Adicionando ao projeto
- Depois de realizar o download, entramos na pasta `dist`, pegamos o arquivo `js/jquery.mask.min.js` e criamos uma pasta `js` em nosso projeto para adicioná-lo.

##### 3. Adicionando ao HTML
```html
<script src="js/jquery.mask.min.js"></script>
```

##### 4. Adicionando ao JS
```js
$('#telefone').mask('(00) 00000-0000');
```
- Dessa forma, estamos adicionando uma máscara e validação ao campo telefone.

```js
$('#dt-nascimento').mask('00/00/0000', {
    placeholder: '__/__/____' 
});
```
- Neste exemplo, estamos validando a data de nascimento, adicionando uma máscara e definindo um placeholder.

```js
$('#placa-carro').mask('SSS-0000', {
    placeholder: 'ABC-1234' 
});
```
- Também é possível misturar diferentes tipos de caracteres na máscara.

---

[jQueryValidation](https://jqueryvalidation.org/)  

Os passos para adicionar esse plugin são os mesmos do Mask, a diferença é que vamos adicionar dois arquivos: um com as validações e outro com as mensagens em português.

Aprendemos também que é possível criar variáveis temporárias no DevTools para trabalhar diretamente no console.

##### 1. Adicionando ao HTML
```html
<script src="js/jquery.validate.min.js"></script>
<script src="js/messages_pt_BR.min.js"></script>
```

##### 2. Adicionando ao JS
```js
$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        }
    },
    messages: {
        nome: 'Por favor, insira o seu nome.'
    }
});
```
- Neste exemplo, mostramos algumas regras de validação e como adicionar uma mensagem específica para quando ocorrer um erro.

- Dando sequência ao código, veremos como interceptar o `submit` quando os valores estão corretos ou incorretos e como aplicar uma função de acordo com cada situação.




## Considerações finais
Acredito que esse README vai ficar muito bom, mas não vou ser detalhado assim nos próximos não, acredito que nem nesse eu vou ser tão detalhado como na aula 1, fica muito grande e muito trabalhoso, vou colocar só os pontos que são novidade para mim, o que acredito que precise de uma explicação mais detalhada para entender melhor o que tá acontecendo no código.

O que eu estou percebendo no andamento deste módulo é comoos pluguins facilitam a vida, ansioso para aprender mais!

