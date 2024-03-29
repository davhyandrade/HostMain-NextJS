import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  const DATABASE_URL: any = process.env.DATABASE_URL;

  const db = mysql.createConnection(DATABASE_URL);

  const { method } = request;

  if (method === 'PUT') {
    const { CodCurso } = request.body;
    const { Nome } = request.body;
    const { CodDisc1 } = request.body;
    const { CodDisc2 } = request.body;
    const { CodDisc3 } = request.body;

    let sql = 'update curso set Nome = ?, CodDisc1 = ?, CodDisc2 = ?, CodDisc3 = ? where CodCurso = ?';

    db.query(sql, [Nome, CodDisc1, CodDisc2, CodDisc3, CodCurso], (error, result) => {
      if (error) {
        return response.json({ msg: 'Não foi possível alterar as informações!', error });
      }
      return response.status(200).json({ msg: 'Informações alteradas com sucesso!', result });
    });
  } else {
    response.setHeader('Allow', ['GET', 'PUT']);
    response.status(405).end(`Method ${method} Not Allowed`);
  }
}
