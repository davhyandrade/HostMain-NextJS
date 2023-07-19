import React, { useEffect, useContext, FormEvent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Context } from '../../context/layout';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`    
  .position-section {
    width: 100% !important;
  }
`;

export default function Curso() {
  const { handleChangeData, data, setData, editCursos }: any = useContext(Context);

  const codcurso = editCursos[0].CodCurso;
  const nome = editCursos[0].Nome;
  const CodDisc1 = editCursos[0].CodDisc1;
  const CodDisc2 = editCursos[0].CodDisc2;
  const CodDisc3 = editCursos[0].CodDisc3;

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

  const handleCancelButton = () => router.push('/edit');

  function handleForm(event: FormEvent) {
    event.preventDefault();
    setIsActiveSaveButton(true);
    axios
      .put('/api/cursos/edit', {
        CodCurso: codcurso,
        Nome: data.nome_curso,
        CodDisc1: data.codigo_disciplina_1,
        CodDisc2: data.codigo_disciplina_2,
        CodDisc3: data.codigo_disciplina_3,
      })
      .then((response: any) => handleSaveButton(response.data));
  }

  useEffect(() => {
    setData({
      nome_curso: nome,
      codigo_disciplina_1: CodDisc1,
      codigo_disciplina_2: CodDisc2,
      codigo_disciplina_3: CodDisc3,
    });
  }, []);

  useEffect(() => {
    if (editCursos[0].CodCurso === '') router.push('/edit');
  }, []);

  if (typeof document !== 'undefined') {
    document.querySelector<any | null>('.position-section').style.width = '100%';
  }

  return (
    <>
      <GlobalStyles />
      <div id="modal">
        <div>
          <form onSubmit={handleForm}>
            <h1>Alterar Cursos</h1>
            <div>
              <label htmlFor="input-nome-curso">Nome</label>
              <input
                onChange={handleChangeData}
                defaultValue={nome}
                name="nome_curso"
                id="input-nome-curso"
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
                value={codcurso}
                name="codigo_curso"
                id="input-codigo-curso"
                className="input-number input-text"
                type="text"
                placeholder="Digite o codigo do curso"
                pattern="\d*"
                required
              />
            </div>
            <div>
              <label htmlFor="input-codigo-disciplina-1">Código Disciplina 1</label>
              <input
                onChange={handleChangeData}
                defaultValue={CodDisc1}
                name="codigo_disciplina_1"
                id="input-codigo-disciplina-1"
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
                defaultValue={CodDisc2}
                name="codigo_disciplina_2"
                id="input-codigo-disciplina-2"
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
                defaultValue={CodDisc3}
                name="codigo_disciplina_3"
                id="input-codigo-disciplina-3"
                className="input-number input-text"
                type="text"
                placeholder="Digite o codigo da disciplinas 3"
                pattern="\d*"
                maxLength={2}
                title="Apenas números com 2 dígitos"
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
    </>
  );
}
