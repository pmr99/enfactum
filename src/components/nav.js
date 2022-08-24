import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


const NavigationBar=() => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            Enfactum
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/about' className="nav-link">About Us</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact" className= "nav-link"> Contact Us</Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default NavigationBar;