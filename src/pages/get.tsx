import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Loader from '../components/Loader';

interface IGetAlunos {
  Matricula: number;
  Nome: string;
  Endereco: string;
  Cidade: string;
  CodCurso: string;
}

interface IGetCursos {
  Nome_Disciplina: string;
  CodDisciplina: number;
}

interface IGetDisciplinas {
  CodCurso: number;
  Nome: string;
  CodDisc1: number;
  CodDisc2: number;
  CodDisc3: number;
}

export default function get() {
  const [getAlunos, setGetAlunos] = useState<any>();
  const [getDisciplinas, setGetDisciplinas] = useState<any>();
  const [getCursos, setGetCursos] = useState<any>();

  useEffect(() => {
    axios.get('/api/alunos').then((response) => setGetAlunos(response.data.result));
    axios.get('/api/cursos').then((response) => setGetCursos(response.data.result));
    axios.get('/api/disciplinas').then((response) => setGetDisciplinas(response.data.result));
  }, []);

  return (
    <>
      <Head>
        <title>HostMain | get</title>
      </Head>
      <div className="fields get-field">
        <div>
          <h1>Alunos</h1>
          {typeof getAlunos !== 'undefined' ? (
            getAlunos.length > 0 ? (
              <table>
                <tbody>
                  <tr>
                    <th>Matricula</th>
                    <th>Nome</th>
                    <th>Endereço</th>
                    <th>Cidade</th>
                    <th>Código Curso</th>
                  </tr>
                  {getAlunos.map((value: IGetAlunos) => {
                    return (
                      <tr key={value.Matricula}>
                        <td>{value.Matricula}</td>
                        <td>{value.Nome}</td>
                        <td>{value.Endereco}</td>
                        <td>{value.Cidade}</td>
                        <td>{value.CodCurso}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <span>Nenhum Aluno cadastrado!</span>
            )
          ) : (
            <div className="loader-field">
              <Loader />
            </div>
          )}
        </div>
        <div>
          <h1>Disciplinas</h1>
          {typeof getDisciplinas !== 'undefined' ? (
            getDisciplinas.length > 0 ? (
              <table>
                <tbody>
                  <tr>
                    <th>Código</th>
                    <th>Nome</th>
                  </tr>
                  {getDisciplinas.map((value: IGetCursos) => {
                    return (
                      <tr key={value.CodDisciplina}>
                        <td>{value.CodDisciplina}</td>
                        <td>{value.Nome_Disciplina}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <span>Nenhuma Disciplina cadastrada!</span>
            )
          ) : (
            <div className="loader-field">
              <Loader />
            </div>
          )}
        </div>
        <div>
          <h1>Cursos</h1>
          {typeof getCursos !== 'undefined' ? (
            getCursos.length > 0 ? (
              <table>
                <tbody>
                  <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Código Disciplina 1</th>
                    <th>Código Disciplina 2</th>
                    <th>Código Disciplina 3</th>
                  </tr>
                  {getCursos.map((value: IGetDisciplinas) => {
                    return (
                      <tr key={value.CodCurso}>
                        <td>{value.CodCurso}</td>
                        <td>{value.Nome}</td>
                        <td>{value.CodDisc1}</td>
                        <td>{value.CodDisc2}</td>
                        <td>{value.CodDisc3}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <span>Nenhum Curso cadastrado!</span>
            )
          ) : (
            <div className="loader-field">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
