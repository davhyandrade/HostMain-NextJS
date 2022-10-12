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