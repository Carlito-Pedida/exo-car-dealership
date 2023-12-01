import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Container, InputGroup } from "react-bootstrap";
import { VehiclesContext } from "./VehiclesContext";
import { useParams, useNavigate } from "react-router-dom";

function Create() {
  let params = useParams();
  let [vehicle, setVehicle] = useState({
    id: params.vehicleId,
    make: "",
    model: "",
    description: "",
    condition: "",
    color: "",
    price: "",
    image_url: "",
  });

  let { getVehicle, addVehicle, updateVehicle } = useContext(VehiclesContext);
  let navigate = useNavigate();
  let { id, make, model, description, condition, color, price, image_url } =
    vehicle;

  useEffect(() => {
    if (id === undefined) return;
    async function fetch() {
      await getVehicle(id).then((vehicle) => setVehicle(vehicle));
    }
    fetch();
  }, [getVehicle, id]);

  function handleChange(event) {
    setVehicle((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value };
    });
  }

  function addOrUpdate() {
    if (id === undefined) {
      return addVehicle(vehicle);
    } else {
      return updateVehicle(vehicle);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    addOrUpdate(vehicle).then(() => {
      navigate(`/inventory`);
    });
  }

  return (
    <Container>
      <h3>Ready to trade-in your vehicle?</h3>
      <p>Fill out the form and we'll get back to you in a flash!</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Make</Form.Label>
          <Form.Control
            type="text"
            name="make"
            value={make}
            placeholder="Type in car make"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Model</Form.Label>
          <Form.Control
            type="text"
            name="model"
            value={model}
            placeholder="Type in car model"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={description}
            placeholder="Describe vehicle as accurately as posible"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Select Item Condition</Form.Label>
          <Form.Select
            variant="success"
            aria-label="Item Condition"
            type="text"
            name="condition"
            value={condition}
            onChange={handleChange}
          >
            <option value="Brand New">Brand New</option>
            <option value="Used - Like New">Used - Like New</option>
            <option value="Used - Excellent Condition<">
              Used - Excellent Condition
            </option>
            <option value="Used - Good Running Condition">
              Used - Good Running Condition
            </option>
            <option value="Used - Good Blemished">Used - Good Blemished</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="text"
            name="color"
            value={color}
            placeholder="Type in color"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Label>Trade-in Value</Form.Label>
        <InputGroup className="mb-3" onChange={handleChange}>
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            type="number"
            aria-label="Amount (to the nearest dollar)"
            placeholder="To the nearest dollar"
            name="price"
            value={price}
            onChange={handleChange}
          />
        </InputGroup>

        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image_url"
            value={image_url}
            placeholder="Type in image URL"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit / Save
        </Button>
      </Form>
    </Container>
  );
}
export default Create;
