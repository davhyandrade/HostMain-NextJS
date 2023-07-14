import React, { useContext } from "react";
import { Context } from '../context/layout';
import axios from "axios";
import Head from "next/head";

export default function Cadastrar() {
    const { handleChangeData, data } = useContext(Context);

    function handleFormAlunos() {
        axios.post('/api/alunos', {
            matricula: data.matricula,
            Nome: data.nome_aluno,
            Endereco: data.endereco_aluno,
            Cidade: data.cidade_aluno,
            CodCurso: data.codigo_curso_aluno,
        }).then((response) => console.log(response));
        console.log(data);
    }

    function handleFormDisciplinas() {
        axios.post('/api/disciplinas', {
            CodDisciplina: data.codigo_disciplina,
            Nome_Disciplina: data.nome_disciplina,
        }).then((response) => console.log(response));
    }

    function handleFormCursos() {
        axios.post('/api/cursos', {
            CodCurso: data.codigo_curso,
            Nome: data.nome_curso,
            CodDisc1: data.codigo_disciplina_1,
            CodDisc2: data.codigo_disciplina_2,
            CodDisc3: data.codigo_disciplina_3,
        }).then((response) => console.log(response));
    }

    return(
        <>
            <Head>
                <title>HostMain | Cadastrar</title>
            </Head>
            <div className="fields field-cadastrar">          
                <div id="field-cadastrar-aluno">
                    <form onSubmit={handleFormAlunos}>
                        <h1>Cadastro Aluno</h1>
                        <div>
                            <label htmlFor="input-matricula">Matricula</label>
                            <input onChange={handleChangeData} name="matricula" id="input-matricula" className="input-number input-text" type="text" maxLength={5} pattern="\d*" title="Digite a Matrícula com 5 dígitos" placeholder="Digite o número da sua matrícula" required />
                        </div>
                        <div>
                            <label htmlFor="input-nome">Nome</label>
                            <input onChange={handleChangeData} name="nome_aluno" id="input-nome" className="input-text" type="text" placeholder="Digite o seu nome" required />
                        </div>
                        <div>
                            <label htmlFor="input-endereco">Endereço</label>
                            <input onChange={handleChangeData} name="endereco_aluno" id="input-endereco" className="input-text" type="text" placeholder="Digite o seu endereço" required />
                        </div>
                        <div>
                            <label htmlFor="input-cidade">Cidade</label>
                            <input onChange={handleChangeData}  name="cidade_aluno" id="input-cidade" className="input-text" type="text" placeholder="Digite o seu cidade" required />
                        </div>
                        <div>
                            <label htmlFor="input-codigo-curso">Codigo Curso</label>
                            <input onChange={handleChangeData} name="codigo_curso_aluno" id="input-codigo-curso" className="input-number input-text" type="text" pattern="\d*" maxLength={2} title="Apenas números com 2 dígitos" placeholder="Digite o código do curso" required/>
                        </div>
                        <input name="btn_submit_1" className="btn-submit" type="submit" />
                    </form>
                </div>
                <div id="field-cadastrar-disciplinas">
                    <form onSubmit={handleFormDisciplinas}>
                        <h1>Cadastro Disciplinas</h1>
                        <div>
                            <label htmlFor="input-nome-disciplina">Nome</label>
                            <input onChange={handleChangeData} name="nome_disciplina" id="input-nome-disciplina" className="input-text" type="text" placeholder="Digite o nome da disciplina" required />
                        </div>
                        <div>
                            <label htmlFor="input-codigo-disciplina">Código</label>
                            <input onChange={handleChangeData} name="codigo_disciplina" id="input-codigo-disciplina" className="input-number input-text" type="text" maxLength={2} title="Apenas números com 2 dígitos" placeholder="Digite o código da disciplina" pattern="\d*" required />
                        </div>
                        <input name="btn_submit_2" className="btn-submit" type="submit" />
                    </form>
                </div>
                <div id="field-cadastrar-cursos">
                    <form onSubmit={handleFormCursos}>
                        <h1>Cadastro Cursos</h1>
                        <div>
                            <label htmlFor="input-nome-curso">Nome</label>
                            <input onChange={handleChangeData} name="nome_curso" id="input-nome-curso" className="input-text" type="text" placeholder="Digite o nome do curso" required />
                        </div>
                        <div>
                            <label htmlFor="input-codigo-curso">Código</label>
                            <input onChange={handleChangeData} name="codigo_curso" id="input-codigo-curso" className="input-number input-text" type="text" placeholder="Digite o codigo do curso" maxLength={2} title="Apenas números com 2 dígitos" pattern="\d*" required />
                        </div>
                        <div>
                            <label htmlFor="input-codigo-disciplina-1">Código Disciplina 1</label>
                            <input onChange={handleChangeData} name="codigo_disciplina_1" id="input-codigo-disciplina-1" className="input-number input-text" type="text" placeholder="Digite o codigo da disciplinas 1" pattern="\d*" maxLength={2}  title="Apenas números com 2 dígitos" required />
                        </div>
                        <div>
                            <label htmlFor="input-codigo-disciplina-2">Código Disciplina 2</label>
                            <input onChange={handleChangeData} name="codigo_disciplina_2" id="input-codigo-disciplina-2" className="input-number input-text" type="text" placeholder="Digite o codigo da disciplinas 2" pattern="\d*" maxLength={2} title="Apenas números com 2 dígitos" required />
                        </div>
                        <div>
                            <label htmlFor="input-codigo-disciplina-3">Código Disciplina 3</label>
                            <input onChange={handleChangeData} name="codigo_disciplina_3" id="input-codigo-disciplina-3" className="input-number input-text" type="text" placeholder="Digite o codigo da disciplinas 3" pattern="\d*" maxLength={2} title="Apenas números com 2 dígitos" required />
                        </div>
                        <input name="btn_submit_3" className="btn-submit" type="submit" />
                    </form>
                </div>
            </div>
        </>
    )
}