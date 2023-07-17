import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  const DATABASE_URL: any = process.env.DATABASE_URL;

  const db = mysql.createConnection(DATABASE_URL);

  const { method } = request;

  const { id } = request.query;

  switch (method) {
    case 'DELETE':
      let sqlDelete = 'delete from curso where CodCurso = ?';

      db.query(sqlDelete, [id], (error, result) => {
        if (error) {
          return response.status(500).json({ error });
        }
        if (result.affectedRows === 0) {
          return response.json({ msg: 'Curso inexistente!', result, concluded: false });
        }
        return response.status(200).json({ msg: 'Excluido com sucesso!', result });
      });
      break;
    case 'POST':
      let sqlSearch = "select * from curso where Nome like '%" + id + "%'";

      db.query(sqlSearch, [id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          response.send(result);
        }
      });
      break;
    default:
      response.setHeader('Allow', ['GET', 'PUT']);
      response.status(405).end(`Method ${method} Not Allowed`);
  }
}
