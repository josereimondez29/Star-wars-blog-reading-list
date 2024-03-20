import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";
import { Container, Row, Col } from "react-bootstrap";
import tatooine from "./../../img/tatooine.jpg";

export const SinglePlanet = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let url = `https://www.swapi.tech/api/planets/${params.uid}`;
  const planetStore = store.planet.filter((planet) => planet.url === url);
  useEffect(() => actions.planetDescription(url), []);
  return (
    <Container>
      <div className="jumbo">
        <Row className="d-flex justify-content-between align-items-center">
          <Col>
            <img src={tatooine} width="400" alt="Planet" />
          </Col>
          <Col className="text">
            {planetStore[0] && (
              <h1 className="display-4">{planetStore[0].name}</h1>
            )}
            <p>
              Here we should have a description of each StarWars element, but
              this api doesn't provide one, at least not personalized.
            </p>
          </Col>
        </Row>
        <hr className="my-4 hr" />
        {planetStore[0] && (
          <Container>
            <Row className="info">
              <Col sm={2}>Name: {planetStore[0].name}</Col>
              <Col sm={2}>Population: {planetStore[0].population}</Col>
              <Col sm={2}>Climate: {planetStore[0].climate}</Col>
              <Col sm={2}>Terrain: {planetStore[0].terrain}</Col>
              <Col sm={2}>Diameter: {planetStore[0].diameter}</Col>
              <Col sm={2}>
                Rotation Period: {planetStore[0].rotation_period}
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </Container>
  );
};