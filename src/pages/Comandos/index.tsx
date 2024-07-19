import React from 'react';
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEdit, faBan } from '@fortawesome/free-solid-svg-icons';
import Voltar from "../../components/Voltar";
import './comandos.css';


type Params = {
    empresa: string | undefined;
};

const Comandos: React.FC = () => {
    const { empresa } = useParams<Params>();

    return (
        <div className='comandos'>
            <h1>vistorias - {empresa}</h1>
            <h2>selecione o comando</h2>
            <div className="card-acoes-container">
                <Link to="#" className="card" onClick={() => { toast.warn("Função não implementada.") }}>
                    <FontAwesomeIcon className="icone i-finalizar" icon={faCheckCircle} />
                    <strong>Finalizar</strong>
                </Link>
                <Link to="#" className="card" onClick={() => { toast.warn("Função não implementada.") }}>
                    <FontAwesomeIcon className="icone i-alterar" icon={faEdit} />
                    <strong>Alterar</strong>
                </Link>
                <Link to="#" className="card" onClick={() => { toast.warn("Função não implementada.") }}>
                    <FontAwesomeIcon className="icone i-cancelar" icon={faBan} />
                    <strong>Cancelar</strong>
                </Link>
            </div>
            <Voltar link={`/servicos/${empresa}`} />
        </div>
    );
}

export default Comandos;
