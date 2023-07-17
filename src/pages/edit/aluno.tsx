import React, { useEffect, useContext, FormEvent, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/layout';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';

export default function Aluno() {
  const { handleChangeData, data, setData, editAlunos }: any = useContext(Context);

  const matricula = editAlunos[0].Matricula;
  const nome = editAlunos[0].Nome;
  const endereco = editAlunos[0].Endereco;
  const cidade = editAlunos[0].Cidade;
  const codcurso = editAlunos[0].CodCurso;

  const router = useRouter();

  const [isActiveSaveButton, setIsActiveSaveButton] = useState<boolean>(false);

  function handleSaveButton(data: any) {
    setIsActiveSaveButton(false);
    if (data.error) {
      toast.error(data.msg, {
        theme: 'colored',
      });
    }
    toast.success(data.msg, {
      theme: 'colored',
    });
    return handleCancelButton();
  }

  function handleCancelButton() {
    setTimeout(() => {
      router.push('/edit');
      if (window.innerWidth > 800) {
        document.querySelector<any | null>('.position-section').style.width = '87%';
      } else {
        document.querySelector<any | null>('.position-section').style.width = '97%';
      }
    }, 500);
  }

  function handleForm(event: FormEvent) {
    event.preventDefault();
    setIsActiveSaveButton(true);
    axios
      .put('/api/alunos/edit', {
        matricula: matricula,
        Nome: data.nome_aluno,
        Endereco: data.endereco_aluno,
        Cidade: data.cidade_aluno,
        CodCurso: data.codigo_curso_aluno,
      })
      .then((response: any) => handleSaveButton(response.data));
  }

  useEffect(() => {
    setData({
      nome_aluno: nome,
      endereco_aluno: endereco,
      cidade_aluno: cidade,
      codigo_curso_aluno: codcurso,
    });
  }, []);

  useEffect(() => {
    if (editAlunos[0].Matricula === '') router.push('/edit');
  }, []);

  if (typeof document !== 'undefined') {
    document.querySelector<any | null>('.position-section').style.width = '100%';
  }

  return (
    <div id="modal">
      <div>
        <form onSubmit={handleForm}>
          <h1>Alterar Aluno</h1>
          <div>
            <label htmlFor="input-matricula">Matricula</label>
            <input
              onChange={handleChangeData}
              name="matricula"
              value={matricula}
              id="input-matricula"
              className="input-text"
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
              defaultValue={nome}
              id="input-nome"
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
              defaultValue={endereco}
              id="input-endereco"
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
              defaultValue={cidade}
              id="input-cidade"
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
              defaultValue={codcurso}
              id="input-codigo-curso"
              className="input-text"
              type="text"
              pattern="\d*"
              maxLength={2}
              title="Apenas números com 2 dígitos"
              placeholder="Digite o código do curso"
              required
            />
          </div>
          <div className="buttons-field">
            <input
              onClick={handleCancelButton}
              name="btn_submit_2"
              className="btn-submit"
              type="reset"
              value="Cancelar"
            />
            <button className="btn-submit" type="submit">
              {isActiveSaveButton ? <Loader /> : 'Salvar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
