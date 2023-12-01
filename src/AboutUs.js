import React from "react";
import { Figure, Container, Row, Col } from "react-bootstrap";
import { faker } from "@faker-js/faker";
import "./AboutUs.css";

function AboutUs() {
  return (
    <Container>
      <Row className="comp-add">
        <Col className="col-8">
          <Figure.Image
            width={793}
            height={462}
            alt="893x562"
            src="https://images.unsplash.com/photo-1605152322270-89a9fcae206f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </Col>
        <Col className="col-4">
          <div>
            <p>
              <strong>Address: </strong>
              {faker.address.streetAddress()}, {faker.address.cityName()}
              <p>
                {faker.address.state()} {faker.address.zipCodeByState()}
              </p>
            </p>
            <p></p>
            <p>
              <strong>Phone: </strong>
              {faker.phone.number()}
              <br />
              Call an agent today!
            </p>
            <p>
              <strong>Email: </strong>
              exo.cars@Email.com
              <br />
              Ask us a question!
            </p>
            <p>
              <strong>Financing Available!</strong>
              <br />
              Ask about our in-house financing.
              <br />
              financing.exo.cars@Email.com
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <h3>Welcome to Exo Cars Dealership</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
          turpis in eu mi bibendum neque egestas congue quisque. Dignissim enim
          sit amet venenatis urna cursus eget nunc scelerisque. Euismod lacinia
          at quis risus sed vulputate odio ut enim.
          <br />
          <br />
          Risus in hendrerit gravida rutrum quisque non tellus orci. Congue
          mauris rhoncus aenean vel elit scelerisque mauris. Fermentum et
          sollicitudin ac orci phasellus egestas. Morbi tincidunt ornare massa
          eget. Semper risus in hendrerit gravida rutrum. Magna eget est lorem
          ipsum dolor sit amet.
        </p>
      </Row>
    </Container>
  );
}
export default AboutUs;
