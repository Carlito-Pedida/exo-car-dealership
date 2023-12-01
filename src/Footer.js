import React from "react";
import "./Footer.css";
import { Navbar, Nav } from "react-bootstrap";

function Footer() {
  return (
    <Navbar className="footer justify-content-center" bg="dark" variant="dark">
      <Nav className="mt-2 mb-2">
        <Nav.Link>
          &copy;{new Date().getFullYear()} EXO Cars Corporation
        </Nav.Link>
        <Nav.Link className="disabled">|</Nav.Link>
        <Nav.Link>Designed by: CPedida</Nav.Link>
        <Nav.Link className="disabled">|</Nav.Link>
        <Nav.Link>All Rights Reserved</Nav.Link>
      </Nav>
    </Navbar>
  );
}
export default Footer;
