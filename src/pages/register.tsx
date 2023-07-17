import React, { FormEvent, useContext, useState } from 'react';
import { Context } from '../context/layout';
import axios from 'axios';
import Head from 'next/head';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

interface IRegisterButton {
  isActive: boolean;
  whichActive?: string;
}

export default function Register() {
  const { handleChangeData, data } = useContext(Context);

  const [isActiveRegisterButton, setIsActiveRegisterButton] = useState<IRegisterButton>({ isActive: false });

  function handleRegisterButton(name: string, data: any) {
    setIsActiveRegisterButton({ isActive: false, whichActive: name });
    console.log(data);
    console.log(data);
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
    setIsActiveRegisterButton({ isActive: true, whichActive: 'aluno' });
    axios
      .post('/api/alunos', {
        matricula: data.matricula,
        Nome: data.nome_aluno,
        Endereco: data.endereco_aluno,
        Cidade: data.cidade_aluno,
        CodCurso: data.codigo_curso_aluno,
      })
      .then((response: any) => handleRegisterButton('aluno', response.data));
  }

  function handleFormDisciplinas(event: FormEvent) {
    event.preventDefault();
    setIsActiveRegisterButton({ isActive: true, whichActive: 'disciplina' });
    axios
      .post('/api/disciplinas', {
        CodDisciplina: data.codigo_disciplina,
        Nome_Disciplina: data.nome_disciplina,
      })
      .then((response: any) => handleRegisterButton('disciplina', response.data));
  }

  function handleFormCursos(event: FormEvent) {
    event.preventDefault();
    setIsActiveRegisterButton({ isActive: true, whichActive: 'curso' });
    axios
      .post('/api/cursos', {
        CodCurso: data.codigo_curso,
        Nome: data.nome_curso,
        CodDisc1: data.codigo_disciplina_1,
        CodDisc2: data.codigo_disciplina_2,
        CodDisc3: data.codigo_disciplina_3,
      })
      .then((response: any) => handleRegisterButton('curso', response.data));
  }

  return (
    <>
      <Head>
        <title>HostMain | Register</title>
      </Head>
      <div className="fields register-field">
        <div>
          <form onSubmit={handleFormAlunos}>
            <h1>Cadastro Aluno</h1>
            <div>
              <label htmlFor="input-matricula">Matricula</label>
              <input
                onChange={handleChangeData}
                name="matricula"
                className="input-number input-text"
                type="text"
                maxLength={5}
                pattern="\d*"
                title="Digite a Matrícula com 5 dígitos"
                placeholder="Digite o número da sua matrícula"
                required
              />
            </div>
            <div>
              <label htmlFor="input-nome">Nome</label>
              <input
                onChange={handleChangeData}
                name="nome_aluno"
                className="input-text"
                type="text"
                placeholder="Digite o seu nome"
                required
              />
            </div>
            <div>
              <label htmlFor="input-endereco">Endereço</label>
              <input
                onChange={handleChangeData}
                name="endereco_aluno"
                className="input-text"
                type="text"
                placeholder="Digite o seu endereço"
                required
              />
            </div>
            <div>
              <label htmlFor="input-cidade">Cidade</label>
              <input
                onChange={handleChangeData}
                name="cidade_aluno"
                className="input-text"
                type="text"
                placeholder="Digite o seu cidade"
                required
              />
            </div>
            <div>
              <label htmlFor="input-codigo-curso">Codigo Curso</label>
              <input
                onChange={handleChangeData}
                name="codigo_curso_aluno"
                className="input-number input-text"
                type="text"
                pattern="\d*"
                maxLength={2}
                title="Apenas números com 2 dígitos"
                placeholder="Digite o código do curso"
                required
              />
            </div>
            <button className="btn-submit" type="submit">
              {isActiveRegisterButton?.whichActive === 'aluno' && isActiveRegisterButton.isActive ? (
                <Loader />
              ) : (
                'Cadastrar'
              )}
            </button>
          </form>
        </div>
        <div>
          <form onSubmit={handleFormDisciplinas}>
            <h1>Cadastro Disciplinas</h1>
            <div>
              <label htmlFor="input-nome-disciplina">Nome</label>
              <input
                onChange={handleChangeData}
                name="nome_disciplina"
                className="input-text"
                type="text"
                placeholder="Digite o nome da disciplina"
                required
              />
            </div>
            <div>
              <label htmlFor="input-codigo-disciplina">Código</label>
              <input
                onChange={handleChangeData}
                name="codigo_disciplina"
                className="input-number input-text"
                type="text"
                maxLength={2}
                title="Apenas números com 2 dígitos"
                placeholder="Digite o código da disciplina"
                pattern="\d*"
                required
              />
            </div>
            <button className="btn-submit" type="submit">
              {isActiveRegisterButton?.whichActive === 'disciplina' && isActiveRegisterButton.isActive ? (
                <Loader />
              ) : (
                'Cadastrar'
              )}
            </button>
          </form>
        </div>
        <div>
          <form onSubmit={handleFormCursos}>
            <h1>Cadastro Cursos</h1>
            <div>
              <label htmlFor="input-nome-curso">Nome</label>
              <input
                onChange={handleChangeData}
                name="nome_curso"
                className="input-text"
                type="text"
                placeholder="Digite o nome do curso"
                required
              />
            </div>
            <div>
              <label htmlFor="input-codigo-curso">Código</label>
              <input
                onChange={handleChangeData}
                name="codigo_curso"
                className="input-number input-text"
                type="text"
                placeholder="Digite o codigo do curso"
                maxLength={2}
                title="Apenas números com 2 dígitos"
                pattern="\d*"
                required
              />
            </div>
            <div>
              <label htmlFor="input-codigo-disciplina-1">Código Disciplina 1</label>
              <input
                onChange={handleChangeData}
                name="codigo_disciplina_1"
                className="input-number input-text"
                type="text"
                placeholder="Digite o codigo da disciplinas 1"
                pattern="\d*"
                maxLength={2}
                title="Apenas números com 2 dígitos"
                required
              />
            </div>
            <div>
              <label htmlFor="input-codigo-disciplina-2">Código Disciplina 2</label>
              <input
                onChange={handleChangeData}
                name="codigo_disciplina_2"
                className="input-number input-text"
                type="text"
                placeholder="Digite o codigo da disciplinas 2"
                pattern="\d*"
                maxLength={2}
                title="Apenas números com 2 dígitos"
                required
              />
            </div>
            <div>
              <label htmlFor="input-codigo-disciplina-3">Código Disciplina 3</label>
              <input
                onChange={handleChangeData}
                name="codigo_disciplina_3"
                className="input-number input-text"
                type="text"
                placeholder="Digite o codigo da disciplinas 3"
                pattern="\d*"
                maxLength={2}
                title="Apenas números com 2 dígitos"
                required
              />
            </div>
            <button className="btn-submit" type="submit">
              {isActiveRegisterButton?.whichActive === 'curso' && isActiveRegisterButton.isActive ? (
                <Loader />
              ) : (
                'Cadastrar'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
