import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "../components/Navbar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import CardFinal from "../components/CardFinal.jsx";
import Footer from "../components/Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="contain-fluid m-auto">
			<Navbar />
			<Jumbotron />
			<div className="row d-flex flex-row justify-content-center m-auto">
				<div className="col-11  d-flex flex-column flex-sm-column flex-md-column flex-lg-column flex-xl-row marginCardsRow">
					<CardFinal />
				</div>
			</div>
			<div className="p-0">
				<Footer />
			</div>
		</div>
	);
};

export default Home;