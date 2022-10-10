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
    } else {
        response.setHeader('Allow', ['GET', 'PUT'])
        response.status(405).end(`Method ${method} Not Allowed`)
    }
}