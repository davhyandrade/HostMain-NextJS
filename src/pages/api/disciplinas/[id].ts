import type { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
    const db = mysql.createPool({
        host: "127.0.0.1", 
        user: "root", 
        password: "", 
        database: "bd_escola", 
    })

    const { method } = request;
    
    const { id } = request.query;

    switch (method) {
        case 'DELETE':
            let sqlDelete = 'delete from disciplinas where CodDisciplina = ?';

            db.query(sqlDelete, [id], (err, result) => {
                if(err) {
                    console.log(err);
                } else {
                    response.send(result);
                } 
            })
            break
        case 'POST':
            let sqlPesquisar = "select * from disciplinas where Nome_Disciplina like '%" + id + "%'";

            db.query(sqlPesquisar, [id], (err, result) => {
                if(err) {
                    console.log(err);
                } else {
                    response.send(result);
                }
            })
            break
        default:
            response.setHeader('Allow', ['GET', 'PUT'])
            response.status(405).end(`Method ${method} Not Allowed`)
    }
}