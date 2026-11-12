import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Aurora Tracker</Navbar.Brand>

                <Nav>
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>

                    <Nav.Link as={Link} to="/forecast">
                        Forecast
                    </Nav.Link>

                    <Nav.Link as={Link} to="/favorites">
                        Favorites
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;