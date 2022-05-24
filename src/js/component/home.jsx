import React from "react";

import Navbar from "./Navbar";
import Jump from "./Jump";
import Cards from "./Cards";
import Footer from "./Footer";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Jump />
			<Cards />
			<Footer />
		</div>
	);
};

export default Home;
