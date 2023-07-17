import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  const DATABASE_URL: any = process.env.DATABASE_URL;

  const db = mysql.createConnection(DATABASE_URL);

  const { method } = request;

  switch (method) {
    case 'GET':
      let sqlGet = 'select * from aluno order by matricula';

      db.query(sqlGet, (error, result) => {
        if (error) {
          return response.status(500).json({ error });
        } else {
          return response.status(200).json({ result });
        }
      });
      break;
    case 'POST':
      const { matricula } = request.body;
      const { Nome } = request.body;
      const { Endereco } = request.body;
      const { Cidade } = request.body;
      const { CodCurso } = request.body;

      let sqlExists = `select * from aluno where matricula = ${matricula}`;

      db.query(sqlExists, (error, result) => {
        if (error) {
          return response.status(500).json({ error });
        }
        if (result.length > 0) {
          return response.json({ msg: 'Não é possível cadastrar um aluno com uma matrícula já exista!', result, concluded: false });
        }
        
        let sqlRegister = 'insert into aluno values (?, ?, ?, ?, ?)';
  
        db.query(sqlRegister, [matricula, Nome, Endereco, Cidade, CodCurso], (error, result) => {
          if (error) {
            return response.status(500).json({ error });
          }
          if (result.affectedRows === 0) {
            return response.json({ msg: 'Aluno não cadastrado!', result, concluded: false });
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
