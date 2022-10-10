import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { divContext } from "../../components/MainContainer";

export default function Cursos() {
    const { handleChangeData } = useContext(divContext);
    const { data } = useContext(divContext);
    const { setData } = useContext(divContext);
    const { alterarCursos } = useContext(divContext);

    const codcurso = alterarCursos[0].CodCurso;
    const nome = alterarCursos[0].Nome;
    const CodDisc1 = alterarCursos[0].CodDisc1;
    const CodDisc2 = alterarCursos[0].CodDisc2;
    const CodDisc3 = alterarCursos[0].CodDisc3;

    const router = useRouter();
    
    function handleButtonCancel() {
        setTimeout(() => {
            router.push('/alterar');
            document.querySelector<any | null>('.position-section').style.width = '87%';
        }, 500);
    }

    function handleForm(event: any) {
        event.preventDefault();
        axios.put('/api/cursos/alterar', {
            CodCurso: codcurso,
            Nome: data.nome_curso,
            CodDisc1: data.codigo_disciplina_1,
            CodDisc2: data.codigo_disciplina_2,
            CodDisc3: data.codigo_disciplina_3,
        }).then((response) => { if(response.status === 200) alert('Alteração realizada com sucesso!!') });
        setTimeout(() => {
            handleButtonCancel();
        }, 1000)
    }

    useEffect(() => {
        setData({
            nome_curso: nome,
            codigo_disciplina_1: CodDisc1,
            codigo_disciplina_2: CodDisc2,
            codigo_disciplina_3: CodDisc3,
        })
    }, [])

    document.querySelector<any | null>('.position-section').style.width = '100%';

    return(
        <div id="modal">
            <div>
                <form onSubmit={handleForm}>
                <h1>Alterar Cursos</h1>
                    <div>
                        <label htmlFor="input-nome-curso">Nome</label>
                        <input onChange={handleChangeData} defaultValue={nome} name="nome_curso" id="input-nome-curso" className="input-text" type="text" placeholder="Digite o nome do curso" required />
                    </div>
                    <div>
                        <label htmlFor="input-codigo-curso">Código</label>
                        <input onChange={handleChangeData} value={codcurso} name="codigo_curso" id="input-codigo-curso" className="input-number input-text" type="text" placeholder="Digite o codigo do curso" pattern="\d*" required />
                    </div>
                    <div>
                        <label htmlFor="input-codigo-disciplina-1">Código Disciplina 1</label>
                        <input onChange={handleChangeData} defaultValue={CodDisc1} name="codigo_disciplina_1" id="input-codigo-disciplina-1" className="input-number input-text" type="text" placeholder="Digite o codigo da disciplinas 1" pattern="\d*" maxLength={2} title="Apenas números com 2 dígitos" required />
                    </div>
                    <div>
                        <label htmlFor="input-codigo-disciplina-2">Código Disciplina 2</label>
                        <input onChange={handleChangeData} defaultValue={CodDisc2} name="codigo_disciplina_2" id="input-codigo-disciplina-2" className="input-number input-text" type="text" placeholder="Digite o codigo da disciplinas 2" pattern="\d*" maxLength={2} title="Apenas números com 2 dígitos" required />
                    </div>
                    <div>
                        <label htmlFor="input-codigo-disciplina-3">Código Disciplina 3</label>
                        <input onChange={handleChangeData} defaultValue={CodDisc3} name="codigo_disciplina_3" id="input-codigo-disciplina-3" className="input-number input-text" type="text" placeholder="Digite o codigo da disciplinas 3" pattern="\d*" maxLength={2} title="Apenas números com 2 dígitos" required />
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