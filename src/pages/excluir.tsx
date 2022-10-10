import React, { useContext } from "react";
import axios from "axios";
import { divContext } from "../components/MainContainer";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Excluir() {
    const { handleChangeData } = useContext(divContext);
    const { data } = useContext(divContext);

    const router = useRouter();

    function handleFormAlunos(event: any) { 
        event.preventDefault();
        axios.delete(`/api/alunos/${data.matricula_excluir}`);
        setTimeout(() => {
            router.push('/cadastrar')
            setTimeout(() => {
                window.location.reload();
            }, 100)
        }, 500);
    }

    function handleFormDisciplinas(event: any) {
        event.preventDefault();
        axios.delete(`/api/disciplinas/${data.id_disciplina_excluir}`);
        setTimeout(() => {
            router.push('/cadastrar')
            setTimeout(() => {
                window.location.reload();
            }, 100)
        }, 500);

    }

    function handleFormCursos(event: any) {
        event.preventDefault();
        axios.delete(`/api/cursos/${data.codigo_curso_excluir}`);
        setTimeout(() => {
            router.push('/cadastrar')
            setTimeout(() => {
                window.location.reload();
            }, 100)
        }, 500);
    }

    return(
        <>
            <Head>
                <title>HostMain | Excluir</title>
            </Head>
            <div className="fields field-excluir">
                <div id="field-excluir-aluno">
                    <form onSubmit={handleFormAlunos} >
                        <h1>Excluir Alunos</h1>
                        <div>
                            <label htmlFor="input-matricula-excluir">Matrícula Aluno</label>
                            <input onChange={handleChangeData} name="matricula_excluir" id="input-matricula-excluir" className="input-number input-text" type="text" maxLength={5} pattern="\d*" title="Digite a Matrícula com 5 dígitos" placeholder="Digite a Matricula do aluno" required />
                        </div>
                        <input name="btn_submit_excluir" className="btn-submit-excluir" type="submit" />
                    </form>
                </div>
                <div id="field-excluir-disciplinas">
                    <form onSubmit={handleFormDisciplinas} >
                        <h1>Excluir Disciplinas</h1>
                        <div>
                            <label htmlFor="input-id-excluir">Código Disciplina</label>
                            <input onChange={handleChangeData}  name="id_disciplina_excluir" id="input-id-excluir" className="input-number input-text" type="text" maxLength={2} pattern="\d*" title="Apenas números com 2 dígitos" placeholder="Digite o Código da Disciplina" required />
                        </div>
                        <input name="btn_submit_excluir2" className="btn-submit-excluir" type="submit" />
                    </form>
                </div>
                <div id="field-excluir-cursos">
                    <form onSubmit={handleFormCursos} >
                        <h1>Excluir Cursos</h1>
                        <div>
                            <label htmlFor="input-codigo-curso-excluir">Código Curso</label>
                            <input onChange={handleChangeData}  name="codigo_curso_excluir" id="input-codigo-curso-excluir" className="input-number input-text" type="text" maxLength={2} title="Apenas números com 2 dígitos" pattern="\d*" placeholder="Digite o Código do Curso" required />
                        </div>
                        <input name="btn_submit_excluir" className="btn-submit-excluir" type="submit" />
                    </form>
                </div>
            </div>
        </>
    )
}