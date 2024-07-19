import { 
    BrowserRouter, 
    Routes, 
    Route 
} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Comandos from './pages/Comandos';
import Vistorias from './pages/Vistorias';
import Erro from './pages/Erro';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/servicos/:empresa" element={ <Servicos/> } />
                <Route path="/comandos/:empresa" element={ <Comandos/> } />
                <Route path="/vistorias/:tipo" element={ <Vistorias/> } />

                <Route path="*" element={ <Erro/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;