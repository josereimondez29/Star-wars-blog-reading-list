import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";
import {Container, Jumbotron, Col, Row} from "react-bootstrap";
import darthvader from "./../../img/darthvader.jpg";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let url = `https://www.swapi.tech/api/people/${params.uid}`;
console.log(url)
	const charStore = store.character.filter(char => char.url == url);
	useEffect(() => actions.charDescription(url), []);
console.log(charStore)
	return (
		<Container>
			<div className="jumbo">
				<div className="d-flex justify-content-between">
					<img
						src={darthvader}
						width="400"
					/>
					<div className="text">
						{charStore[0] ? <h1 className="display-4">{charStore[0].name}</h1> : ""}
						
					</div>
				</div>
				<hr className="my-4 hr" />
				{charStore[0] ? (
					<Container>
						<Row className="info">
							<Col sm={2}>Name: {charStore[0].name}</Col>
							<Col sm={2}>Birth: {charStore[0].birth_year}</Col>
							<Col sm={2}>Gender: {charStore[0].gender}</Col>
							<Col sm={2}>Height {charStore[0].height}</Col>
							<Col sm={2}>Skin Color: {charStore[0].skin_color}</Col>
							<Col sm={2}>Eye Color: {charStore[0].eye_color}</Col>
						</Row>
					</Container>
				) : (
					""
				)}
			</div>
		</Container>
	);
};