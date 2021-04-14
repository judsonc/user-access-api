# Usuários e Acessos

API para gerenciamento de usuários e acessos.

## Descrição

Nesta aplicação é possível gerenciar acessos e usuários.

Para os acessos, pode-se visualizar o número total de acessos registrados, como também é possível incrementar o seu valor de acesso.

Para os usuários, é possível criar um usuário, visualizar todos os usuários cadastrados, assim como um usuário com um `uuid` específico.

## Documentação

Para visualizar a documentação, acesse: [https://user-access-api.herokuapp.com/docs](https://user-access-api.herokuapp.com/docs).

## Desenvolvimento

Para executar a aplicação localmente, primeiro instale as dependências:

```sh
$ yarn install
```

Em seguida, é preciso ter as variáveis de ambiente a seguir. Também é possível utilizar os valores pré-definidos na aplicação.

```env
NODE_ENV=development
PORT=5000
PG_DB=user-access
PG_USER=postgres
PG_PASSWORD=postgres
PG_HOST=localhost
PG_PORT=5432
```

Agora é possível executar a aplicação em modo de desenvolvimento:

```sh
$ yarn local
```

## Testes

```sh
$ yarn install
$ yarn test
```
