//import React, { useContext } from "react";
import Stack from "react-bootstrap/Stack";
import { Outlet } from "react-router-dom";
import { VehiclesContext } from "./VehiclesContext";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";
import "./Inventory.css";

function Featured(props) {
  //   let navigate = useNavigate();
  //   let { deleteVehicle } = useContext(VehiclesContext);

  //   function handleDeleteVehicle(id) {
  //     deleteVehicle(id);
  //     navigate("/inventory");
  //   }
  function feturedList(vehicles) {
    return vehicles.slice(0, 6).map((vehicle, index) => (
      <Container>
        <Card className="align-self-center w-24" key={vehicle.id}>
          <a href={`/inventory/${vehicle.id}`}>
            <Card.Img
              variant="top"
              src={vehicle.image_url}
              key={vehicle.id}
            ></Card.Img>
          </a>
          <Card.Body>
            <Card.Title>
              {vehicle.make} {vehicle.model}
            </Card.Title>
            <Card.Text>
              <strong>Price: </strong> {vehicle.price}
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </Container>
    ));
  }

  return (
    <div>
      <h3>Welcome To EXO Cars</h3>
      <p>Your one stop shop for exotic dream ride!</p>
      <br />
      <Container fluid>
        <Stack className="featured" direction="horizontal">
          <div className="row row-cols-3 g-3">
            <VehiclesContext.Consumer>
              {({ vehicles }) => feturedList(vehicles)}
            </VehiclesContext.Consumer>
          </div>

          <Outlet />
        </Stack>
        <h5 className="align-self-center">Select a car to get started</h5>
      </Container>
    </div>
  );
}

export default Featured;

// <Link
// variant="success"
// className="btn btn-outline-success"
// to={`/inventory/${vehicle.id}`}
// key={vehicle.id}
// >
// {/* View */}
// {vehicle.make} {vehicle.model}
// </Link>
// <Link
// to={`/inventory/${vehicle.id}/edit`}
// className="buttons btn btn-outline-success mx-3"
// >
// Edit
// </Link>
// <Button
// className="buttons"
// variant="outline-danger"
// onClick={handleDeleteVehicle.bind(this, vehicle.id)}
// >
// Delete
// </Button>
