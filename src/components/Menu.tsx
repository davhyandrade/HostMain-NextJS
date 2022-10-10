import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Menu() {
    const [isButtonMenuAtivo, setIsButtonMenuAtivo] = useState<any>({});
    
    if (typeof window !== "undefined") {
        let url = window.location.href;   
        
        useEffect(() => {
            if(url === 'http://localhost:3000/cadastrar') {
                setIsButtonMenuAtivo({cadastrar: true});
            } else if(url === 'http://localhost:3000/listar') {
                setIsButtonMenuAtivo({listar: true});
            } else if(url === 'http://localhost:3000/alterar') {
                setIsButtonMenuAtivo({alterar: true});
            } else if(url === 'http://localhost:3000/excluir') {
                setIsButtonMenuAtivo({excluir: true});
            } else if(url === 'http://localhost:3000/pesquisar') {
                setIsButtonMenuAtivo({pesquisar: true});
            } else {
                setIsButtonMenuAtivo({cadastrar: true});
            }
        }, []) 
    }

    return(
        <nav className='menu'>
            <div className="position-menu">
                <a id="btn-logo" translate='no'>HostMain</a>
                <div className="btn-menu">
                    <div className={`${isButtonMenuAtivo.cadastrar && "ativo"}`}>
                        <Link href='/cadastrar'>
                            <a onClick={() => setIsButtonMenuAtivo({cadastrar: true})}>
                                <ul>
                                    <img src="https://i.postimg.cc/m2Tj0tJV/vetor-calendario.png" alt="vetor" />
                                    <p>Cadastrar</p>
                                </ul>
                            </a>
                        </Link>
                    </div>
                    <div className={`${isButtonMenuAtivo.listar && "ativo"}`}>
                        <Link href='/listar'>
                            <a onClick={() => setIsButtonMenuAtivo({listar: true})}>
                                <ul>
                                    <img src="https://i.postimg.cc/J7xZHKYc/vetor-list.png" alt="vetor" />
                                    <p>Listar</p>
                                </ul>
                            </a>
                        </Link>
                    </div>
                    <div className={`${isButtonMenuAtivo.alterar && "ativo"}`}>
                        <Link href='/alterar'>
                            <a onClick={() => setIsButtonMenuAtivo({alterar: true})} >
                                <ul>
                                    <img src="https://i.postimg.cc/fWPWP9VQ/vetor-alterar.png" alt="vetor" />
                                    <p>Alterar</p>
                                </ul>
                            </a>
                        </Link>
                    </div>
                    <div className={`${isButtonMenuAtivo.excluir && "ativo"}`}>
                        <Link href='/excluir'>
                            <a onClick={() => setIsButtonMenuAtivo({excluir: true})}>
                                <ul>
                                    <div>
                                        <img src="https://i.postimg.cc/6pcpY1RY/vetor-excluir.png" alt="vetor" />
                                        <p>Excluir</p>
                                    </div>
                                </ul>
                            </a>
                        </Link>
                    </div>
                    <div className={`${isButtonMenuAtivo.pesquisar && "ativo"}`}>
                        <Link href='/pesquisar'>
                            <a onClick={() => setIsButtonMenuAtivo({pesquisar: true})}>
                                <ul>
                                    <div>
                                        <img  src="https://i.postimg.cc/MHpDfLyN/vetor-pesquisa.png" alt="vetor" />
                                        <p>Pesquisar</p>
                                    </div>
                                </ul>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}