import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../Stylesheets/Login.css";

function Login(){
    return(
        <Container className="cont">
       
        <Row className="fila">
       <h2 className='text-center'>Datos del dueño</h2>
          <Col> <Form>
          <Form.Group className="mb-3" >
            <Form.Label className="nombre text-center" >Nombre</Form.Label>
            <Form.Control  type="text" placeholder="Ingrese su nombre" />
          </Form.Group>
    
          <Form.Group className="mb-3" >
            <Form.Label className="apellidos">Apellidos</Form.Label>
            <Form.Control  type="text" placeholder="Ingrese sus apellidos" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
    
          <Form.Group className="mb-3" >
            <Form.Label className="direccion" >Dirección</Form.Label>
            <Form.Control  type="text" placeholder="Ingrese su direción" />
          </Form.Group>
    
          <Form.Group className="mb-3" >
            <Form.Label className="telefono" >Teléfono</Form.Label>
            <Form.Control  type="tel" placeholder="Ingrese su teléfono" />
          </Form.Group>
          
          <Form.Group className="mb-3" >
            <Form.Label className="documento" >Documento</Form.Label>
            <Form.Control  type="tel" placeholder="Ingrese su doc. de identidad" />
          </Form.Group>
    
         <h2 className='text-center'>Datos de la mascota</h2>
         <Form.Group className="mb-3" >
            <Form.Label className="nombre-mascota" >Nombre mascota</Form.Label>
            <Form.Control  type="text" placeholder="Ingrese el nombre de la mascota" />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label className="tipo-mascota" >Tipo de mascota</Form.Label>
            <Form.Control  type="text" placeholder="Ingrese el tipo de mascota, ej: perro, gato." />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label className="tipo-mascota" >Raza</Form.Label>
            <Form.Control  type="text" placeholder="Ingrese la raza de la mascota." />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label className="tipo-mascota" >Edad</Form.Label>
            <Form.Control  type="text" placeholder="Ingrese la edad de la mascota." />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label className="enfermedades" >Enfermedades</Form.Label>
            <Form.Control  type="text" placeholder='Ingrese las enfermedades de su mascota (si no tiene digite "ninguna").' />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Col>
        </Row>
      </Container>
    )
}

export default Login;