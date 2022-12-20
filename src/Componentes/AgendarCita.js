import { Form, Row, Col, Table, Container, Button } from "react-bootstrap";
import "../Stylesheets/Styles.css";
import React, { useEffect, useState } from "react";
import { listarCitas, listarVeterinarios, guardarCita } from "../server/Server";

function AgendarCita() {
  var citaExiste = "";
  var vetId = "";
  const [vetNombre, setVetNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [citas, setCitas] = useState([]);
  const [vets, setVets] = useState([]);

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

  function validarCitas() {
    for (var i = 0; i < citas.length; i++) {
      if (
        citas[i].hora === hora &&
        citas[i].fecha === fecha &&
        citas[i].nombreveterinario === vetNombre
      ) {
        citaExiste = true;
        break;
      } else {
        citaExiste = false;
      }
    }
  }

  return (
    <Container>
      <Row className="fila">
        <h2 className="text-center">Ingrese los datos de la cita</h2>
        <Col>
          {" "}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fecha text-center">
                Fecha de la cita
              </Form.Label>
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
              <Form.Label className="hora text-center">
                Hora de la cita
              </Form.Label>
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
                Ingrese el nombre del veterinario
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del veterinario para la cita."
                name="horaInput"
                onChange={(ev) => setVetNombre(ev.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(ev) => {
                ev.preventDefault();
                try {
                  encontarPorNombre(vetNombre.toLowerCase());
                  validarCitas();
                  if (citaExiste) {
                    alert(
                      "No puede agendar esta cita." +
                        " Este veterinario ya tiene una cita agendada para las " +
                        hora +
                        "."
                    );
                  } else {
                    let cajas = {
                      fecha: fecha,
                      hora: hora,
                      id_veterinario: vetId,
                      nombreveterinario: vetNombre.toLowerCase(),
                    };
                    guardarCita(cajas);
                    alert("cita guardada.");
                  }
                  setTimeout(function () {
                    window.location.reload();
                  }, 2000);
                } catch (err) {
                  console.log(err);
                  alert("Hubo un error. Intente nuevamente.");
                  setTimeout(function () {
                    window.location.reload();
                  }, 1000);
                }
              }}
            >
              Enviar{" "}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default AgendarCita;
