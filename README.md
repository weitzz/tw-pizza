# 🍕 TW-Pizzas – Projeto de Pizzaria

Projeto de pizzaria desenvolvido com Next.js, integrando pagamento via Strapi, autenticação e criptografia. Banco de dados PostgreSQL gerenciado com Prisma, rodando em Docker.

---
## 🛠 Tecnologias Utilizadas

- **Next.js 15** – Framework React moderno para Server Components e Server Actions.

- **Tailwind CSS** – Framework CSS utilitário para estilização rápida.

- **ShadCN/UI** – Biblioteca de componentes UI modernos.

- **Zustand** – Gerenciamento de estado leve para React.
- **Prisma** – ORM para PostgreSQL.

- **PostgreSQL** – Banco de dados relacional, rodando via **Docker**.

- **Strapi** – Backend headless CMS, usado para integração de pagamento.

- **Autenticação & Bcryptjs** – Registro, login e criptografia de senhas.

- **Axios** – Chamadas HTTP para APIs externas (Strapi, validações, etc).

---
## ⚡ Funcionalidades

✅ Cadastro e login de usuários com criptografia de senha (bcryptjs).

✅ Autenticação com tokens UUID salvos no banco.

✅ Modal de login/cadastro estilizado com ShadCN/UI.

✅ Validação de formulários com Zod.

✅ Integração com Strapi para processar pagamentos.

✅ Persistência de dados com PostgreSQL + Prisma.



![tela inicial](image.png)



![carrinho](image-1.png)



![tela finalizar compra com stripe](image-2.png)
---

### 🚀 Como Rodar

1. Clone o projeto:
```
 git clone https://github.com/seu-usuario/tw-pizzas.git
cd tw-pizzas
```

2. Instale as dependências:
```
 npm install
```

3. Suba o banco com Docker:
```
 docker compose up -d
```
4. Configure as variáveis de ambiente:
```
DATABASE_URL=postgresql://user:password@localhost:5432/tw-pizzas
NEXT_PUBLIC_STRAPI_URL=https://seu-strapi.com
```

5. Rode as migrations:
```
 npx prisma migrate dev
```

6. Execute o seed para popular o banco:
```
 npx prisma db seed
```

7. Inicie o projeto:
```
 npm run dev
```
8. Abra no navegador:
```
 http://localhost:3000
```

## 🔒 Segurança

- Senhas criptografadas com bcryptjs

- Autenticação baseada em UUID tokens persistidos no banco

- Banco rodando em container Docker isolado

## 📌 Licença

Este projeto está sob a Licença MIT
