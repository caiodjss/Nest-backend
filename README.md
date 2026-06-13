<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  Backend em NestJS desenvolvido para evolução da aplicação Compra Mensal, com foco em arquitetura escalável, autenticação segura, APIs REST, troubleshooting e boas práticas de engenharia de software.
</p>

<p align="center">
<a href="https://nestjs.com/" target="_blank"><img src="https://img.shields.io/badge/NestJS-Framework-red" alt="NestJS"/></a>
<a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/TypeScript-5.x-blue" alt="TypeScript"/></a>
<a href="https://www.prisma.io/" target="_blank"><img src="https://img.shields.io/badge/Prisma-ORM-2D3748" alt="Prisma"/></a>
<a href="https://www.postgresql.org/" target="_blank"><img src="https://img.shields.io/badge/PostgreSQL-Database-336791" alt="PostgreSQL"/></a>
<a href="https://jwt.io/" target="_blank"><img src="https://img.shields.io/badge/JWT-Authentication-orange" alt="JWT"/></a>
<a href="https://jestjs.io/" target="_blank"><img src="https://img.shields.io/badge/Jest-Testing-C21325" alt="Jest"/></a>
<a href="https://www.docker.com/" target="_blank"><img src="https://img.shields.io/badge/Docker-Containerization-2496ED" alt="Docker"/></a>
</p>

---

# Descrição

Este projeto representa a migração do backend da aplicação **Compra Mensal** de Express.js para NestJS.

O objetivo é aprofundar conhecimentos em arquitetura backend moderna, APIs REST, autenticação, modelagem de banco de dados e construção de aplicações escaláveis utilizando uma arquitetura modular.

Durante o desenvolvimento são aplicados conceitos de troubleshooting, investigação de falhas, análise de fluxos HTTP, validação de integrações, tratamento de erros e boas práticas de engenharia de software.

Além da implementação das funcionalidades, o projeto é utilizado para consolidar conhecimentos em NestJS, Prisma ORM, PostgreSQL, autenticação baseada em JWT e testes automatizados.

---

# Tecnologias

* NestJS
* TypeScript
* Prisma ORM
* PostgreSQL
* JWT Authentication
* Passport
* Docker
* Jest
* Git

---

# Funcionalidades

## Autenticação

* Cadastro de usuários
* Login utilizando JWT
* Refresh Token
* Rotas protegidas
* Controle de acesso baseado em permissões

## Gestão de Produtos

* Cadastro de produtos
* Atualização de produtos
* Exclusão de registros
* Consulta de informações

## Gestão de Categorias

* Cadastro de categorias
* Relacionamento entre produtos e categorias
* Validações de integridade dos dados

## Integrações e Segurança

* Autenticação baseada em JWT
* Refresh Token
* Proteção de rotas utilizando Guards
* Validação de payloads através de DTOs
* Tratamento centralizado de exceções
* Padronização das respostas da API

## Qualidade e Confiabilidade

* Arquitetura modular
* Separação de responsabilidades
* Estrutura preparada para testes automatizados
* Código organizado para manutenção e escalabilidade
* Tratamento de erros e cenários de exceção

---

# Arquitetura

Estrutura baseada nos princípios de modularização do NestJS:

```text
src/
├── auth
├── users
├── products
├── categories
├── prisma
├── common
└── config
```

Principais responsabilidades:

* auth: autenticação e autorização
* users: gerenciamento de usuários
* products: regras de negócio dos produtos
* categories: gerenciamento de categorias
* prisma: acesso ao banco de dados
* common: componentes compartilhados
* config: configurações da aplicação

---

# Aprendizados Técnicos

Durante a construção deste projeto foram explorados temas como:

* Arquitetura modular com NestJS
* Dependency Injection
* Desenvolvimento de APIs REST
* Autenticação e autorização com JWT
* Modelagem de banco de dados relacional
* Integração com PostgreSQL utilizando Prisma ORM
* Troubleshooting e análise de erros
* Investigação de falhas em integrações
* Validação de dados e regras de negócio
* Estruturação de aplicações escaláveis
* Boas práticas de manutenção de código
* Organização para testes automatizados

---

# Execução do Projeto

Instalação das dependências:

```bash
yarn install
```

Ambiente de desenvolvimento:

```bash
yarn start:dev
```

Build da aplicação:

```bash
yarn build
```

Execução em produção:

```bash
yarn start:prod
```

---

# Testes

Executar testes unitários:

```bash
yarn test
```

Executar testes E2E:

```bash
yarn test:e2e
```

Executar cobertura de testes:

```bash
yarn test:cov
```

---

# Objetivo do Projeto

Este projeto foi criado para evoluir conhecimentos em desenvolvimento backend, arquitetura de software e construção de APIs escaláveis.

Além do desenvolvimento das funcionalidades, o foco está na compreensão profunda do comportamento da aplicação, investigação de problemas, análise de integrações e implementação de soluções robustas, habilidades diretamente relacionadas ao dia a dia de times de engenharia de software e suporte técnico especializado.
