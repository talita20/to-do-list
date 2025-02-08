# API de Gerenciamento de Tarefas

Uma API RESTful para gerenciamento de tarefas construída com Node.js, Express e MySQL.

## 🚀 Funcionalidades

- CRUD completo de tarefas
- Validação de dados
- Documentação com Swagger
- Tratamento de erros

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- MySQL (versão 5.7 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório
```bash
git clone https://github.com/talita20/to-do-list.git
cd to-do-list
```

2. Instale as dependências
```bash
npm install
```

3. Configuração do banco de dados

Certifique-se de que você tem o MySQL instalado e rodando em sua máquina. Crie um banco de dados para o projeto:
```sql
CREATE DATABASE to_do_list;
```

Altere as configurações de banco de dados no arquivo `.env` ou `config/config.json` conforme necessário para o seu ambiente.
Exemplo de configuração no .env:

```env
PORT=3000
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=senha
DB_NAME=to_do_list
```


## 🎯 Uso

### Iniciando o servidor

Desenvolvimento:
```bash
npm run dev
```

Produção:
```bash
npm start
```

### Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /api/tasks | Cria uma nova tarefa |
| GET | /api/tasks | Lista todas as tarefas |
| GET | /api/tasks/:id | Busca uma tarefa específica |
| PATCH | /api/tasks/:id | Atualiza uma tarefa |
| DELETE | /api/tasks/:id | Remove uma tarefa |
| GET | /api/tasks/completed | Busca tarefas completas |


### Exemplo de uso

Criando uma nova tarefa:
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Minha Tarefa", "description": "Descrição da tarefa"}'
```


## 📚 Documentação

A documentação da API está disponível através do Swagger UI em:
```
http://localhost:3000/api-docs
```


## 🛠️ Construído Com

- [Node.js](https://nodejs.org/) - Ambiente de execução
- [Express](https://expressjs.com/) - Framework web
- [MySQL](https://www.mysql.com/) - Banco de dados
- [Swagger](https://swagger.io/) - Documentação da API
