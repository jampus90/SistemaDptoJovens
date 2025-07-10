## 📄 `README.md` atualizado com passo a passo de instalação

````markdown
# Sistema de Assinatura e Presença - Departamento de Jovens do Nipo Campinas

Este projeto é um sistema de controle de **assinaturas com pagamento recorrente** e **registro de presença**, desenvolvido para uso no Departamento de Jovens do Nipo Campinas.

---

## 🧱 Tecnologias Utilizadas

### Frontend
- React (TypeScript)
- Axios
- Tailwind CSS (opcional)
- React Router

### Backend
- FastAPI
- Uvicorn
- SQLAlchemy
- PostgreSQL
- Pydantic

---

## 🧑‍💻 Pré-requisitos

### 🔧 Backend (Python 3.10.8)

> ⚠️ É recomendado utilizar a versão exata: **Python 3.10.8**

1. Baixe o instalador em:  
   https://www.python.org/downloads/release/python-3108/

2. Durante a instalação:
   - Marque **"Add Python to PATH"**
   - Escolha "Customize installation" → marque **pip** e **venv**

3. Verifique no terminal:
```bash
python --version
# ou
py --version
````

---

### 🌱 Criar ambiente virtual (venv)

No terminal, dentro da pasta `backend/`:

```bash
# Windows
py -3.10 -m venv venv
venv\Scripts\activate

# macOS/Linux
python3.10 -m venv venv
source venv/bin/activate
```

---

### 📦 Instalar dependências do backend

```bash
pip install fastapi uvicorn[standard] sqlalchemy psycopg2-binary python-dotenv
```

> ⚠️ Se usar SQLite, o `psycopg2-binary` não é necessário.

---

### 🚀 Rodar servidor backend

```bash
uvicorn app.main:app --reload
```

Acesse: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🌐 Frontend (React)

### 1. Instalar Node.js (recomendado: 18.x ou superior)

Baixe em: [https://nodejs.org/en](https://nodejs.org/en)

Verifique:

```bash
node -v
npm -v
```

---

### 2. Criar o projeto React (caso ainda não tenha feito)

```bash
npx create-react-app frontend --template typescript
cd frontend
```

---

### 3. Instalar dependências

```bash
npm install axios react-router-dom
```

Opcional:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

### 4. Rodar o frontend

```bash
npm start
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## 📦 Estrutura do Projeto

```
SistemaDptoJovens/
├── backend/
│   ├── app/
│   │   └── main.py
│   └── venv/
├── frontend/
│   ├── src/
│   │   └── pages/HomePage.tsx
└── README.md
```

---

## 📌 Funcionalidades planejadas

* [x] Estrutura inicial frontend/backend
* [ ] Cadastro e autenticação de usuários
* [ ] Registro de presença
* [ ] Planos de assinatura (mensal/anual)
* [ ] Pagamentos recorrentes
* [ ] Painel administrativo
* [ ] Deploy em Vercel (frontend) e Render/Fly.io (backend)

---

## 🧠 Objetivo

Este projeto serve como estudo e também aplicação prática no Departamento de Jovens do Nipo Campinas, com foco em tecnologias modernas e boas práticas de desenvolvimento full-stack.

---

## 👨‍💻 Desenvolvido por

**Alexandre Yamaguishi**
GitHub: [@jampus90](https://github.com/jampus90)