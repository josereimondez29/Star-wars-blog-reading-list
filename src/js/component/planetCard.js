import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import tatooine from "./../../img/tatooine.jpg";
import { Col, Card, Button } from "react-bootstrap";

const PlanetCard = props => {
	const { store, actions } = useContext(Context);
	const planetStore = store.planet.filter(plt => plt.name == props.planet.name);
	useEffect(() => actions.planetDescription(props.planet.url), []);

	return (
		<Col>
			<Card>
				<Card.Img
					variant="top"
					src={tatooine}
				/>
				<Card.Body>
					<Card.Title>{props.planet.name}</Card.Title>
					{planetStore[0] ? (
						<Card.Text>
							<p>Population: {planetStore[0].population}</p>
							<p>Terrain: {planetStore[0].terrain}</p>
						</Card.Text>
					) : (
						""
					)}
					<Link to={"/single_planet/" + props.planet.uid} data={planetStore}>
						<Button variant="outline-primary">Learn More</Button>
					</Link>
					<Button
						variant="outline-warning"
						className="likeBtn"
						onClick={() => actions.addItem(props.planet.name)}>
						&#9825;
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

PlanetCard.propTypes = {
	index: PropTypes.number,
	planet: PropTypes.object,
	id: PropTypes.number
};

export default PlanetCard;
