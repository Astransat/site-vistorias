import { FC } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './voltar.css'

interface VoltarProps {
    link: string;
}

const Voltar: FC<VoltarProps> = ({ link }) => {
    return (
        <div className="voltar">
            <Link to={link}>
                <FontAwesomeIcon icon={faArrowLeft} />
                <span> Voltar</span>
            </Link>
        </div>
    );
};

export default Voltar;
