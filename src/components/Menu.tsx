import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../context/layout';
import RegisterSvg from '../../public/images/register.svg';
import GetSvg from '../../public/images/get.svg';
import EditSvg from '../../public/images/edit.svg';
import DeleteSvg from '../../public/images/delete.svg';
import SearchSvg from '../../public/images/search.svg';
import { useRouter } from 'next/router';

export default function Menu() {
  const { isActiveToggleMenu } = useContext(Context);
  const [isActiveMenuButton, setIsActiveMenuButton] = useState<string>();

  const router = useRouter();

  useEffect(() => {
    let url = router.pathname;
    switch (url) {
      case '/register':
        setIsActiveMenuButton('register');
        break;
      case '/get':
        setIsActiveMenuButton('get');
        break;
      case '/edit':
        setIsActiveMenuButton('edit');
        break;
      case '/delete':
        setIsActiveMenuButton('delete');
        break;
      case '/search':
        setIsActiveMenuButton('search');
        break;
      default:
        setIsActiveMenuButton('register');
        break;
    }
  }, []);

  return (
    <header className={`menu ${isActiveToggleMenu && 'menu-mobile-active'}`}>
      <div className="position-menu">
        <a href="/" id="btn-logo" translate="no">
          HostMain
        </a>
        <nav className="btn-menu">
          <div className={`${isActiveMenuButton === 'register' && 'active'}`}>
            <Link href="/register" legacyBehavior>
              <a onClick={() => setIsActiveMenuButton('register')}>
                <ul>
                  <RegisterSvg />
                  <p>Cadastrar</p>
                </ul>
              </a>
            </Link>
          </div>
          <div className={`${isActiveMenuButton === 'get' && 'active'}`}>
            <Link href="/get" legacyBehavior>
              <a onClick={() => setIsActiveMenuButton('get')}>
                <ul>
                  <GetSvg />
                  <p>Listar</p>
                </ul>
              </a>
            </Link>
          </div>
          <div className={`${isActiveMenuButton === 'edit' && 'active'}`}>
            <Link href="/edit" legacyBehavior>
              <a onClick={() => setIsActiveMenuButton('edit')}>
                <ul>
                  <EditSvg />
                  <p>Alterar</p>
                </ul>
              </a>
            </Link>
          </div>
          <div className={`${isActiveMenuButton === 'delete' && 'active'}`}>
            <Link href="/delete" legacyBehavior>
              <a onClick={() => setIsActiveMenuButton('delete')}>
                <ul>
                  <div>
                    <DeleteSvg />
                    <p>Excluir</p>
                  </div>
                </ul>
              </a>
            </Link>
          </div>
          <div className={`${isActiveMenuButton === 'search' && 'active'}`}>
            <Link href="/search" legacyBehavior>
              <a onClick={() => setIsActiveMenuButton('search')}>
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
