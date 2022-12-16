import Carousel from 'react-bootstrap/Carousel';
import vet from "./vet.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from "react";
import { listarAdmin } from '../server/Server';



function Home(){
  const [admins, setAdmins] = useState([]);

  async function cargarAdmins() {
      try {
          const res = await listarAdmin();
          setAdmins(res);
          console.log(res);
      } catch (error) {
          console.log(error);
      }
    }
  
    useEffect(() => {
      cargarAdmins();
  }, []);
  
  return (
   <></>
    )
}
export default Home;


{/* <Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" />
<Form.Text className="text-muted">
  We'll never share your email with anyone else.
</Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit">
Submit
</Button>
</Form> */}