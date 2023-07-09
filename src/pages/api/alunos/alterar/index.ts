import type { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
    const DATABASE_URL: any = process.env.DATABASE_URL;

    const db = mysql.createConnection(DATABASE_URL)

    const { method } = request;

    if(method === 'PUT') {
        const { matricula } = request.body;
        const { Nome } = request.body;
        const { Endereco } = request.body;
        const { Cidade } = request.body;
        const { CodCurso } = request.body;
    
        let sql = 'update aluno set Nome = ?, Endereco = ?, Cidade = ?, CodCurso = ? where matricula = ?';
    
        db.query(sql, [Nome, Endereco, Cidade, CodCurso, matricula], (err, result) => {
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