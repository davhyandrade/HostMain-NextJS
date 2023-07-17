import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  const DATABASE_URL: any = process.env.DATABASE_URL;

  const db = mysql.createConnection(DATABASE_URL);

  const { method } = request;

  switch (method) {
    case 'GET':
      let sqlGet = 'select * from disciplinas order by CodDisciplina';

      db.query(sqlGet, (error, result) => {
        if (error) {
          return response.status(500).json({ error });
        } else {
          return response.status(200).json({ result });
        }
      });
      break;
    case 'POST':
      const { CodDisciplina } = request.body;
      const { Nome_Disciplina } = request.body;

      let sqlExists = `select * from disciplinas where CodDisciplina = ${CodDisciplina}`;

      db.query(sqlExists, (error, result) => {
        if (error) {
          return response.status(500).json({ error });
        }
        if (result.length > 0) {
          return response.json({ msg: 'Não é possível cadastrar uma disciplina com um código que já exista!', result, concluded: false });
        }
        
        let sqlRegister = 'insert into disciplinas values (?, ?)';
  
        db.query(sqlRegister, [CodDisciplina, Nome_Disciplina], (error, result) => {
          if (error) {
            return response.status(500).json({ error });
          }
          if (result.affectedRows === 0) {
            return response.json({ msg: 'Disciplina não cadastrado!', result, concluded: false });
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
