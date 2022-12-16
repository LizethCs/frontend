import "../Stylesheets/BarraNav.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";

function BarraNav(){
        return (
          <Navbar className="navbar"  expand="lg">
            <Container className="navbar-container">
            <Navbar.Brand className="brand" href="/">Veterinaria</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink className="nav-link" to="/citas">Citas</NavLink>
                  <NavLink className="nav-link" to="/agendar-cita">Agendar Cita</NavLink>
                  <NavLink className="nav-link" to="/login">Iniciar Sesión</NavLink>
                  <NavLink className="nav-link" to="/pacientes">Pacientes</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          
        );
      
}

export default BarraNav;