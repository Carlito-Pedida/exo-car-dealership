import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useParams, useNavigate, Link } from "react-router-dom";
import { VehiclesContext } from "./VehiclesContext";
import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Vehicle.css";

function Vehicle(props) {
  let params = useParams();
  let navigate = useNavigate();

  let { getVehicle, deleteVehicle } = useContext(VehiclesContext);
  let [vehicle, setVehicle] = useState();

  useEffect(() => {
    async function fetch() {
      await getVehicle(params.vehicleId).then((vehicle) => setVehicle(vehicle));
    }

    fetch();
  }, [params.vehicleId, getVehicle]);

  function handleDeleteVehicle(id) {
    deleteVehicle(id);
    navigate("/inventory");
  }

  function loading() {
    return (
      <div className="w-25 text-center">
        <Spinner animation="border" />
      </div>
    );
  }
  function vehicleCard() {
    let { id, make, model, description, condition, color, price, image_url } =
      vehicle;
    return (
      <Container>
        <div className="vehicle">
          <Card className="align-self-center" key={id}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
              <Card.Title>
                {make} {model}
              </Card.Title>
              <Card.Subtitle className="mb-2">{description}</Card.Subtitle>
              <Card.Text>
                <strong>Condition: </strong> <span>{condition}</span>
              </Card.Text>
              <Card.Text>
                <strong>Color: </strong> <span>{color}</span>
              </Card.Text>
              <Card.Text>
                <strong>Price: </strong> <span>{price}</span>
              </Card.Text>
              <div className="button-div">
                <Link
                  to="/inventory"
                  className="buttons btn btn-outline-success mx-3"
                >
                  View Complete Inventory
                </Link>
                <Link
                  to={`/inventory/${id}/edit`}
                  className="buttons btn btn-outline-warning mx-3"
                >
                  Edit
                </Link>
                <Button
                  className="buttons"
                  variant="outline-danger"
                  onClick={handleDeleteVehicle.bind(this, id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    );
  }
  if (vehicle === undefined) return loading();
  return vehicle.id !== parseInt(params.vehicleId) ? loading() : vehicleCard();
}

export default Vehicle;
