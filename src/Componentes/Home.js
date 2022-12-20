import {Carousel, Container} from 'react-bootstrap';
import "../Stylesheets/Home.css";

function Home(){
  return (
    <Container className="car">
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require("./vet.png")}
        alt="First slide"
      />
      <Carousel.Caption>
    
        <p>Bienvenido a la aplicación de citas veterinarias.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </Container>
    )
}
export default Home;

