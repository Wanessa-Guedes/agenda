<h1 align=center> API DOCUMENTATION </h1>

<h1 align="center"> 
    <a href="https://github.com/Wanessa-Guedes/agenda.git"> :ledger: </a>
</h1>
  
<p align="center">
  <h3 align="center">
    Agenda Web
  </h3>
</p>

## Usage

```bash
$ git clone https://github.com/Wanessa-Guedes/agenda.git

$ cd $nome-repositorio

$ npm install

$ npx prisma migrate dev

$ npx prisma generate

$ npm run dev
```

API:

```bash
- AUTH ROTAS 

- POST /sign-in
    - Rota para logar no site
    - headers: {}
    - body: {"email": "teste@teste.com",
             "password": "teste"}
    
- POST /sign-up
    - Rota para realizar cadastro no site
    - headers: {}
    - body: {"email": "teste@teste.com",
             "userName": "teste",
             "password": "teste",
             "confirmPassword": "teste"}            
```

```bash
- ACCOUNT ROTA

- GET /contacts (autenticada)
    - Rota para obter os contatos cadastrados pelo usuário
    - headers: {"Authorization": "Bearer ${token}"}
    - body: {}
    
 - POST /contacts (autenticada)
    - Rota para adicionar um contato na agenda
    - headers: {"Authorization": "Bearer ${token}"}
    - body: {"name": "teste@teste.com",
             "whatsapp": "teste",
             "email": "teste",
             "tel": "teste"}
       
 - PATCH /contacts/:id (autenticada)
    - Rota para atualizar as informações de um contato na agenda
    - headers: {"Authorization": "Bearer ${token}"}
    - body: {"whatsapp": "teste",
             "email": "teste",
             "tel": "teste"}
         
 - DELETE /contacts/:id (autenticada)
    - Rota para deletar um contato na agenda
    - headers: {"Authorization": "Bearer ${token}"}
    - body: {}

```
