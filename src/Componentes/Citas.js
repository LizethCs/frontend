import "../Stylesheets/Styles.css";
import { Row, Col, Table, Container, Button, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import {
  listarCitas,
  listarVeterinarios,
  eliminarCitaPorId,
  actualizarCitas,
} from "../server/Server";

function Citas() {
  const [citas, setCitas] = useState([]);
  const [vetNombre, setVetNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [vets, setVets] = useState([]);
  let cajas = "";
  var vetId = "";

  function encontarPorNombre(nombre) {
    vets.map((vet) => {
      if (vet.nombre === nombre) {
        vetId = vet.id;
      }
    });
    return vetId;
  }

  async function cargarCitas() {
    try {
      const res = await listarCitas();
      setCitas(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    cargarCitas();
  }, []);

  async function deleteCitaById(id) {
    let result = window.confirm("¿Seguro de Eliminar?");
    if (result) {
      const response = await eliminarCitaPorId(id);
      alert(response);

      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  }

  async function cargarVeterinarios() {
    try {
      const res = await listarVeterinarios();
      setVets(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    cargarVeterinarios();
  }, []);

  return (
    <Container>
      <Row className="fila">
        <Col>
          <h2>Citas Agendadas</h2>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Nombre veterinario</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita) => (
                <tr key={cita.id}>
                  <td>{cita.fecha}</td>
                  <td>{cita.hora}</td>
                  <td>{cita.nombreveterinario}</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={(ev) => {
                        ev.preventDefault();
                        try {
                          encontarPorNombre(vetNombre.toLowerCase());
                          let cajas = {
                            id: cita.id,
                            id_veterinario: vetId,
                            nombreveterinario: vetNombre.toLowerCase(),
                            fecha: fecha,
                            hora: hora,
                          };

                          actualizarCitas(cajas);
                          cargarCitas();
                          alert("Cita actualizada.");
                          setTimeout(function () {
                            window.location.reload();
                          }, 1000);
                        } catch (err) {
                          console.log(err);
                          alert("Hubo un error. Intente nuevamente.");
                          setTimeout(function () {
                            window.location.reload();
                          }, 2000);
                        }
                      }}
                    >
                      Actualizar
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => deleteCitaById(cita.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Form.Group className="mb-3">
            <p>
              Para actualizar una cita llene todos los campos, luego haga clic
              en Actualizar.
            </p>
            <Form.Label className="fecha text-center">Fecha</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese la fecha de la cita.  Ej: 2023-01-31"
              autoComplete="off"
              name="fechaInput"
              onChange={(ev) => setFecha(ev.target.value)}
            />
            <Form.Text>Formato: aaaa-mm-dd</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="hora text-center">Hora</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese la hora de la cita. Ej: 13:00."
              name="horaInput"
              onChange={(ev) => setHora(ev.target.value)}
            />
            <Form.Text>Formato: 24 hrs</Form.Text>
          </Form.Group>
          <h2>Veterinarios disponibles:</h2>
          <Table striped bordered hover className="bordered">
            <tbody>
              {vets.map((vet) => (
                <tr key={vet.id}>
                  <td>{vet.nombre}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Form.Group className="mb-3">
            <Form.Label className="veterinario text-center">
              Nombre del veterinario
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre del veterinario para la cita."
              name="horaInput"
              onChange={(ev) => setVetNombre(ev.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}
export default Citas;
