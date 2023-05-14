import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import personLogo from "/person.svg"

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ANIMU</Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="justify-content-end">
          <Nav.Link href="#animeterbaru">
            Anime Terbaru
          </Nav.Link>
          <Nav.Link href="#genre">Genre</Nav.Link>
          <Nav.Link href="#komunitas">Komunitas</Nav.Link>
          <Nav.Link href="#help">Help</Nav.Link>
        </Nav>
        <a href="" target="_blank">
          <img src={personLogo} className="logo" alt="Vite logo" />
        </a>
      </Container>
    </Navbar>
  );
}

export default Header;
