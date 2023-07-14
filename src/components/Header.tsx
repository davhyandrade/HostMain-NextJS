import { useContext } from 'react';
import { Context } from '../context/layout';
import Link from 'next/link';

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
          <img
            src="https://i.postimg.cc/9QcLN3Bd/image-removebg-preview-2022-10-03-T163131-505.png"
            alt="Vetor Planeta"
          />
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
