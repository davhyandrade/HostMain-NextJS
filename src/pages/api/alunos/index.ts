import type { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql';

export default function handler(request: NextApiRequest, response: NextApiResponse) {

    const db = mysql.createConnection({
        host: "bdescola.cv3u8hudbuno.us-east-1.rds.amazonaws.com", 
        user: "admin", 
        password: "Dandrade06!", 
        database: "bd_escola", 
    })

    const { method } = request;
    
    switch (method) {
        case 'GET':
            let sqlListar = 'select * from aluno order by nome';

            db.query(sqlListar, (err, result) => {
                if(err) {
                    console.log(err);
                } else {
                    response.send(result);
                }
            })
            break
        case 'DELETE':
            const { matricula_delete } = request.body;

            let sqlDelete = 'delete from aluno where matricula = ?';
        
            db.query(sqlDelete, [matricula_delete], (err, result) => {
                if(err) {
                    console.log(err);
                } else {
                    response.send(result);
                } 
            })
            break
        case 'POST':
            const { matricula } = request.body;
            const { Nome } = request.body;
            const { Endereco } = request.body;
            const { Cidade } = request.body;
            const { CodCurso } = request.body;
        
            let sqlCadastrar = 'insert into aluno values (?, ?, ?, ?, ?)';
        
            db.query(sqlCadastrar, [matricula, Nome, Endereco, Cidade, CodCurso], (err, result) => {
                console.log(err);
            })
            break
        default:
            response.setHeader('Allow', ['GET', 'PUT'])
            response.status(405).end(`Method ${method} Not Allowed`)
    }
}