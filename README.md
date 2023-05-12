# Desafio Fullstack Back-end

Projeto com o objetivo de criar um usuário e esse poder cadastrar vários contatos, ambos com CRUD (Back-end).

Para utilizar este projeto, é necessário instalar as dependências e cumprir todos os requerimentos.

Requerimentos: 
- Node.js
- PostgresSQL

Utilize o comando abaixo para instalar as dependências:

````
yarn install
````
<br>

Para rodar as migrations utilize o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

**Configure as variáveis de ambiente no seu .env**, passando as credenciais corretas para conectar em seu banco local


Com isso feito, para rodar sua aplicação, basta utilizar o comando
````
yarn dev
````

<br>

Link da documentação da API: https://desafiofullstackdoc.vercel.app
