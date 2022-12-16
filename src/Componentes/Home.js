import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
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
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </Container>
    )
}
export default Home;

