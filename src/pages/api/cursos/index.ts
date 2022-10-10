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
    
    switch (method) {
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
        default:
            response.setHeader('Allow', ['GET', 'PUT'])
            response.status(405).end(`Method ${method} Not Allowed`)
    }
}