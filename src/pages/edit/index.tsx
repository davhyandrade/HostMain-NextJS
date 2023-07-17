import React, { FormEvent, useContext, useState } from 'react';
import { Context } from '../../context/layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';

interface IDeleteButton {
  isActive: boolean;
  whichActive?: string;
}

export default function Edit() {
  const { handleChangeData, data, setEditAlunos, setEditCursos, setEditDisciplinas }: any = useContext(Context);

  const router = useRouter();

  const [isActiveEditButton, setIsActiveEditButton] = useState<IDeleteButton>({ isActive: false });

  function handleEditButton(name: string, data: any) {
    setIsActiveEditButton({ isActive: false, whichActive: name });
    switch (name) {
      case 'aluno':
        setEditAlunos(data);
        break;
      case 'curso':
        setEditCursos(data);
        break;
      case 'disciplina':
        setEditDisciplinas(data);
        break;
      default:
        break;
    }
    if (data.concluded === false) {
      return toast.error(data.msg, {
        theme: 'colored',
      });
    }
    setTimeout(() => {
      router.push(`/edit/${name}`);
    }, 0);
  }

  async function handleFormAlunos(event: FormEvent) {
    event.preventDefault();
    setIsActiveEditButton({ isActive: true, whichActive: 'aluno' });
    await axios
      .post(`/api/alunos/edit/${data.matricula_edit}`)
      .then((response: any) => handleEditButton('aluno', response.data));
  }

  async function handleFormDisciplinas(event: FormEvent) {
    event.preventDefault();
    setIsActiveEditButton({ isActive: true, whichActive: 'disciplina' });
    await axios
      .post(`/api/disciplinas/edit/${data.id_disciplina_edit}`)
      .then((response: any) => handleEditButton('disciplina', response.data));
  }

  async function handleFormCursos(event: FormEvent) {
    event.preventDefault();
    setIsActiveEditButton({ isActive: true, whichActive: 'curso' });
    await axios
      .post(`/api/cursos/edit/${data.codigo_curso_edit}`)
      .then((response: any) => handleEditButton('curso', response.data));
  }

  return (
    <>
      <Head>
        <title>HostMain | Edit</title>
      </Head>
      <div className="fields edit-field">
        <div>
          <form onSubmit={handleFormAlunos}>
            <h1>Alterar Alunos</h1>
            <div>
              <label htmlFor="input-matricula-edit">Matrícula Aluno</label>
              <input
                onChange={handleChangeData}
                name="matricula_edit"
                id="input-matricula-edit"
                maxLength={5}
                className="input-number input-text"
                type="text"
                pattern="\d*"
                title="Digite a Matrícula com 5 dígitos"
                placeholder="Digite a matrícula do aluno"
                required
              />
            </div>
            <button className="btn-submit-edit" type="submit">
              {isActiveEditButton?.whichActive === 'aluno' && isActiveEditButton.isActive ? <Loader /> : 'Procurar'}
            </button>
          </form>
        </div>
        <div>
          <form onSubmit={handleFormDisciplinas}>
            <h1>Alterar Disciplinas</h1>
            <div>
              <label htmlFor="input-id-edit">Código Disciplina</label>
              <input
                onChange={handleChangeData}
                name="id_disciplina_edit"
                id="input-id-edit"
                className="input-number input-text"
                type="text"
                pattern="\d*"
                maxLength={2}
                title="Apenas números com 2 dígitos"
                placeholder="Digite o código da disciplina"
                required
              />
            </div>
            <button className="btn-submit-edit" type="submit">
              {isActiveEditButton?.whichActive === 'disciplina' && isActiveEditButton.isActive ? (
                <Loader />
              ) : (
                'Procurar'
              )}
            </button>
          </form>
        </div>
        <div>
          <form onSubmit={handleFormCursos}>
            <h1>Alterar Cursos</h1>
            <div>
              <label htmlFor="input-codigo-curso-edit">Código Curso</label>
              <input
                onChange={handleChangeData}
                name="codigo_curso_edit"
                id="input-codigo-curso-edit"
                className="input-number input-text"
                type="text"
                pattern="\d*"
                maxLength={2}
                title="Apenas números com 2 dígitos"
                placeholder="Digite o código do curso"
                required
              />
            </div>
            <button className="btn-submit-edit" type="submit">
              {isActiveEditButton?.whichActive === 'curso' && isActiveEditButton.isActive ? <Loader /> : 'Procurar'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
