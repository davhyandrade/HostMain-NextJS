import React, { FormEvent, useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../context/layout';
import Head from 'next/head';
import Loader from '../components/Loader';

interface ISearchAlunos {
  Matricula: number;
  Nome: string;
  Endereco: string;
  Cidade: string;
  CodCurso: number;
}

interface ISearchDisciplinas {
  CodDisciplina: number;
  Nome_Disciplina: string;
}

interface ISearchCursos {
  CodCurso: number;
  Nome: string;
  CodDisc1: number;
  CodDisc2: number;
  CodDisc3: number;
}

interface ISearchButton {
  isActive: boolean;
  whichActive?: string;
}

export default function Search() {
  const { handleChangeData, data } = useContext(Context);

  const [searchAlunos, setSearchAlunos] = useState<any>();
  const [searchDisciplinas, setSearchDisciplinas] = useState<any>();
  const [searchCursos, setSearchCursos] = useState<any>();

  const [isActiveSearchButton, setIsActiveSearchButton] = useState<ISearchButton>({ isActive: false });

  function handleSearchButton(name: string, data: any) {
    setIsActiveSearchButton({ isActive: false, whichActive: name });
    console.log(data);
    switch (name) {
      case 'aluno':
        setSearchAlunos(data);
        break;
      case 'curso':
        setSearchCursos(data);
        break;
      case 'disciplina':
        setSearchDisciplinas(data);
        break;
      default:
        break;
    }
  }

  function handleFormAlunos(event: FormEvent) {
    event.preventDefault();
    setSearchAlunos(undefined); // if there is a message not found remove it
    setIsActiveSearchButton({ isActive: true, whichActive: 'aluno' });
    axios
      .post(`/api/alunos/${data.name_search_alunos}`)
      .then((response: any) => handleSearchButton('aluno', response.data));
  }

  function handleFormDisciplinas(event: FormEvent) {
    event.preventDefault();
    setSearchDisciplinas(undefined); // if there is a message not found remove it
    setIsActiveSearchButton({ isActive: true, whichActive: 'disciplina' });
    axios
      .post(`/api/disciplinas/${data.nome_search_disciplinas}`)
      .then((response: any) => handleSearchButton('disciplina', response.data));
  }

  function handleFormCursos(event: FormEvent) {
    event.preventDefault();
    setSearchCursos(undefined); // if there is a message not found remove it
    setIsActiveSearchButton({ isActive: true, whichActive: 'curso' });
    axios
      .post(`/api/cursos/${data.name_search_cursos}`)
      .then((response: any) => handleSearchButton('curso', response.data));
  }

  return (
    <>
      <Head>
        <title>HostMain | Search</title>
      </Head>
      <div className="fields search-field">
        <div className="search-alunos">
          <form onSubmit={handleFormAlunos}>
            <h1>Pesquisar Aluno</h1>
            <div>
              <label htmlFor="input-nome-search">Nome</label>
              <input
                onChange={handleChangeData}
                name="name_search_alunos"
                id="input-nome-search"
                className="input-text"
                type="text"
                placeholder="Digite o nome do Aluno"
                required
              />
            </div>
            <button className="btn-submit-search" type="submit">
              {isActiveSearchButton?.whichActive === 'aluno' && isActiveSearchButton.isActive ? (
                <Loader />
              ) : (
                'Pesquisar'
              )}
            </button>
          </form>
          {typeof searchAlunos !== 'undefined' &&
            (searchAlunos.length > 0 ? (
              <table>
                <tbody>
                  <tr>
                    <th>Matricula</th>
                    <th>Nome</th>
                    <th>Endereço</th>
                    <th>Cidade</th>
                    <th>Código Curso</th>
                  </tr>
                  {searchAlunos.map((value: ISearchAlunos) => {
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
              <span>&ldquo;{data.name_search_alunos}&rdquo; não encontrado!</span>
            ))}
        </div>
        <div className="search-disciplinas">
          <form onSubmit={handleFormDisciplinas}>
            <h1>Pesquisar Disciplinas</h1>
            <div>
              <label htmlFor="input-nome-search">Nome</label>
              <input
                onChange={handleChangeData}
                name="nome_search_disciplinas"
                id="input-nome-search"
                className="input-text"
                type="text"
                placeholder="Digite o nome da Disciplina"
                required
              />
            </div>
            <button className="btn-submit-search" type="submit">
              {isActiveSearchButton?.whichActive === 'disciplina' && isActiveSearchButton.isActive ? (
                <Loader />
              ) : (
                'Pesquisar'
              )}
            </button>
          </form>
          {typeof searchDisciplinas !== 'undefined' &&
            (searchDisciplinas.length > 0 ? (
              <table>
                <tbody>
                  <tr>
                    <th>Código</th>
                    <th>Nome</th>
                  </tr>
                  {searchDisciplinas.map((value: ISearchDisciplinas) => {
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
              <span>&ldquo;{data.nome_search_disciplinas}&rdquo; não encontrado!</span>
            ))}
        </div>
        <div className="search-cursos">
          <form onSubmit={handleFormCursos}>
            <h1>Pesquisar Curso</h1>
            <div>
              <label htmlFor="input-nome-search">Nome</label>
              <input
                onChange={handleChangeData}
                name="name_search_cursos"
                id="input-nome-search"
                className="input-text"
                type="text"
                placeholder="Digite o nome do Curso"
                required
              />
            </div>
            <button className="btn-submit-search" type="submit">
              {isActiveSearchButton?.whichActive === 'curso' && isActiveSearchButton.isActive ? (
                <Loader />
              ) : (
                'Pesquisar'
              )}
            </button>
          </form>
          {typeof searchCursos !== 'undefined' &&
            (searchCursos.length > 0 ? (
              <table>
                <tbody>
                  <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Código Disciplina 1</th>
                    <th>Código Disciplina 2</th>
                    <th>Código Disciplina 3</th>
                  </tr>
                  {searchCursos.map((value: ISearchCursos) => {
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
              <span>&ldquo;{data.name_search_cursos}&rdquo; não encontrado!</span>
            ))}
        </div>
      </div>
    </>
  );
}
