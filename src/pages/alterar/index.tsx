import React, { useContext, useState } from "react";
import { divContext } from "../../components/MainContainer";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import { NextApiRequest } from "next";

export default function Alterar() {
    const { handleChangeData } = useContext(divContext);
    const { data } = useContext(divContext);
    const { setAlterarAlunos } = useContext(divContext);
    const { setAlterarDisciplinas } = useContext(divContext);
    const { setAlterarCursos } = useContext(divContext);

    const router = useRouter();

    function handleFormAlunos(event: any) {
        event.preventDefault();
        setTimeout(() => {
            router.push('/alterar/alunos')
        }, 500);
        axios.post(`/api/alunos/alterar/${data.matricula_alterar}`).then((response) => setAlterarAlunos(response.data));
    };
    
    function handleFormDisciplinas(event: any) {
        event.preventDefault();
        setTimeout(() => {
            router.push('/alterar/disciplinas')
        }, 500);
        axios.post(`/api/disciplinas/alterar/${data.id_disciplina_alterar}`).then((response) => setAlterarDisciplinas(response.data));
    };
    
    function handleFormCursos(event: any) {
        event.preventDefault();
        setTimeout(() => {
            router.push('/alterar/cursos')
        }, 500);
        axios.post(`/api/cursos/alterar/${data.codigo_curso_alterar}`).then((response) => setAlterarCursos(response.data));
    };
    
    return(
        <>
            <Head>
                <title>HostMain | Alterar</title>
            </Head>
            <div className="fields field-alterar">
                <div id="field-alterar-aluno">
                    <form onSubmit={handleFormAlunos}>
                        <h1>Alterar Alunos</h1>
                        <div>
                            <label htmlFor="input-matricula-alterar">Matrícula Aluno</label>
                            <input onChange={handleChangeData} name="matricula_alterar" id="input-matricula-alterar" maxLength={5} className="input-number input-text" type="text" pattern="\d*" title="Digite a Matrícula com 5 dígitos" placeholder="Digite a Matricula do aluno" required />
                        </div>
                        <input name="btn_submit_excluir" className="btn-submit-alterar" type="submit" />
                    </form>
                </div>
                <div id="field-alterar-disciplinas">
                    <form onSubmit={handleFormDisciplinas}>
                        <h1>Alterar Disciplinas</h1>
                        <div>
                            <label htmlFor="input-id-alterar">Código Disciplina</label>
                            <input onChange={handleChangeData} name="id_disciplina_alterar" id="input-id-alterar" className="input-number input-text" type="text" pattern="\d*" maxLength={2} title="Apenas números com 2 dígitos" placeholder="Digite o Código da Disciplina" required />
                        </div>
                        <input name="btn_submit_excluir2" className="btn-submit-alterar" type="submit" />
                    </form>
                </div>
                <div id="field-alterar-cursos">
                    <form onSubmit={handleFormCursos}>
                        <h1>Alterar Cursos</h1>
                        <div>
                            <label htmlFor="input-codigo-curso-alterar">Código Curso</label>
                            <input onChange={handleChangeData} name="codigo_curso_alterar" id="input-codigo-curso-alterar" className="input-number input-text" type="text" pattern="\d*" maxLength={2} title="Apenas números com 2 dígitos" placeholder="Digite o Código do Cursotext" required />
                        </div>
                        <input name="btn_submit_excluir" className="btn-submit-alterar" type="submit" />
                    </form>
                </div>
            </div>
        </>
    )
}