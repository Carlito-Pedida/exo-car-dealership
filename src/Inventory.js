import React, { useState, useContext, useEffect } from "react";
import Stack from "react-bootstrap/Stack";
import { Link, useParams } from "react-router-dom";
import { VehiclesContext } from "./VehiclesContext";
import { Card, Container, Button, Form, Dropdown } from "react-bootstrap";
import "./Inventory.css";

function Inventory(props) {
  let params = useParams();
  let [priceHigh, setPriceHigh] = useState();
  let [search, setSearch] = useState("");

  let { sortPriceHigh } = useContext(VehiclesContext);

  useEffect(() => {
    async function fetch() {
      await sortPriceHigh(params.vehicleId).then((vehicle) =>
        setPriceHigh(vehicle)
      );
    }

    fetch();
  }, [params.vehicleId, sortPriceHigh]);

  function handleSelectPrice() {
    setPriceHigh(priceHigh);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(search, priceHigh);
  }

  function inventoryList(vehicles) {
    return vehicles
      .filter((vehicle) => {
        return search.toLowerCase() === ""
          ? vehicle
          : vehicle.make.toLowerCase().includes(search, priceHigh) ||
              vehicle.description.toLowerCase().includes(search) ||
              vehicle.condition.toLowerCase().includes(search) ||
              vehicle.color.toLowerCase().includes(search) ||
              vehicle.price.includes(priceHigh);
      })
      .map((vehicle) => (
        <Container>
          <Card className="align-self-center w-24" key={vehicle.id}>
            <Card.Body>
              <a href={`/inventory/${vehicle.id}`}>
                <Card.Img
                  variant="top"
                  src={vehicle.image_url}
                  key={vehicle.id}
                ></Card.Img>
              </a>
              <br />
              <br />
              <Card.Title>
                {vehicle.make} {vehicle.model}
              </Card.Title>
              <Card.Text>
                <strong>Price: </strong> ${vehicle.price}
              </Card.Text>
              <div className="button-group">
                <Link
                  className="link btn btn-outline-success m-2"
                  to={`/inventory/${vehicle.id}`}
                  key={vehicle.id}
                >
                  View
                </Link>
                <Link
                  to={`/inventory/${vehicle.id}/edit`}
                  className="buttons btn btn-outline-warning m-2 sm"
                >
                  Edit
                </Link>
              </div>
            </Card.Body>
          </Card>
          <br />
        </Container>
      ));
  }

  return (
    <Container>
      <div className="options">
        <div>
          <h3>Inventory</h3>
          <p>Scroll down for more!</p>
        </div>
        <div>
          <Form className="d-flex" onSubmit={handleSubmit} key={1}>
            <Form.Control
              size="sm"
              type="search"
              placeholder="search"
              className="me-2"
              //value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
        </div>
      </div>
      <div className="filters">
        <Form>
          <Form.Select size="sm">
            <option>Open this select menu</option>
            <option value="1" onClick={handleSubmit}>
              Price : High
            </option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form>

        <div className="price-filters">
          <Button variant="secondary" size="sm">
            Price High to Low
          </Button>{" "}
          <Button variant="secondary" size="sm">
            Price Low to High
          </Button>
        </div>
      </div>
      <br />
      <div>
        <Stack className="inventory-main" direction="horizontal" gap={3}>
          <div className="row row-cols-4 g-4">
            <VehiclesContext.Consumer>
              {({ vehicles }) => inventoryList(vehicles)}
            </VehiclesContext.Consumer>
          </div>
        </Stack>
      </div>
    </Container>
  );
}

export default Inventory;
