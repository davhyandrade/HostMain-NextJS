import { useContext } from 'react';
import { Context } from '../context/layout';
import Link from 'next/link';
import Globe from '../../public/images/globe.svg';

export default function Header() {
  const { isActiveToggleMenu, setIsActiveToggleMenu }: any = useContext(Context);

  function toggleMenu() {
    if (isActiveToggleMenu) {
      setIsActiveToggleMenu(false); // close menu mobile
    } else {
      setIsActiveToggleMenu(true);
    }
  }

  return (
    <header className="header-section">
      <div className="position-header-section">
        <div>
          <Globe/>
          <p>CRUD</p>
        </div>
        <div>
          <details>
            <summary>
              Developed by <span>David</span>
            </summary>
            <div>
              <Link href="https://github.com/davhyandrade">GitHub</Link>
              <Link href="https://instagram.com/_davhy/">Instagram</Link>
              <Link href="https://davhyandrade.com.br/">Site</Link>
            </div>
          </details>
        </div>
        <div onClick={toggleMenu} className={`toggle-menu ${isActiveToggleMenu && 'active'}`}>
          <div className="toggle-menu-item"></div>
        </div>
      </div>
    </header>
  );
}
