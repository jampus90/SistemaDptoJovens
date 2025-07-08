```markdown
# Sistema de Assinatura e Presença - Departamento de Jovens do Nipo Campinas

Este projeto é um sistema de controle de **assinaturas com pagamento recorrente** e **registro de presença**, desenvolvido para uso no Departamento de Jovens do Nipo Campinas.  
Além de funcional, o projeto serve como estudo prático de tecnologias modernas como **React (TypeScript)** no frontend e **FastAPI (Python)** no backend.

---

## 🧱 Tecnologias Utilizadas

### Frontend
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/) *(opcional)*
- [Vite](https://vitejs.dev/) *(ou Create React App)*

### Backend
- [FastAPI](https://fastapi.tiangolo.com/)
- [Uvicorn](https://www.uvicorn.org/) - servidor ASGI
- [SQLAlchemy](https://www.sqlalchemy.org/) *(para ORM)*
- [PostgreSQL](https://www.postgresql.org/)

---

## 🗂️ Estrutura do Projeto

```

SISTEMADPTOJOVENS/
├── backend/          # FastAPI backend
│   ├── app/
│   │   └── main.py   # API principal
│   └── venv/         # Ambiente virtual (ignorado pelo Git)
├── frontend/         # React frontend
│   └── src/
└── README.md

````

---

## 🚀 Como Rodar o Projeto

### 1. Backend (FastAPI)

```bash
# Navegue até o backend
cd backend

# Ative o ambiente virtual
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Rode o servidor FastAPI
uvicorn app.main:app --reload
````

Acesse a documentação da API em: [http://localhost:8000/docs](http://localhost:8000/docs)

---

### 2. Frontend (React)

```bash
# Navegue até o frontend
cd frontend

# Instale as dependências
npm install

# Rode a aplicação
npm start
```

Frontend acessível em: [http://localhost:3000](http://localhost:3000)

---

## 📌 Funcionalidades planejadas

* [x] Estrutura inicial frontend/backend
* [ ] Cadastro e autenticação de usuários
* [ ] Registro de presença
* [ ] Planos de assinatura (mensal/anual)
* [ ] Pagamentos recorrentes (Stripe/MercadoPago)
* [ ] Painel administrativo
* [ ] Deploy completo (Vercel + Render)

---

## 📬 Contato

Desenvolvido por **Alexandre Yamaguishi**
GitHub: [@jampus90](https://github.com/jampus90)

---

## 🧠 Objetivo

Este projeto é parte de uma iniciativa pessoal e comunitária para:

* Aplicar conceitos de desenvolvimento full-stack
* Estudar integração de serviços (como pagamentos)
* Criar ferramentas úteis para a organização do Nipo Campinas

```