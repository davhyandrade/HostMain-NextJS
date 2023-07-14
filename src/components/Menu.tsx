import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/layout";

export default function Menu() {
  const { isActiveToggleMenu } = useContext(Context) 
  const [isButtonMenuAtivo, setIsButtonMenuAtivo] = useState<any>({});

  if (typeof window !== "undefined") {
    let url = window.location.href;

    let domain = "https://hostmain.vercel.app";

    useEffect(() => {
      if (url === `${domain}/cadastrar`) {
        setIsButtonMenuAtivo({ cadastrar: true });
      } else if (url === `${domain}/listar`) {
        setIsButtonMenuAtivo({ listar: true });
      } else if (url === `${domain}/alterar`) {
        setIsButtonMenuAtivo({ alterar: true });
      } else if (url === `${domain}/excluir`) {
        setIsButtonMenuAtivo({ excluir: true });
      } else if (url === `${domain}/pesquisar`) {
        setIsButtonMenuAtivo({ pesquisar: true });
      } else {
        setIsButtonMenuAtivo({ cadastrar: true });
      }
    }, []);
  }

  return (
    <header className={`menu ${isActiveToggleMenu && 'menu-mobile-ativo'}`}>
      <div className="position-menu">
        <a id="btn-logo" translate="no">
          HostMain
        </a>
        <nav className="btn-menu">
          <div className={`${isButtonMenuAtivo.cadastrar && "ativo"}`}>
            <Link href="/cadastrar" legacyBehavior>
              <a onClick={() => setIsButtonMenuAtivo({ cadastrar: true })}>
                <ul>
                  <img
                    src="https://i.postimg.cc/m2Tj0tJV/vetor-calendario.png"
                    alt="vetor"
                  />
                  <p>Cadastrar</p>
                </ul>
              </a>
            </Link>
          </div>
          <div className={`${isButtonMenuAtivo.listar && "ativo"}`}>
            <Link href="/listar" legacyBehavior>
              <a onClick={() => setIsButtonMenuAtivo({ listar: true })}>
                <ul>
                  <img
                    src="https://i.postimg.cc/J7xZHKYc/vetor-list.png"
                    alt="vetor"
                  />
                  <p>Listar</p>
                </ul>
              </a>
            </Link>
          </div>
          <div className={`${isButtonMenuAtivo.alterar && "ativo"}`}>
            <Link href="/alterar" legacyBehavior>
              <a onClick={() => setIsButtonMenuAtivo({ alterar: true })}>
                <ul>
                  <img
                    src="https://i.postimg.cc/fWPWP9VQ/vetor-alterar.png"
                    alt="vetor"
                  />
                  <p>Alterar</p>
                </ul>
              </a>
            </Link>
          </div>
          <div className={`${isButtonMenuAtivo.excluir && "ativo"}`}>
            <Link href="/excluir" legacyBehavior>
              <a onClick={() => setIsButtonMenuAtivo({ excluir: true })}>
                <ul>
                  <div>
                    <img
                      src="https://i.postimg.cc/6pcpY1RY/vetor-excluir.png"
                      alt="vetor"
                    />
                    <p>Excluir</p>
                  </div>
                </ul>
              </a>
            </Link>
          </div>
          <div className={`${isButtonMenuAtivo.pesquisar && "ativo"}`}>
            <Link href="/pesquisar" legacyBehavior>
              <a onClick={() => setIsButtonMenuAtivo({ pesquisar: true })}>
                <ul>
                  <div>
                    <img
                      src="https://i.postimg.cc/MHpDfLyN/vetor-pesquisa.png"
                      alt="vetor"
                    />
                    <p>Pesquisar</p>
                  </div>
                </ul>
              </a>
            </Link>
          </div>
        </nav>
      </div> 
    </header>
  );
}
