export default function Header() {
    let isActiveButtonMenuMobile = true;

    function handleButtonMenuMobile() {
        if(isActiveButtonMenuMobile) {
            isActiveButtonMenuMobile = false;
            document.querySelector<any | null>('.menu').classList.remove("menu-mobile-desativo");
            document.querySelector<any | null>('.menu').classList.add("menu-mobile-ativo");
            document.querySelector<any | null>('.btn-menu-mobile').classList.remove("btn-menu-mobile-desativo");
            document.querySelector<any | null>('.btn-menu-mobile').classList.add("btn-menu-mobile-ativo");
        } else {
            isActiveButtonMenuMobile = true;
            document.querySelector<any | null>('.menu').classList.remove("menu-mobile-ativo");
            document.querySelector<any | null>('.menu').classList.add("menu-mobile-desativo");
            document.querySelector<any | null>('.btn-menu-mobile').classList.remove("btn-menu-mobile-ativo");
            document.querySelector<any | null>('.btn-menu-mobile').classList.add("btn-menu-mobile-desativo");
        }
    }
    
    return(
        <div className="header-section">
            <div className="position-header-section">
                <div>
                    <img src="https://i.postimg.cc/9QcLN3Bd/image-removebg-preview-2022-10-03-T163131-505.png" alt="Vetor Planeta" />
                    <p>CRUD</p>
                </div>
                <div>
                    <details>
                        <summary>Developed by <span>David</span></summary>
                        <div>   
                            <a href="https://github.com/davhyandrade">GitHub</a>
                            <a href="https://www.instagram.com/_davhy/">Instagram</a>
                            <a href="https://www.davhyandrade.com.br/">Site</a>
                        </div>  
                    </details>
                </div>
                <div onClick={handleButtonMenuMobile} className="btn-menu-mobile">
                    <div className="linha1"></div>
                    <div className="linha2"></div>
                    <div className="linha3"></div>
                </div>
            </div>
        </div>
    )
}