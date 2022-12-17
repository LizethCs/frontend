import "../Stylesheets/BarraNav.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  NavLink } from "react-router-dom";


function BarraNav(){
        return (
          <Navbar className="navbar"  expand="lg">
            <Container className="navbar-container">
            <Navbar.Brand className="brand" href="/">Veterinaria</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink className="nav-link" to="/citas">Lista de citas</NavLink>
                  <NavLink className="nav-link" to="/agendar-cita">Agendar Cita</NavLink>
                  <NavLink className="nav-link" to="/pacienteLogin">Ingresar Paciente</NavLink>
                  <NavLink className="nav-link" to="/vetLogin">Ingresar veterinario</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          
        );
      
}

export default BarraNav;