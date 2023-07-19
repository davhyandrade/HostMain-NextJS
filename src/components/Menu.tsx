import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/layout";
import RegisterSvg from '../../public/images/register.svg';
import GetSvg from '../../public/images/get.svg';
import EditSvg from '../../public/images/edit.svg';
import DeleteSvg from '../../public/images/delete.svg';
import SearchSvg from '../../public/images/search.svg';

export default function Menu() {
  const { isActiveToggleMenu } = useContext(Context) 
  const [isButtonMenuAtivo, setIsButtonMenuAtivo] = useState<any>({});

  if (typeof window !== "undefined") {
    let url = window.location.href;

    console.log(url);
    
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
        <a href="/" id="btn-logo" translate="no">
          HostMain
        </a>
        <nav className="btn-menu">
          <div className={`${isButtonMenuAtivo.register && "ativo"}`}>
            <Link href="/register" legacyBehavior>
              <a onClick={() => setIsButtonMenuAtivo({ register: true })}>
                <ul>
                  <RegisterSvg />
                  <p>Cadastrar</p>
                </ul>
              </a>
            </Link>
          </div>
          <div className={`${isButtonMenuAtivo.get && "ativo"}`}>
            <Link href="/get" legacyBehavior>
              <a onClick={() => setIsButtonMenuAtivo({ get: true })}>
                <ul>
                  <GetSvg />
                  <p>Listar</p>
                </ul>
              </a>
            </Link>
          </div>
          <div className={`${isButtonMenuAtivo.edit && "ativo"}`}>
            <Link href="/edit" legacyBehavior>
              <a onClick={() => setIsButtonMenuAtivo({ edit: true })}>
                <ul>
                  <EditSvg />
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
                    <DeleteSvg />
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
                    <SearchSvg />
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
