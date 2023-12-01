import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { Form, Figure } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { VehiclesContext } from "./VehiclesContext";
import { useContext } from "react";

function Home() {
  return (
    <>
      <Navbar className="navbar-collapse" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>
            <Figure.Image
              className="ms-3 me-3"
              width={30}
              height={30}
              src="/logo.png"
            />
            <>EXO Cars</>
          </Navbar.Brand>

          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/inventory" className="nav-link">
              View Inventory
            </Link>
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
            <Link to="/create" className="nav-link">
              Trade-In
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Stack gap={3} className="col-md-10 mx-auto mt-3">
        <Outlet />
      </Stack>
    </>
  );
}

export default Home;
