<div align="center" id="top"> 
  <img style="[-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="./desafio/note-logo.png" height="300" width="300">
  
  &#xa0;

</div>

<h1 align="center">API Bloco de Notas</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/ViiniciusK9/node-api-tasks?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/ViiniciusK9/node-api-tasks?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ViiniciusK9/node-api-tasks?color=56BEB8">

  <img alt="licença" src="https://img.shields.io/github/license/ViiniciusK9/node-api-tasks?color=56BEB8">

</p>


<hr> 

<p align="center">
  <a href="#dart-Sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-Tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-Requisitos">Requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-Iniciar">Iniciar</a> &#xa0; | &#xa0;
  <a href="#memo-licença">licença </a> &#xa0; | &#xa0;
  <a href="https://github.com/ViiniciusK9" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre ##

API desenvolvida seguindo as orientações do [desafio](https://github.com/ViiniciusK9/node-api-tasks/tree/main/desafio).
Este projeto tem como finalidade contruir uma API para um bloco de notas com possibilidade de criar, editar, listar e deletar notas.

## :rocket: Tecnologias ##

As seguintes ferramentas foram utilizadas neste projeto:

- [Node.js](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/v7/)
- [Mysql](https://www.mysql.com/)

## :white_check_mark: Requisitos ##
Antes de iniciar :checkered_flag:, você precisa ter o [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalado.

## :checkered_flag: Iniciar ##

```bash
# Clone este projeto
$ git clone https://github.com/ViiniciusK9/node-api-tasks

# Acesse
$ cd node-api-tasks

# Instale as dependências
$ npm install

# Inicie o servidor
$ npm start

# As configurações /config podem ser ajustadas para se adequar ao seu banco de dados
```

## :arrows_clockwise: Requisições 

### Criação de nota
* **Request - POST** `http://localhost:3000/api/project`
```
{
    "title": "Título da nota",
    "description": "Descrição da nota",
    "tasks": [
        {
            "title": "Título da task",
            "taskRelevance": 10,
            "completed": false
        },
        {
            "title": "Título da task",
            "taskRelevance": 10, 
            "completed": false  
        }
    ]
}
```
* **Response**
    * Json com infomações cadastradas.
    * Http code 201 created.
```
{
    "id": 24,
    "title": "Título da nota",
    "description": "Descrição da nota",
    "tasks": [
        {
            "id": 7,
            "title": "Título da task",
            "taskRelevance": 10,
            "completed": false,
            "nota_id": 24,
            "updatedAt": "2022-01-11T12:11:55.069Z",
            "createdAt": "2022-01-11T12:11:55.069Z"
        },
        {
            "id": 8,
            "title": "Título da task",
            "taskRelevance": 10,
            "completed": false,
            "nota_id": 24,
            "updatedAt": "2022-01-11T12:11:55.069Z",
            "createdAt": "2022-01-11T12:11:55.069Z"
        }
    ],
    "updatedAt": "2022-01-11T12:11:55.012Z",
    "createdAt": "2022-01-11T12:11:55.012Z"
}
```
---

### Listagem de todas as notas
* **Request - GET** `http://localhost:3000/api/project`

* **Resposnse**
    * Todos os dados cadastrados no banco de dados.
    * Http code 200.
---

### Listagem de notas por ID

* **Request - GET** `http://localhost:3000/api/project/:id`

* **Response**
    * Http code 200.
    * Json com informações do id passado por parametro (exemplo 24 abaixo).
    * Caso id não exista, retorna status 404.

```
{
    "id": 24,
    "title": "Título da nota",
    "description": "Descrição da nota",
    "createdAt": "2022-01-11T12:11:55.000Z",
    "updatedAt": "2022-01-11T12:11:55.000Z",
    "tasks": [
        {
            "id": 7,
            "title": "Título da task",
            "taskRelevance": 10,
            "completed": false,
            "createdAt": "2022-01-11T12:11:55.000Z",
            "updatedAt": "2022-01-11T12:11:55.000Z",
            "nota_id": 24
        },
        {
            "id": 8,
            "title": "Título da task",
            "taskRelevance": 10,
            "completed": false,
            "createdAt": "2022-01-11T12:11:55.000Z",
            "updatedAt": "2022-01-11T12:11:55.000Z",
            "nota_id": 24
        }
    ]
}
```
---

### Atualização de uma nota por ID

* **Request - PUT** `http://localhost:3000/api/project/:id`

```
{
    "title": "Título da nota atualizado",
    "description": "Descrição da nota atualizada",
    "tasks": [
        {
            "id": 7,
            "title": "Título da task atualizado",
            "taskRelevance": 5,
            "completed": true
        },
        {
            "id": 8,
            "title": "Título da task atualizado",
            "taskRelevance": 5,
            "completed": true
        }
    ]
}
```

* **Response**
    * Json com as informações atualizadas.
    * Http code 200.
    * Caso id não exista, retorna status 404.

```
{
    "id": 24,
    "title": "Título da nota atualizado",
    "description": "Descrição da nota atualizada",
    "createdAt": "2022-01-11T12:11:55.000Z",
    "updatedAt": "2022-01-11T12:26:04.000Z",
    "tasks": [
        {
            "id": 7,
            "title": "Título da task",
            "taskRelevance": 10,
            "completed": false,
            "createdAt": "2022-01-11T12:11:55.000Z",
            "updatedAt": "2022-01-11T12:11:55.000Z",
            "nota_id": 24
        },
        {
            "id": 8,
            "title": "Título da task",
            "taskRelevance": 10,
            "completed": false,
            "createdAt": "2022-01-11T12:11:55.000Z",
            "updatedAt": "2022-01-11T12:11:55.000Z",
            "nota_id": 24
        }
    ]
}
```
---

### Deletar uma nota por ID

* **Request - DELETE** `http://localhost:3000/api/project/:id`

* **Response**
    * Http code 204, com Json vazio. 
    * Caso o ID não seja encontrado retorna Http code 404.
---

### Criação de uma task
* **Request - POST** `http://localhost:3000/api/project/:nota_id/tasks`

```
{
    "title": "Título da task",
    "taskRelevance": 10,
    "completed": false
}
```

* **Response**
    * Http code 201 created.
    * Json com informações cadastradas.

```
{
    "id": 9,
    "title": "Título da task",
    "taskRelevance": 10,
    "completed": false,
    "nota_id": "24",
    "updatedAt": "2022-01-11T14:15:37.803Z",
    "createdAt": "2022-01-11T14:15:37.803Z"
}
```
---

### Listagem de todas as tasks

* **Request - GET** `http://localhost:3000/api/tasks`

* **Response**
    * Todos os dados cadastrados no banco de dados.
    * Http code 200.
---

### Litagem de task por ID

* **Request - GET** `http://localhost:3000/api/tasks/:id`

* **Response**
    * Http code 200.
    * Json com informações do ID passado por parametro (exemplo 9 abaixo).
    * Caso id não exista, retorna status 404.

```
{
    "id": 9,
    "title": "Título da task",
    "taskRelevance": 10,
    "completed": false,
    "createdAt": "2022-01-11T14:15:37.000Z",
    "updatedAt": "2022-01-11T14:15:37.000Z",
    "nota_id": 24
}
```
---

### Atualização de uma task por ID

* **Request - PUT** `http://localhost:3000/api/tasks/:id`

```
{
    "title": "Título da task atualizado",
    "taskRelevance": 9,
    "completed": true
}
```

* **Response**
    * Json com as informações atualizadas.
    * Http code 200.
    * Caso id não exista, retorna status 404.

```
{
    "id": 9,
    "title": "Título da task atualizado",
    "taskRelevance": 9,
    "completed": true,
    "createdAt": "2022-01-11T14:15:37.000Z",
    "updatedAt": "2022-01-11T14:23:09.000Z",
    "nota_id": 24
}
```
---

### Deletar uma task por ID

* **Request - DELETE** `http://localhost:3000/api/tasks/:id`

* **Response**
    * Http code 204, com Json vazio.
    * Caso o ID não seja encontrado retorna Http code 404.

---


## :memo: licença ##

Este projeto está sob licença do MIT. Para obter mais detalhes, consulte o arquivo [LICENSE](LICENSE).

Feito com :heart: por <a href="https://github.com/ViiniciusK9" target="_blank">Vinicius Koncicoski</a>

&#xa0;

<a href="#top">Voltar ao topo</a>
