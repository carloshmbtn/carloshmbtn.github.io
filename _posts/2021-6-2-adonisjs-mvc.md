---
layout: post
title: Adonis Js MVC
---

Construir uma aplicação demanda de tempo e um certo nível de estudo acerca de toda a arquitetura dessa aplicação, não somente por causa de trabalho em equipe (onde todos precisam conhecer muito bem o código) mas também por questões de desempenho, manutenibilidade e etc.

É indiscutível que o padrão MVC é tido como um padrão no desenvolvimento dos mais variáveis tipos de aplicações. Depois que você entende (pelo menos o básico) de cada um dos papéis nesse triangulo, você acaba por perceber que o trabalho se torna bem simples. Não é mais necessário pensar sobre onde colocar as coisas por exemplo, cada papel define muito bem o que será comportado nele.

Mas mesmo com tudo isso, o propósito aqui não é apresentar o MVC, e sim um framework que traz uma arquitetura MVC, o Adonis Js.

![adonis logo](/images/posts/adonis/adonis-logo.png)

Esse framework pode não ser um dos mais famosos que você vai encontrar por ai, mas ele resolve bem o problema da necessidade de uma porção de código funcional na linguagem JavaScript. Sem mais enrolação, vamos ver como iniciar um projeto, e fazer nosso primeiro CRUD (pra quem não lembra é “Criar, Ler, Atualizar e Deletar”).

### Adonis CLI

Esse framework tem seu código no GitHub, mas veremos aqui pelo aplicativo de linha de comando dele.

O primeiro passo é ter o node e npm instalados, no caso, não mostrarei isso aqui no momento pelo fato da quantidade de conteúdo para esse post em específicos, então seguiremos em frente.

Em um terminal como super usuário, basta rodar o seguinte comando:

```
npm install -g adonis-cli
```

Feito isso, temos acesso em nossos terminais ao comando **adonis**.

### Feito isso, temos acesso em nossos terminais ao comando adonis.

Agora em sua pasta de projetos, rode como usuário comum mesmo, o comando **adonis new nomeApp** (um detalhe importante é que no Debian não consegui fazer o processo em diretórios onde os nomes possuem espaços, como no caso **Área de Trabalho** por exemplo).

Esse comando além de baixar todo o código do framework, ainda faz a instalação de todas as dependências registradas no **package.json**, então a menos que você inclua algo nesse arquivo antes da primeira execução, não é necessário executar **npm install**.

### Rodando o código básico

Podemos executar o servidor com **npm run serve ou node server.js**. Por padrão, ele roda na porta 3333 em localhost, acesse esse endereço e porta para ver a tela de início do Adonis Js.

## Primeira Controller

Caso você abra o arquivo em **app/Http/routes.js** (que é onde o framework concentra a definição de rotas), perceberá que o processo de renderização da página inicial é feita nesse arquivo por meio da função **render**.

Trecho de código:

```
const Route = use('Route')
 
Route.on('/').render('welcome')
```

Poderíamos alterar esse código da seguinte maneira:

``` 
const Route = use('Route')
 
Route.get('/', 'IndexController.index')
``` 

Dessa forma definimos que ao fazer uma requisição do tipo GET no path ‘/’ estamos na verdade invocando a função **index** que se encontra dentro da controller de nome **IndexController**. Porém, ainda não temos essa controller, vamos a sua implementação.

### Processo via linha de comando

Na raiz do projeto temos um executável com o nome ace que recebe alguns parâmetros para interagir com nosso projeto gerando arquivos por exemplo. Iremos utilizá-lo para construir nossa controller.

Rode **./ace make:controller IndexController**. Será feito um questionamento a respeito do tipo de controller que está sendo criada, escolha **Http**. Perceba que em caso de sucesso, o executável nos retorna uma string com o local do novo arquivo, iremos agora editá-lo.

### Código da controller

O código que temos dentro de nosso arquivo é o seguinte:

```
'use strict'
 
class IndexController {
 
}
 
module.exports = IndexController
```

Como podemos ver, a estrutura está pronta, nos resta implementar a função **index** que tratará a requisição. Definimos essa função da seguinte forma:

```
* index(request, response){
 
}
```

A sintaxe não é muito diferente da que temos no Express Js por exemplo, recebemos um objeto que tem informações da requisição, e outro com uma referência para a resposta. Um método que podemos usar da response por exemplos é o **send** que simplesmente retorna algo estático para o cliente. Exemplo:

```
* index(request, response){
    response.send('Olá mundo!!!');
}
``` 

Ao restartar o servidor, e acessar a barra novamente, teremos simplesmente a string que enviamos.

## View

Por padrão o Adonis Js vem configurado para renderizar view com o Nunjucks (da Mozilla). Não vamos entrar em detalhes da sintaxe nos arquivos **.njk**, mas podemos fazer algumas coisas como por exemplo:

Laço for:

```
{% for i in algumVetor %}
Acesse i via {{i}} ou via {{i.algo}} se for um objeto
{% endfor %} 
```

Acesso a variável:

```
{{var}} ou via {{obj.algo}}
```

If: 

```
{% if condicao %}
entrou no if
{% else %}
entrou no else
{% endif %} 
```

### Criar view via cli

Assim como a controller, podemos criar a visão via linha de comando com a mesma sintaxe:

```
./ace make:view index
``` 

Como saída temos o local do arquivo novamente.

Voltando a nossa controller, podemos alterará-la da seguinte forma:

``` 
'use strict'
 
class IndexController {
    * index(request, response){
        var vetor = [];
        vetor.push("um");
        vetor.push("dois");
        vetor.push("tres");
        yield response.sendView('index', {vetor});
    }
}
 
module.exports = IndexController
``` 

Dessa forma poderemos percorrer o vetor em nossa view. **yield** deve ser usado para que a resposta seja enviada ao browser somente depois de terminada a renderização pelo método **sendView**.

Agora escrevemos o for em nossa view:

``` 
{% for v in vetor %}
 
{{v}}
 
{% endfor %}
``` 

Com isso, ao acessar a /, temos a impressão de cada um dos elementos adicionados no vetor pela controller. Por enquanto vimos dois pilares (controller e view), o terceiro podemos ver em um post em separado em breve. Por enquanto, dê uma olhada na [documentação oficial](https://adonisjs.com/docs/3.2/overview).