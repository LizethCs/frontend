import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./Componentes/Home";
import BarraNav from "./Componentes/BarraNav";
import Login from "./Componentes/Login";
import Citas from "./Componentes/Citas";
import Pacientes from "./Componentes/Pacientes";

function App() {

  return (
    <div className="App">
      <HashRouter>
       <BarraNav/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/citas" element={<Citas/>}/>
        <Route path="/pacientes" element={<Pacientes/>}/>
       </Routes>
       </HashRouter>
    </div>
  )
}
export default App

