import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLoginContext } from "../context/LoginProvider";
import useAuthCalls from "../hooks/useAuthCalls";

const NavbarMenu = () => {
  const { setSwic } = useLoginContext();
  const { logout } = useAuthCalls();
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setSwic("pide")}>Pideler</Nav.Link>
              <Nav.Link onClick={() => setSwic("kebap")}>Kebaplar</Nav.Link>
              <Nav.Link onClick={() => setSwic("doner")}>Dönerler</Nav.Link>
              <Nav.Link onClick={() => setSwic("salata")}>Salatalar</Nav.Link>
              <Nav.Link onClick={() => setSwic("icecek")}>İçecekler</Nav.Link>
              <Nav.Link onClick={() => setSwic("tatli")}>Tatlılar</Nav.Link>

              <Nav.Link onClick={() => logout()}>Çıkış</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
