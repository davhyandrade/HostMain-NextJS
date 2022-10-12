import Menu from "./Menu"
import Header from "./Header";
import React, { createContext, useState } from "react";
import { useRouter } from "next/router";

export const divContext = createContext<any | null>({});

export default function MainContainer({ children }: any) {
    const [alterarAlunos, setAlterarAlunos] = useState<any>({

    });
    const [alterarDisciplinas, setAlterarDisciplinas] = useState<any>({

    });
    const [alterarCursos, setAlterarCursos] = useState<any>({

    });


    const [data, setData] = useState({});
    const handleChangeData = (data: any) => {
        setData((prevData) => ({
            ...prevData,
            [data.target.name]: data.target.value,
        }))
    }

    const router = useRouter();
    
    if (typeof window !== "undefined") {
        let url = window.location.href;   

        if(url === 'http://localhost:3000/alterar/cursos') {
            if(typeof alterarCursos[0] === 'undefined') {
                alert('404 error: not found - Matricula inexistente');
                setTimeout(() => {
                    router.push('/alterar')
                    window.location.reload();
                });
            }
        } else if(url === 'http://localhost:3000/alterar/alunos') {
            if(typeof alterarAlunos[0] === 'undefined') {
                alert('404 error: not found - Código inexistente');
                setTimeout(() => {
                    router.push('/alterar')
                    window.location.reload();
                });
            }
        } else if(url === 'http://localhost:3000/alterar/disciplinas') {
            if(typeof alterarDisciplinas[0] === 'undefined') {
                alert('404 error: not found - Código inexistente');
                setTimeout(() => {
                    router.push('/alterar')
                    window.location.reload();
                });
            }
        }
    }

    return (
        <>
            <Menu />
            <divContext.Provider
                value={{ 
                    handleChangeData,
                    data,
                    setData, 
                    setAlterarAlunos, 
                    alterarAlunos, 
                    setAlterarDisciplinas, 
                    alterarDisciplinas,
                    setAlterarCursos,
                    alterarCursos
                 }}
            >
                <section>
                    <div className="position-section">
                        <Header />
                        {children}
                    </div>
                </section>
            </divContext.Provider>
        </>
    )
}