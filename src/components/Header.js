import { Navbar, Container, Nav } from 'react-bootstrap'
import useAuth from '../hooks/useAuth';


function Header() {
  const { user, logout } = useAuth();

  return (
    <Navbar bg="primary" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Your To Do List!!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/ToDos">YOUR To Dos!</Nav.Link>
            <Nav.Link href="/Users">Users</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            {!user && <Nav.Link href="/Login">Sign In</Nav.Link>}
            {user &&
              <>
                Welcome back, {user.username}
                <button onClick={() => logout()}>Sign Out</button>
                <button>Sign Out</button>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;