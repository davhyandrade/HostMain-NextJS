import type { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
    const DATABASE_URL: any = process.env.DATABASE_URL;

    const db = mysql.createConnection(DATABASE_URL)

    const { method } = request;
    
    const { id } = request.query;

    switch (method) {
        case 'DELETE':
            let sqlDelete = 'delete from aluno where matricula = ?';
        
            db.query(sqlDelete, [id], (err, result) => {
                if(err) {
                    console.log(err);
                } else {
                    response.send(result);
                } 
            })
            break
        case 'POST':
            let sqlPesquisar = "select * from aluno where Nome like '%" + id + "%'";
        
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