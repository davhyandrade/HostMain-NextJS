import type { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
    const db = mysql.createPool({
        host: "bdescola.cv3u8hudbuno.us-east-1.rds.amazonaws.com", 
        user: "admin", 
        password: "Dandrade06!", 
        database: "bd_escola", 
    })

    const { method } = request;
    
    const { id } = request.query;

    if(method === 'POST') {
        let sqlSelecionar = "select * from aluno where matricula = ?";

        db.query(sqlSelecionar, [id], (err, result) => {
            if(err) {
                console.log(err);
            } else {
                response.send(result);
            }       
        })
    } else {
        response.setHeader('Allow', ['GET', 'PUT'])
        response.status(405).end(`Method ${method} Not Allowed`)
    }
}