import React, { useEffect, useState } from "react";
import axios from 'axios';
import Head from "next/head";

export default function Listar() {
    const [listarAlunos, setListarAlunos] = useState<any>();
    const [listarDisciplinas, setListarDisciplinas] = useState<any>();
    const [listarCursos, setListarCursos] = useState<any>();

    useEffect(() => {
        axios.get('/api/alunos').then((response) => setListarAlunos(response.data))
        axios.get('/api/cursos').then((response) => setListarCursos(response.data))
        axios.get('/api/disciplinas').then((response) => setListarDisciplinas(response.data))
    }, [])
    
    interface IListarAlunos {
        matricula: number,
        Nome: string,
        Endereco: string,
        Cidade: string,
        CodCurso: string,
    }

    interface IListarCursos {
        Nome_Disciplina: string,
        CodDisciplina: number
    }

    interface IListarDisciplinas {
        CodCurso: number,
        Nome: string,
        CodDisc1: number,
        CodDisc2: number,
        CodDisc3: number,
    }
    
    return(
        <>
            <Head>
                <title>HostMain | Listar</title>
            </Head>
            <div className="fields field-listar">
                <div id="field-listar-aluno">
                    <h1>Alunos</h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>Matricula</th>
                                <th>Nome</th>
                                <th>Endereço</th>
                                <th>Cidade</th>
                                <th>Código Curso</th>
                            </tr>
                            {typeof listarAlunos !== 'undefined' && 
                                listarAlunos.map((value: IListarAlunos) => {
                                    return(
                                        <tr key={value.matricula}>
                                            <td>{value.matricula}</td>
                                            <td>{value.Nome}</td>
                                            <td>{value.Endereco}</td>
                                            <td>{value.Cidade}</td>
                                            <td>{value.CodCurso}</td>
                                        </tr>
                                    ) 
                                }
                            )}
                        </tbody>
                    </table>
                </div>
                <div id="field-listar-disciplinas">
                    <h1>Disciplinas</h1>
                    <table> 
                        <tbody>
                            <tr>
                                <th>Código</th>
                                <th>Nome</th>
                            </tr>
                            {typeof listarDisciplinas !== 'undefined' && 
                                listarDisciplinas.map((value: IListarCursos) => {
                                    return(
                                        <tr key={value.CodDisciplina}>
                                            <td>{value.CodDisciplina}</td>
                                            <td>{value.Nome_Disciplina}</td>
                                        </tr>
                                    ) 
                                }
                            )}
                        </tbody>
                    </table>
                </div>
                <div id="field-listar-cursos">
                    <h1>Cursos</h1>
                    <table> 
                        <tbody>
                            <tr>
                                <th>Código</th>
                                <th>Nome</th>
                                <th>Código Disciplina 1</th>
                                <th>Código Disciplina 2</th> 
                                <th>Código Disciplina 3</th>
                            </tr>
                            {typeof listarCursos !== 'undefined' && 
                                listarCursos.map((value: IListarDisciplinas) => {
                                    return(
                                        <tr key={value.CodCurso}>
                                            <td>{value.CodCurso}</td>
                                            <td>{value.Nome}</td>
                                            <td>{value.CodDisc1}</td>
                                            <td>{value.CodDisc2}</td>
                                            <td>{value.CodDisc3}</td>
                                        </tr>
                                    ) 
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}