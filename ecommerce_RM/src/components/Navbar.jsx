import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";
export const NavBar = () => {

    return(
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Respuestos Juan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Quienes Somos</Nav.Link>
            <Nav.Link href="#Nacionales">Nacionales</Nav.Link>
            <Nav.Link href="#Importados">Importados</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
      
    
    );
};