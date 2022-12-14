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
    
    const { id } = request.query;

    switch (method) {
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
        default:
            response.setHeader('Allow', ['GET', 'PUT'])
            response.status(405).end(`Method ${method} Not Allowed`)
    }
}