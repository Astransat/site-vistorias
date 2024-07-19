import RoutesApp from "./routes";
import './index.css';

import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center" autoClose={3000}/>
      <RoutesApp/>
    </div>
  );
}

export default App;
