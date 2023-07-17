import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  const DATABASE_URL: any = process.env.DATABASE_URL;

  const db = mysql.createConnection(DATABASE_URL);

  const { method } = request;

  if (method === 'PUT') {
    const { CodDisciplina } = request.body;
    const { Nome_Disciplina } = request.body;

    let sql = 'update disciplinas set Nome_Disciplina = ? where CodDisciplina = ?';

    db.query(sql, [Nome_Disciplina, CodDisciplina], (error, result) => {
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
