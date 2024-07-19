import React from 'react';
import { 
    Link, 
    useLocation 
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './header.css';

const Header: React.FC = () => {

    const {pathname} = useLocation()

    const  logo = pathname.includes("novo") ? "/assets/images/logo-novo-seguros.png" :
                pathname.includes("astran") ? "/assets/images/logo-grupo-astran.png" :
                "/assets/images/astransat-logo.png";

    const empresaLogo = pathname.includes("novo") ? "novo" :
                        pathname.includes("astran") ? "astran" :
                        "astransat";

    return(
        <header>
            <div className='conteudo'>
                <Link to="/">
                    <img src={logo} alt={`Logo da empresa ${empresaLogo}`} className='logo' />
                </Link>
                <div className='acoes'>
                    <a className='nav-link dropdown-toggle' href="/" id="vistoriasDropdown" role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                        Vistorias
                    </a>
                    <ul className='dropdown-menu' aria-labelledby='vistoriasDropdown'>
                        <li><Link to='/vistorias/finalizadas' className='dropdown-item'>Finalizadas</Link></li>
                        <li><Link to='/vistorias/alteradas' className='dropdown-item'>Alteradas</Link></li>
                        <li><Link to='/vistorias/canceladas' className='dropdown-item'>canceladas</Link></li>
                        <li><Link to='/vistorias/geral' className='dropdown-item'>Geral</Link></li>
                    </ul>
                    <p className='sair'>Sair</p>
                </div>
            </div>
        </header>
    );

}

export default Header;