import React  from 'react';
import { toast } from 'react-toastify';
import { 
    Link, 
    useParams 
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{
    faClipboardCheck,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import Voltar from '../../components/Voltar';
import './servicos.css'

type Params = {
    empresa: string | undefined;
};

const Servicos: React.FC = () => {
    const { empresa } = useParams<Params>();

    return (
        <div className='servicos'>
            <h1>SELECIONE O SERVIÇO</h1>
            <div className='card-servicos-container'>
                <Link to={`/comandos/${empresa}`} className='card'>
                    <FontAwesomeIcon className='icone' icon={faClipboardCheck} />
                    <strong>Vistoria</strong>
                </Link>
                <Link to="#" className='card' onClick={() => {toast.warn("Função não implementada!")}}>
                    <FontAwesomeIcon className='icone' icon={faMapMarkerAlt} />
                    <strong>Rastreamento</strong>
                </Link>
            </div>
            <Voltar link='/'/>
        </div>
    );
}

export default Servicos;
