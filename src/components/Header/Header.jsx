import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../photos/logo.png"
import Button from 'react-bootstrap/Button';

import style from "./Header.module.scss"

function Header() {
  return (
    // <Container>
    <Navbar bg="#fff" expand="lg">
        <Navbar.Brand href="#home" ><img className={style.logo} alt='linkDev logo' id='logo' src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={style.nav}>
          <Nav>
            <Nav.Link href="#home" className={style.link}>Home</Nav.Link>
            <Nav.Link href="#about" className={style.link}>About us</Nav.Link>
            <Nav.Link href="#News" className={style.link}>News</Nav.Link>
            <Nav.Link href="#contact" className={style.link}>Contact us</Nav.Link>
          </Nav>
          <Nav className='d-flex align-items-center'>
            <Nav.Link href="#login" className={style.link}>Login</Nav.Link>
            <Nav.Link href="#register" className={style.link}><Button variant="outline-dark">Sign up</Button></Nav.Link>
            <NavDropdown title="EN" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">EN</NavDropdown.Item>
              <NavDropdown.Item href="#">
              <NavDropdown.Divider />AR</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    // </Container>
  );
}

export default Header;