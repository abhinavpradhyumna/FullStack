import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Home = () => {
    return (
        <>
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">Book Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/add">Add</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Home;