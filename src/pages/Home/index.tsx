import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const Home: React.FC = () => {
    
    return(
        <div className='home'>
            <h1>SELECIONE A EMPRESA</h1>
            <div className='card-container'>
                <Link to="/servicos/novo" className='card'>
                    <img src="/assets/images/logo-novo-seguros.png"/>
                </Link>
                <Link to="/servicos/novo" className='card'>
                    <img src="/assets/images/logo-grupo-astran.png"/>
                </Link>
            </div>
        </div>
    )

}

export default Home;