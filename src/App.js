import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./Componentes/Home";
import BarraNav from "./Componentes/BarraNav";
import Login from "./Componentes/Login";
import Citas from "./Componentes/Citas";
import Pacientes from "./Componentes/Pacientes";
import VetForm from "./Componentes/VetForm";
import AgendarCita from "./Componentes/AgendarCita"


function App() {

  return (
    <div className="App">
      <HashRouter>
       <BarraNav/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pacientelogin" element={<Login/>}/>
        <Route path="/citas" element={<Citas/>}/>
        <Route path="/pacientes" element={<Pacientes/>}/>
        <Route path="/vetLogin" element={<VetForm/>}/>
        <Route path="/agendar-cita" element={<AgendarCita/>}/>
        <Route path="/citas" element={<Citas/>}/>
       </Routes>
       </HashRouter>
    </div>
  )
}
export default App

