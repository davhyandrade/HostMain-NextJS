
# CRUD Desenvovido com NextJS

> Status: Concluded

## HostMain

<img src="https://i.postimg.cc/prgzH5Yy/bank-small.png" alt="bank-small" width="100%">

HostMain é um CRUD desenvolvido pelo Next JS, Node JS e banco de dados MySQL na nuvem pela Amazon AWS.

# Desenvolvimento

Desenvolvido pelo `Next JS`, com o backend trabalhado con `Node JS` e `MySQL`, com as funções Cadastrar, Pesquisar, Listar, Alterar e Excluir.

* `Cadastrar` 

```js
    switch (method.request) {
        case 'POST':
            const { CodCurso } = request.body;
            const { Nome } = request.body;
            const { CodDisc1 } = request.body;
            const { CodDisc2 } = request.body;
            const { CodDisc3 } = request.body;
        
            let sqlCadastrar = 'insert into curso values (?, ?, ?, ?, ?)';
        
            db.query(sqlCadastrar, [CodCurso, Nome, CodDisc1, CodDisc2, CodDisc3], (err, result) => {
                console.log(err);
            })
            break
    }
```

#

* `Listar` 

```js
    switch (method.request) {
        case 'GET':
            let sqlListar = 'select * from curso order by Nome';

            db.query(sqlListar, (err, result) => {
                if(err) {
                    console.log(err);
                } else {
                    response.send(result);
                }
            })
            break
    }
```

#

* `Excluir` 

```js
    switch (method.request) {
        case 'DELETE':
            let sqlDelete = 'delete from curso where CodCurso = ?';

            db.query(sqlDelete, [id], (err, result) => {
                if(err) {
                    console.log(err);
                } else {
                    response.send(result);
                } 
            })
            break
    }
```

#

* `Pesquisar` 

```js
    switch (method.request) {
        case 'POST':
            let sqlPesquisar = "select * from curso where Nome like '%" + id + "%'";

            db.query(sqlPesquisar, [id], (err, result) => {
                if(err) {
                    console.log(err);
                } else {
                    response.send(result);
                }
            })
            break
    }
```

#

* `Alterar` 

  * Selecionar alteração
  
```js
    const { id } = request.query;

    if(method.request === 'POST') {
        let sqlSelecionar = "select * from curso where CodCurso = ?";

        db.query(sqlSelecionar, [id], (err, result) => {
            if(err) {
                console.log(err);
            } else {
                response.send(result);
            }       
        })
    }
```

* `Alterar` 

   * Salvar alteração
     
```js
    if(method.request === 'PUT') {
        const { CodCurso } = request.body;
        const { Nome } = request.body;
        const { CodDisc1 } = request.body;
        const { CodDisc2 } = request.body;
        const { CodDisc3 } = request.body;
    
        let sql = 'update curso set Nome = ?, CodDisc1 = ?, CodDisc2 = ?, CodDisc3 = ? where CodCurso = ?';
    
        db.query(sql, [Nome, CodDisc1, CodDisc2, CodDisc3, CodCurso], (err, result) => {
            if(err) {
                console.log(err);
            } else {
                response.send(result);
            }    
        })
    }
```
