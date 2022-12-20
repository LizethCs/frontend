import {Container, Row, Col, Button, Form} from "react-bootstrap";
import "../Stylesheets/Styles.css";
import React, { useState } from "react";
import { guardarPaciente } from "../server/Server";

function Login() {
  const [nombreMasc, setNombreMasc] = useState("");
  const [tipo, setTipo] = useState("");
  const [raza, setRaza] = useState("");
  const [edad, setEdad] = useState("");
  const [enfermedades, setEnfermedades] = useState([]);
  const [nombreDue, setNombreDue] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [documento, setDocumento] = useState("");

  let cajas = {
    nombremascota: nombreMasc,
    mascota: tipo,
    raza: raza,
    edad: edad,
    enfermedades: [enfermedades],
    propietario: {
      nombre: nombreDue,
      apellido: apellido,
      direccion: direccion,
      telefono: telefono,
      ndocumento: documento,
    },
  };

  return (
    <Container className="cont">
      <Row className="fila">
        <h2 className="text-center">Datos del dueño</h2>
        <Col>
          {" "}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="nombre text-center">Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                name="nombreInput"
                onChange={(ev) => setNombreDue(ev.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="apellidos">Apellidos</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese sus apellidos"
                name="apellidosInput"
                onChange={(ev) => setApellido(ev.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="direccion">Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su dirreción"
                name="direccionInput"
                onChange={(ev) => setDireccion(ev.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="telefono">Teléfono</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Ingrese su teléfono"
                name="telefonoInput"
                onChange={(ev) => setTelefono(ev.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="documento">Documento</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Ingrese su doc. de identidad"
                name="documentoInput"
                onChange={(ev) => setDocumento(ev.target.value)}
              />
            </Form.Group>

            <h2 className="text-center">Datos de la mascota</h2>
            <Form.Group className="mb-3">
              <Form.Label className="nombre-mascota">Nombre mascota</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre de la mascota"
                name="nomMascInput"
                onChange={(ev) => setNombreMasc(ev.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="tipo-mascota">Tipo de mascota</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el tipo de mascota, ej: perro, gato."
                name="tipoInput"
                onChange={(ev) => setTipo(ev.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="raza-mascota">Raza</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la raza de la mascota."
                name="razaInput"
                onChange={(ev) => setRaza(ev.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="edad-mascota">Edad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la edad de la mascota."
                name="edadInput"
                onChange={(ev) => setEdad(ev.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="enfermedades">Enfermedades</Form.Label>
              <Form.Control
                type="text"
                placeholder='Ingrese las enfermedades de su mascota (si no tiene digite "ninguna").'
                name="enfInput"
                onChange={(ev) => setEnfermedades(ev.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(ev) => {
                ev.preventDefault();
                try {
                  guardarPaciente(cajas);
                  alert("Datos registrados correctamente.");
                  setTimeout(function () {
                    window.location.reload();
                  }, 2000);
                } catch (err) {
                  console.log(err);
                  alert("Hubo un error. Intente nuevamente.");
                  setTimeout(function(){
                    window.location.reload();;
                }, 1000);
                }
              }}
            >
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default Login;
