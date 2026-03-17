# 📚 NestJS + Prisma Study Project

Este projeto foi desenvolvido com o objetivo de **aprender e praticar conceitos fundamentais de backend**, utilizando NestJS em conjunto com Prisma ORM.

---

## 🚀 Objetivo

O foco principal deste projeto é estudar e entender:

- Arquitetura em camadas (Controller → Service → Repository)
- Princípios do SOLID
- Injeção de dependência (Dependency Injection)
- Inversão de dependência
- Uso de DTOs para validação
- Integração com banco de dados

---

## 🧠 Conceitos aplicados

Durante o desenvolvimento, foram utilizados:

- Separação de responsabilidades
- Repository Pattern
- Tratamento de erros com exceções
- Organização de código escalável
- Boas práticas de backend

---

## 🛠️ Tecnologias utilizadas

- Node.js
- NestJS
- Prisma ORM
- TypeScript

---

## 📁 Estrutura do projeto

```bash
src/
├── member/
│   ├── dto/
│   ├── member.controller.ts
│   ├── member.service.ts
│   └── member.module.ts
│
├── repository/
│   ├── members-repository.ts
│   └── prisma-repository-members.ts
│
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
│
├── app.module.ts
