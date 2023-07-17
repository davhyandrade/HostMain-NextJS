import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  const DATABASE_URL: any = process.env.DATABASE_URL;

  const db = mysql.createConnection(DATABASE_URL);

  const { method } = request;

  switch (method) {
    case 'GET':
      let sqlGet = 'select * from curso order by CodCurso';

      db.query(sqlGet, (error, result) => {
        if (error) {
          return response.status(500).json({ error });
        } else {
          return response.status(200).json({ result });
        }
      });
      break;
    case 'POST':
      const { CodCurso } = request.body;
      const { Nome } = request.body;
      const { CodDisc1 } = request.body;
      const { CodDisc2 } = request.body;
      const { CodDisc3 } = request.body;

      let sqlExists = `select * from curso where CodCurso = ${CodCurso}`;

      db.query(sqlExists, (error, result) => {
        if (error) {
          return response.status(500).json({ error });
        }
        if (result.length > 0) {
          return response.json({ msg: 'Não é possível cadastrar um curso com um código que já exista!', result, concluded: false });
        }
        
        let sqlRegister = 'insert into curso values (?, ?, ?, ?, ?)';
  
        db.query(sqlRegister, [CodCurso, Nome, CodDisc1, CodDisc2, CodDisc3], (error, result) => {
          if (error) {
            return response.status(500).json({ error });
          }
          if (result.affectedRows === 0) {
            return response.json({ msg: 'Curso não cadastrado!', result, concluded: false });
          }
          return response.status(200).json({ msg: 'Cadastrado com sucesso!', result });
        });
      });

      break;
    default:
      response.setHeader('Allow', ['GET', 'PUT']);
      response.status(405).end(`Method ${method} Not Allowed`);
  }
}
