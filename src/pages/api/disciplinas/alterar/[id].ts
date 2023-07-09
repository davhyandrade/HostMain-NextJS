import type { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
    const DATABASE_URL: any = process.env.DATABASE_URL;

    const db = mysql.createConnection(DATABASE_URL)

    const { method } = request;
    
    const { id } = request.query;

    if(method === 'POST') {
        let sqlSelecionar = "select * from disciplinas where CodDisciplina = ?";

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