import React from 'react';
import Voltar from '../../components/Voltar';
import { useParams } from 'react-router-dom';
import './vistorias.css'

const Vistorias: React.FC = () => {

    const { tipo } = useParams();

    return(
        <div className='vistorias'>
            <h1>Vistorias - {tipo}</h1>
            <table className='table table-stripped table-bordered'>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Protocolo
                        </th>
                        {(tipo === "geral" || tipo === "alteradas") && <th>Status</th>}
                        {(tipo === "canceladas" || tipo === "geral") && <th>Justificativa</th>}
                        <th>
                            Data
                        </th>
                        <th>
                            Usuário
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                    </tr>
                </tbody>
            </table>
            <Voltar link="/"/>
        </div>
    );
}

export default Vistorias;