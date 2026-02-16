# 🏦  Bank Agency API

API REST desenvolvida em Node.js utilizando Express e MySQL, com o objetivo de implementar e praticar um relacionamento 1:N (um-para-muitos) entre as entidades Banco e Agências.

Este projeto foi desenvolvido como atividade acadêmica com foco em modelagem relacional, integridade de dados e estruturação de backend.

## 📌 📖 Sobre o Projeto

### No domínio escolhido:

* 🏦 Um Banco pode possuir várias Agências

* 🏢 Uma Agência pertence a apenas um Banco

O sistema permite cadastrar, listar e manipular dados garantindo a consistência do relacionamento entre as entidades.

## 🧠 Conceitos Aplicados

* Relacionamento **1:N (One-to-Many)**

* Modelagem de banco de dados relacional

* Organização em camadas (rotas, conexão com banco)

* Integração entre **Node.js** e **MySQL**

* Criação de **API REST**


## 🛠️ Tecnologias Utilizadas

 * 🟢 [Node.js](https://nodejs.org/en)

 * ⚡ [Express](https://expressjs.com/)

 * 🗄️ [MySQL](https://www.mysql.com/)

 * 🧰 [MySQL Workbench](https://www.mysql.com/products/workbench/)

## 🚀 Como Rodar o Projeto

1️⃣ Clone o repositório
```
git clone https://github.com/AGomes09/bank-agency-api.git
```

2️⃣ Acesse a pasta do projeto
```
cd bank-agency-api
```

3️⃣ Instale as dependências
```
npm install
```
4️⃣ Configure o banco de dados

* Crie um banco no MySQL

* Configure as credenciais no arquivo de conexão (host, user, password, database)

Exemplo de configuração:
```
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'bank_db'
});
```
5️⃣ Inicie o servidor
```
npm start
```
ou (caso utilize nodemon):
```
npm run dev
```
## 🌐 Servidor rodando em:
```
http://localhost:3000
```

## 📬 Exemplos de Funcionalidades

* ✅ Criar um Banco

* ✅ Criar uma Agência vinculada a um Banco

* ✅ Listar Bancos

* ✅ Listar Agências de um Banco

## 🎯 Objetivo Acadêmico

* Este projeto foi desenvolvido para praticar a implementação de um backend capaz de manipular entidades relacionadas, aplicando conceitos de banco de dados relacional e arquitetura básica de **API REST.**

## 👨‍💻 Autor

Desenvolvido por **Adriano Almeida Gomes** 
