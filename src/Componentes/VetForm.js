import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Stylesheets/Login.css";
import React, { useState } from "react";
import { guardarVet } from "../server/Server";

function VetForm() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [tarjetap, setTarjetap] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let cajas = {
    nombre:nombre,
    apellido:apellido,
    ntarjetaprof:parseInt(tarjetap),
    cuenta:{
        email:email,
        password:password}
   
  }; 
  console.log(cajas);

  return( <Container className="cont">
       
  <Row className="fila">
 <h2 className='text-center'>Ingrese sus datos</h2>
    <Col> <Form>
    <Form.Group className="mb-3" >
      <Form.Label className="nombre text-center">Nombre</Form.Label>
      <Form.Control  type="text" 
      placeholder="Ingrese su nombre." 
      autoComplete="off"
      name="nombreInput"
       onChange={ev => setNombre(ev.target.value)}
      />
    </Form.Group>

     <Form.Group className="mb-3" >
      <Form.Label className="apellidos">Apellidos</Form.Label>
      <Form.Control  type="text" placeholder="Ingrese sus apellidos."
      name="apellidosInput" onChange={ev => setApellido(ev.target.value)}/>
    </Form.Group>
  
    <Form.Group className="mb-3" >
      <Form.Label className="tar-p" >Número de tarjeta profesional</Form.Label>
      <Form.Control  type="text" placeholder="Ingrese su tarjeta profesional." 
      name="tarjetapInput"onChange={ev => setTarjetap(ev.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label className="email" >Email</Form.Label>
      <Form.Control  type="email" placeholder="Ingrese su email" 
      name="emailInput" onChange={ev => setEmail(ev.target.value)}/>
    </Form.Group>
    
    <Form.Group className="mb-3" >
      <Form.Label className="password" >Contraseña</Form.Label>
      <Form.Control  type="password" placeholder="Ingrese la contraseña" 
      name="passwInput" onChange={ev => setPassword(ev.target.value)}/>
    </Form.Group>

    <Button variant="primary" type="submit"
    onClick={ev =>{ev.preventDefault();
     try{guardarVet(cajas);
      alert("Datos registrados correctamente.");
      setTimeout(function(){
        window.location.reload();;
    }, 2000);
    } 
      catch (err){
        console.log(err);
      }
    }}>
      Enviar
    </Button>
  </Form>
  </Col>
  </Row>
</Container>);
}

export default VetForm;
// private String id;
// private String nombre;
// private String apellido;
// private long ntarjetaprof;
// private Object cuenta; //ejemplo cuenta: {"emai": "cuenta@veterinaria.com", "password": "juanse1421"}
