<div align="right">
  <sub>Create in</sub>  
  
  `10/10/2022`
</div>

# CRUD Desenvovido com NextJS

> Status: Concluded

## HostMain

HostMain é um CRUD desenvolvido pelo Next JS, Node JS e banco de dados MySQL na nuvem pela Amazon AWS.

![hostmainvsd](https://user-images.githubusercontent.com/109045257/197403214-093b934f-e32c-423c-a8af-4022ba7829e7.png)

# Desenvolvimento

Desenvolvido pelo `Next JS`, com o backend trabalhado com `Node JS` e `MySQL`, com as funções Cadastrar, Pesquisar, Listar, Alterar e Excluir.

* `Cadastrar` 

```js
    switch (method.request) {
        case 'POST':
            const { CodCurso } = request.body;
            const { Nome } = request.body;
            const { CodDisc1 } = request.body;
            const { CodDisc2 } = request.body;
            const { CodDisc3 } = request.body;
        
            let sqlRegister = 'insert into curso values (?, ?, ?, ?, ?)';
        
            db.query(sqlRegister, [CodCurso, Nome, CodDisc1, CodDisc2, CodDisc3], (err, result) => {
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
            let sqlGet = 'select * from curso order by Nome';

            db.query(sqlGet, (err, result) => {
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
            let sqlSearch = "select * from curso where Nome like '%" + id + "%'";

            db.query(sqlSearch, [id], (err, result) => {
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
        let sqlSelect = "select * from curso where CodCurso = ?";

        db.query(sqlSelect, [id], (err, result) => {
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
