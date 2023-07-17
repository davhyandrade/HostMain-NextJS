import React, { useEffect, useContext, FormEvent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Context } from '../../context/layout';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';

export default function Disciplina() {
  const { handleChangeData, data, setData, editDisciplinas }: any = useContext(Context);

  const id = editDisciplinas[0].CodDisciplina;
  const nome = editDisciplinas[0].Nome_Disciplina;

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
      .put('/api/disciplinas/edit', {
        CodDisciplina: id,
        Nome_Disciplina: data.nome_disciplina,
      })
      .then((response: any) => handleSaveButton(response.data));
  }

  useEffect(() => {
    setData({
      nome_disciplina: nome,
    });
  }, []);

  useEffect(() => {
    if (editDisciplinas[0] === '') router.push('/edit');
  }, []);

  if (typeof document !== 'undefined') {
    document.querySelector<any | null>('.position-section').style.width = '100%';
  }

  return (
    <div id="modal">
      <div>
        <form onSubmit={handleForm}>
          <h1>Alterar Disciplinas</h1>
          <div>
            <label htmlFor="input-nome-disciplina">Nome</label>
            <input
              onChange={handleChangeData}
              name="nome_disciplina"
              defaultValue={nome}
              id="input-nome-disciplina"
              className="input-text"
              type="text"
              placeholder="Digite o nome da disciplina"
              required
            />
          </div>
          <div>
            <label htmlFor="input-codigo-disciplina">Código</label>
            <input
              name="codigo_disciplina"
              value={id}
              id="input-codigo-disciplina"
              className="input-number input-text"
              type="text"
              placeholder="Digite o código da disciplina"
              pattern="\d*"
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
