import React, { FormEvent, useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../context/layout';
import Head from 'next/head';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';

interface IDeleteButton {
  isActive: boolean;
  whichActive?: string;
}

export default function Delete() {
  const { handleChangeData, data } = useContext(Context);

  const [isActiveDeleteButton, setIsActiveDeleteButton] = useState<IDeleteButton>({ isActive: false });

  function handleDeleteButton(name: string, data: any) {
    setIsActiveDeleteButton({ isActive: false, whichActive: name });
    if (data.concluded === false) {
      return toast.error(data.msg, {
        theme: 'colored',
      });
    }
    return toast.success(data.msg, {
      theme: 'colored',
    });
  }

  function handleFormAlunos(event: FormEvent) {
    event.preventDefault();
    setIsActiveDeleteButton({ isActive: true, whichActive: 'aluno' });
    axios.delete(`/api/alunos/${data.matricula_delete}`).then((response: any) => handleDeleteButton('aluno', response.data));
  }

  function handleFormDisciplinas(event: FormEvent) {
    event.preventDefault();
    setIsActiveDeleteButton({ isActive: true, whichActive: 'disciplina' });
    axios.delete(`/api/disciplinas/${data.id_disciplina_delete}`).then((response: any) => handleDeleteButton('disciplina', response.data));
  }

  function handleFormCursos(event: FormEvent) {
    event.preventDefault();
    setIsActiveDeleteButton({ isActive: true, whichActive: 'curso' });
    axios.delete(`/api/cursos/${data.codigo_curso_delete}`).then((response: any) => handleDeleteButton('curso', response.data));
  }

  return (
    <>
      <Head>
        <title>HostMain | Delete</title>
      </Head>
      <div className="fields delete-field">
        <div>
          <form onSubmit={handleFormAlunos}>
            <h1>Excluir Alunos</h1>
            <div>
              <label htmlFor="input-matricula-delete">Matrícula Aluno</label>
              <input
                onChange={handleChangeData}
                name="matricula_delete"
                id="input-matricula-delete"
                className="input-number input-text"
                type="text"
                maxLength={5}
                pattern="\d*"
                title="Digite a Matrícula com 5 dígitos"
                placeholder="Digite a Matricula do aluno"
                required
              />
            </div>
            <button className="btn-submit-delete" type="submit">
              {isActiveDeleteButton?.whichActive === 'aluno' && isActiveDeleteButton.isActive ? (
                <Loader />
              ) : (
                'Finalizar'
              )}
            </button>
          </form>
        </div>
        <div>
          <form onSubmit={handleFormDisciplinas}>
            <h1>Excluir Disciplinas</h1>
            <div>
              <label htmlFor="input-id-delete">Código Disciplina</label>
              <input
                onChange={handleChangeData}
                name="id_disciplina_delete"
                id="input-id-delete"
                className="input-number input-text"
                type="text"
                maxLength={2}
                pattern="\d*"
                title="Apenas números com 2 dígitos"
                placeholder="Digite o Código da Disciplina"
                required
              />
            </div>
            <button className="btn-submit-delete" type="submit">
              {isActiveDeleteButton?.whichActive === 'disciplina' && isActiveDeleteButton.isActive ? (
                <Loader />
              ) : (
                'Finalizar'
              )}
            </button>
          </form>
        </div>
        <div>
          <form onSubmit={handleFormCursos}>
            <h1>Excluir Cursos</h1>
            <div>
              <label htmlFor="input-codigo-curso-delete">Código Curso</label>
              <input
                onChange={handleChangeData}
                name="codigo_curso_delete"
                id="input-codigo-curso-delete"
                className="input-number input-text"
                type="text"
                maxLength={2}
                title="Apenas números com 2 dígitos"
                pattern="\d*"
                placeholder="Digite o Código do Curso"
                required
              />
            </div>
            <button className="btn-submit-delete" type="submit">
              {isActiveDeleteButton?.whichActive === 'curso' && isActiveDeleteButton.isActive ? (
                <Loader />
              ) : (
                'Finalizar'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
