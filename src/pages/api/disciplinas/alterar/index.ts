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

    if(method === 'PUT') {
        const { CodDisciplina } = request.body;
        const { Nome_Disciplina } = request.body;
    
        let sql = 'update disciplinas set Nome_Disciplina = ? where CodDisciplina = ?';
    
        db.query(sql, [Nome_Disciplina, CodDisciplina], (err, result) => {
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