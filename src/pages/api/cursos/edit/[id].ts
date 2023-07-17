import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  const DATABASE_URL: any = process.env.DATABASE_URL;

  const db = mysql.createConnection(DATABASE_URL);

  const { method } = request;

  const { id } = request.query;

  if (method === 'POST') {
    let sqlSelect= 'select * from curso where CodCurso = ?';

    db.query(sqlSelect, [id], (error, result) => {
      if (error) {
        return response.status(500).json({ error });
      }
      if (result.length === 0) {
        return response.json({ msg: 'Curso não encontrado!', result, concluded: false });
      }
      return response.status(200).send(result);
    });
  } else {
    response.setHeader('Allow', ['GET', 'PUT']);
    response.status(405).end(`Method ${method} Not Allowed`);
  }
}
