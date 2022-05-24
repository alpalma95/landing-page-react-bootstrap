import React from "react";
import Card from "./Card";

const Cards = () => {
	return (
		<div className="container-fluid mx-auto row justify-content-between">
			<Card
				title="Card 1"
				description="Description of card 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				buttonText="Go somewhere 1"
			/>
			<Card
				title="Card 2"
				description="Description of card 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				buttonText="Go somewhere 1"
			/>
			<Card
				title="Card 3"
				description="Description of card 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				buttonText="Go somewhere 1"
			/>
			<Card
				title="Card 4"
				description="Description of card 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				buttonText="Go somewhere 1"
			/>
		</div>
	);
};

export default Cards;
