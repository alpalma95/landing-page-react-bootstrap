import React from "react";
import Card from "./Card";

const Cards = () => {
	return (
		<div className="container mx-auto my-5 row justify-content-between gap-4">
			<Card
				title="Card 1"
				description="Description of card 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				buttonText="Go somewhere 1"
				imgUrl="https://i.picsum.photos/id/516/500/325.jpg?hmac=ko_jsEOAjAHbj9Cej2ZKU1oRUcM127HOaBqejWZss0I"
			/>
			<Card
				title="Card 2"
				description="Description of card 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				buttonText="Go somewhere 2"
				imgUrl="https://i.picsum.photos/id/613/500/325.jpg?hmac=187vbmK8S_heA334GAdm17oRrA8eISthTpE2U2wjhwg"
			/>
			<Card
				title="Card 3"
				description="Description of card 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				buttonText="Go somewhere 3"
				imgUrl="https://i.picsum.photos/id/100/500/325.jpg?hmac=eK2ojBBQmnDk5jFJCAdm5oL3U0vxZBXclNT0lxWINDQ"
			/>
			<Card
				title="Card 4"
				description="Description of card 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				buttonText="Go somewhere 4"
				imgUrl="https://i.picsum.photos/id/478/500/325.jpg?hmac=FwDMqPj8OxvWO_8OPjXBn8-38R7t93JOonwk9bCixxI"
			/>
		</div>
	);
};

export default Cards;
