import React, { useEffect, useContext } from "react";
import axios from "axios";
import { divContext } from "../../components/MainContainer";
import { useRouter } from "next/router";

export default function Alunos() {
    const { handleChangeData } = useContext(divContext);
    const { data } = useContext(divContext);
    const { setData } = useContext(divContext);
    const { alterarAlunos } = useContext(divContext);

    const matricula = alterarAlunos[0].Matricula;
    const nome = alterarAlunos[0].Nome;
    const endereco = alterarAlunos[0].Endereco;
    const cidade = alterarAlunos[0].Cidade;
    const codcurso = alterarAlunos[0].CodCurso;

    const router = useRouter();

    function handleButtonCancel() {
        setTimeout(() => {
            router.push('/alterar')
            document.querySelector<any | null>('.position-section').style.width = '87%';
        }, 500);
    }

    function handleForm(event: any) {
        event.preventDefault();
        axios.put('/api/alunos/alterar', {
            matricula: matricula,
            Nome: data.nome_aluno,
            Endereco: data.endereco_aluno,
            Cidade: data.cidade_aluno,
            CodCurso: data.codigo_curso_aluno,
        }).then((response) => {if(response.status === 200) alert('Alteração realizada com sucesso!!')});
        setTimeout(() => {
            handleButtonCancel();
        }, 1000)
    }

    useEffect(() => {
        setData({
            nome_aluno: nome,
            endereco_aluno: endereco,
            cidade_aluno: cidade,
            codigo_curso_aluno: codcurso,
        })
    }, [])

    if (typeof document !== "undefined") {
        document.querySelector<any | null>('.position-section').style.width = '100%';
    }

    return(
        <div id="modal">
            <div>
                <form onSubmit={handleForm}>
                    <h1>Alterar Aluno</h1>
                    <div>   
                        <label htmlFor="input-matricula">Matricula</label>
                        <input onChange={handleChangeData} name="matricula" value={matricula} id="input-matricula" className="input-text" type="text" maxLength={5} pattern="\d*" title="Digite a Matrícula com 5 dígitos"placeholder="Digite o número da sua matrícula" required />
                    </div>
                    <div>
                        <label htmlFor="input-nome">Nome</label>
                        <input onChange={handleChangeData} name="nome_aluno" defaultValue={nome} id="input-nome" className="input-text" type="text" placeholder="Digite o seu nome" required />
                    </div>
                    <div>
                        <label htmlFor="input-endereco">Endereço</label>
                        <input onChange={handleChangeData} name="endereco_aluno" defaultValue={endereco} id="input-endereco" className="input-text" type="text" placeholder="Digite o seu endereço" required />
                    </div>
                    <div>
                        <label htmlFor="input-cidade">Cidade</label>
                        <input onChange={handleChangeData} name="cidade_aluno" defaultValue={cidade} id="input-cidade" className="input-text" type="text" placeholder="Digite o seu cidade" required />
                    </div>
                    <div>
                        <label htmlFor="input-codigo-curso">Codigo Curso</label>
                        <input onChange={handleChangeData} name="codigo_curso_aluno" defaultValue={codcurso} id="input-codigo-curso" className="input-text" type="text" pattern="\d*" maxLength={2} title="Apenas números com 2 dígitos" placeholder="Digite o código do curso" required/>
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