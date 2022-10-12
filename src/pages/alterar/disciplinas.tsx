import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { divContext } from "../../components/MainContainer";

export default function Disciplinas() {
    const { handleChangeData } = useContext(divContext);
    const { data } = useContext(divContext);
    const { setData } = useContext(divContext);
    const { alterarDisciplinas } = useContext(divContext);

    const id = alterarDisciplinas[0].CodDisciplina;
    const nome = alterarDisciplinas[0].Nome_Disciplina;

    const router = useRouter();
    
    if(typeof alterarDisciplinas[0] === 'undefined') {
        alert('404 error: not found - Código inexistente');
        router.push('/alterar');
        window.location.reload();
    }

    function handleButtonCancel() {
        setTimeout(() => {
            router.push('/alterar');
            document.querySelector<any | null>('.position-section').style.width = '87%';
        }, 500);
    }

    function handleForm(event: any) {
        event.preventDefault();
        axios.put('/api/disciplinas/alterar', {
            CodDisciplina: id,
            Nome_Disciplina: data.nome_disciplina,
        }).then((response) => { if(response.status === 200) alert('Alteração realizada com sucesso!!') });
        setTimeout(() => {
            handleButtonCancel();
        }, 1000)
    }

    useEffect(() => {
        setData({
            nome_disciplina: nome,
        })
    }, [])

    if (typeof document !== "undefined") {
        document.querySelector<any | null>('.position-section').style.width = '100%';
    }
    return(
        <div id="modal">
            <div>
                <form onSubmit={handleForm}>
                <h1>Alterar Disciplinas</h1>
                    <div>
                        <label htmlFor="input-nome-disciplina">Nome</label>
                        <input onChange={handleChangeData} name="nome_disciplina" defaultValue={nome} id="input-nome-disciplina" className="input-text" type="text" placeholder="Digite o nome da disciplina" required />
                    </div>
                    <div>
                        <label htmlFor="input-codigo-disciplina">Código</label>
                        <input name="codigo_disciplina" value={id} id="input-codigo-disciplina" className="input-number input-text" type="text" placeholder="Digite o código da disciplina" pattern="\d*" required />
                    </div>
                    <div className="field-buttons">
                        <input onClick={handleButtonCancel} name="btn_submit_2" className="btn-submit" type="reset" value='Cancelar'/>
                        <input name="btn_submit_1" className="btn-submit" type="submit" value='Salvar'/>
                    </div>
                </form>
            </div>
        </div>
    )
}