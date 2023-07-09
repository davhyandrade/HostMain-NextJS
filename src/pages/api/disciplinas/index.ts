import type { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
    const DATABASE_URL: any = process.env.DATABASE_URL;

    const db = mysql.createConnection(DATABASE_URL)
    
    const { method } = request;
    
    switch (method) {
        case 'GET':
            let sqlListar = 'select * from disciplinas order by Nome_Disciplina';

            db.query(sqlListar, (err, result) => {
                if(err) {
                    console.log(err);
                } else {
                    response.send(result);
                }
            })
            break
        case 'POST':
            const { CodDisciplina } = request.body;
            const { Nome_Disciplina } = request.body;
        
            let sqlCadastrar = 'insert into disciplinas values (?, ?)';
        
            db.query(sqlCadastrar, [CodDisciplina, Nome_Disciplina], (err, result) => {
                console.log(err);
            })
            break
        default:
            response.setHeader('Allow', ['GET', 'PUT'])
            response.status(405).end(`Method ${method} Not Allowed`)
    }
}