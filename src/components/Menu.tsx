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
      if (url === `${domain}/register`) {
        setIsButtonMenuAtivo({ register: true });
      } else if (url === `${domain}/get`) {
        setIsButtonMenuAtivo({ get: true });
      } else if (url === `${domain}/edit`) {
        setIsButtonMenuAtivo({ edit: true });
      } else if (url === `${domain}/delete`) {
        setIsButtonMenuAtivo({ delete: true });
      } else if (url === `${domain}/search`) {
        setIsButtonMenuAtivo({ search: true });
      } else {
        setIsButtonMenuAtivo({ register: true });
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
          <div className={`${isButtonMenuAtivo.register && "ativo"}`}>
            <Link href="/register" legacyBehavior>
              <a onClick={() => setIsButtonMenuAtivo({ register: true })}>
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
          <div className={`${isButtonMenuAtivo.get && "ativo"}`}>
            <Link href="/get" legacyBehavior>
              <a onClick={() => setIsButtonMenuAtivo({ get: true })}>
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
          <div className={`${isButtonMenuAtivo.edit && "ativo"}`}>
            <Link href="/edit" legacyBehavior>
              <a onClick={() => setIsButtonMenuAtivo({ edit: true })}>
                <ul>
                  <img
                    src="https://i.postimg.cc/fWPWP9VQ/vetor-edit.png"
                    alt="vetor"
                  />
                  <p>Alterar</p>
                </ul>
              </a>
            </Link>
          </div>
          <div className={`${isButtonMenuAtivo.delete && "ativo"}`}>
            <Link href="/delete" legacyBehavior>
              <a onClick={() => setIsButtonMenuAtivo({ delete: true })}>
                <ul>
                  <div>
                    <img
                      src="https://i.postimg.cc/6pcpY1RY/vetor-delete.png"
                      alt="vetor"
                    />
                    <p>Excluir</p>
                  </div>
                </ul>
              </a>
            </Link>
          </div>
          <div className={`${isButtonMenuAtivo.search && "ativo"}`}>
            <Link href="/search" legacyBehavior>
              <a onClick={() => setIsButtonMenuAtivo({ search: true })}>
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
