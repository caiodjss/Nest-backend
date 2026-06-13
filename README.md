````markdown
<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  Backend em NestJS desenvolvido para evolução da aplicação Compra Mensal, com foco em arquitetura escalável, autenticação segura, qualidade de código e boas práticas de engenharia de software.
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

O objetivo é aprofundar conhecimentos em arquitetura backend moderna, APIs REST, autenticação, modelagem de banco de dados, organização modular e construção de aplicações escaláveis.

Além da implementação das funcionalidades, o projeto é utilizado para consolidar habilidades em troubleshooting, investigação de falhas, validação de integrações e boas práticas de engenharia de software.

---

# Tecnologias

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Passport
- Docker
- Jest
- Git

---

# Funcionalidades

## Autenticação

- Cadastro de usuários
- Login utilizando JWT
- Refresh Token
- Rotas protegidas
- Controle de acesso

## Gestão de Produtos

- Cadastro de produtos
- Atualização de produtos
- Exclusão de registros
- Consulta de dados

## Gestão de Categorias

- Cadastro de categorias
- Relacionamento entre produtos e categorias
- Validações de integridade dos dados

## Qualidade e Confiabilidade

- DTOs para validação de entrada
- Tratamento centralizado de exceções
- Arquitetura modular
- Estrutura preparada para testes automatizados
- Organização voltada para manutenção e escalabilidade

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
````

### Conceitos Aplicados

* Dependency Injection
* Modular Architecture
* DTO Pattern
* Validation Pipes
* Exception Filters
* Guards
* Middleware
* Separation of Concerns

---

# Aprendizados Aplicados

Durante a construção deste projeto estou aprofundando conhecimentos em:

* Desenvolvimento de APIs REST
* Arquitetura de aplicações backend
* Segurança de aplicações
* Autenticação e autorização
* Modelagem de banco de dados relacionais
* Troubleshooting de aplicações
* Investigação e correção de falhas
* Boas práticas de engenharia de software
* Manutenção e evolução de sistemas

---

# Objetivo do Projeto

Este repositório representa minha evolução como desenvolvedor backend.

A proposta não é apenas implementar funcionalidades, mas compreender o comportamento da aplicação, validar integrações, identificar problemas e construir soluções organizadas, escaláveis e preparadas para crescimento.

---

# Instalação

```bash
yarn install
```

---

# Execução

```bash
# desenvolvimento
yarn start

# watch mode
yarn start:dev

# produção
yarn start:prod
```

---

# Testes

```bash
# testes unitários
yarn test

# testes e2e
yarn test:e2e

# cobertura de testes
yarn test:cov
```

---

# Próximos Passos

* Implementar autenticação completa com JWT e Refresh Token
* Estruturar controle de acesso por perfis
* Adicionar testes unitários e de integração
* Implementar logs estruturados
* Melhorar observabilidade da aplicação
* Evoluir a arquitetura da versão Express para uma estrutura totalmente modular em NestJS

---

# Status

🚧 Em desenvolvimento

Migração em andamento da versão Express.js para NestJS.

Projeto utilizado para estudo avançado de arquitetura backend, APIs REST, autenticação e boas práticas de engenharia de software.

```
```
