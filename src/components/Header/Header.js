import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Doing-Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Users</Nav.Link>
            <Nav.Link href="#link">Admin</Nav.Link>
           
          </Nav>
          <Nav>
          <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Log out
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;