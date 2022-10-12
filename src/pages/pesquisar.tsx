import React, { useContext, useState } from "react";
import axios from "axios";
import { divContext } from "../components/MainContainer";
import Head from "next/head";

export default function Pesquisar() {
    const { handleChangeData } = useContext(divContext);
    const { data } = useContext(divContext);

    const [consultarAlunos, setConsultarAlunos] = useState<any>();
    const [consultarDisciplinas, setConsultarDisciplinas] = useState<any>();
    const [consultarCursos, setConsultarCursos] = useState<any>();

    function handleFormAlunos(event: any) {
        event.preventDefault();
        axios.post(`/api/alunos/${data.nome_consultar_aluno}`).then((response) => setConsultarAlunos(response.data))
    };

    function handleFormDisciplinas(event: any) {
        event.preventDefault();
        axios.post(`/api/disciplinas/${data.nome_consultar_disciplinas}`).then((response) => setConsultarDisciplinas(response.data))
    };

    function handleFormCursos(event: any) {
        event.preventDefault();
        axios.post(`/api/cursos/${data.nome_consultar_curso}`).then((response) => setConsultarCursos(response.data))
    };

    interface IConsultarAlunos {
        Matricula: number,
        Nome: string,
        Endereco: string,
        Cidade: string,
        CodCurso: number,
    }

    interface IConsultarDisciplinas{
        CodDisciplina: number,
        Nome_Disciplina: string,

    }
    
    interface IConsultarCursos {
        CodCurso: number,
        Nome: string,
        CodDisc1: number,
        CodDisc2: number,
        CodDisc3: number,
    }

    return(
        <>
            <Head>
                <title>HostMain | Pesquisar</title>
            </Head>
            <div className="fields field-consultar">

                <div id="consultar" className="consultar-alunos">
                    <form onSubmit={handleFormAlunos}>
                        <h1>Pesquisar Aluno</h1>
                        <div>
                            <label htmlFor="input-nome-consultar">Nome</label>
                            <input onChange={handleChangeData} name="nome_consultar_aluno" id="input-nome-consultar" className="input-text" type="text" placeholder="Digite o nome do Aluno" required />
                        </div>
                        <input name="btn_submit_consultar_aluno" className="btn-submit-consultar" type="submit" />
                    </form>
                    {typeof consultarAlunos !== 'undefined' && 
                        <table>
                            <tbody>
                                <tr>
                                    <th>Matricula</th>
                                    <th>Nome</th>
                                    <th>Endereço</th>
                                    <th>Cidade</th>
                                    <th>Código Curso</th>
                                </tr>
                                {consultarAlunos.map((value: IConsultarAlunos) => {
                                    return(
                                        <tr key={value.Matricula}>
                                            <td>{value.Matricula}</td>
                                            <td>{value.Nome}</td>
                                            <td>{value.Endereco}</td>
                                            <td>{value.Cidade}</td>
                                            <td>{value.CodCurso}</td>
                                        </tr>
                                    ) 
                                })}
                            </tbody>
                        </table>
                    }
                </div>
                
                <div id="consultar" className="consultar-disciplinas">
                    <form onSubmit={handleFormDisciplinas}>
                        <h1>Pesquisar Disciplinas</h1>
                        <div>
                            <label htmlFor="input-nome-consultar">Nome</label>
                            <input onChange={handleChangeData} name="nome_consultar_disciplinas" id="input-nome-consultar" className="input-text" type="text" placeholder="Digite o nome da Disciplina" required />
                        </div>
                        <input name="btn_submit_consultar_disciplinas" className="btn-submit-consultar" type="submit" />
                    </form>
                    {typeof consultarDisciplinas !== 'undefined' && 
                        <table>
                            <tbody>
                                <tr>
                                    <th>Código</th>
                                    <th>Nome</th>
                                </tr>
                                {consultarDisciplinas.map((value: IConsultarDisciplinas) => {
                                    return(
                                        <tr key={value.CodDisciplina}>
                                            <td>{value.CodDisciplina}</td>
                                            <td>{value.Nome_Disciplina}</td>
                                        </tr>
                                    ) 
                                })}
                            </tbody>
                        </table>
                    }
                </div>

                <div id="consultar" className="consultar-cursos">
                    <form onSubmit={handleFormCursos}>
                        <h1>Pesquisar Curso</h1>
                        <div>
                            <label htmlFor="input-nome-consultar">Nome</label>
                            <input onChange={handleChangeData} name="nome_consultar_curso" id="input-nome-consultar" className="input-text" type="text" placeholder="Digite o nome do Curso" required />
                        </div>
                        <input name="btn_submit_consultar_curso" className="btn-submit-consultar" type="submit" />
                    </form>
                    {typeof consultarCursos !== 'undefined' && 
                        <table>
                            <tbody>
                                <tr>
                                    <th>Código</th>
                                    <th>Nome</th>
                                    <th>Código Disciplina 1</th>
                                    <th>Código Disciplina 2</th> 
                                    <th>Código Disciplina 3</th>
                                </tr>
                                {consultarCursos.map((value: IConsultarCursos) => {
                                    return(
                                        <tr key={value.CodCurso}>
                                            <td>{value.CodCurso}</td>
                                            <td>{value.Nome}</td>
                                            <td>{value.CodDisc1}</td>
                                            <td>{value.CodDisc2}</td>
                                            <td>{value.CodDisc3}</td>
                                        </tr>
                                    ) 
                                })}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>
    )
}