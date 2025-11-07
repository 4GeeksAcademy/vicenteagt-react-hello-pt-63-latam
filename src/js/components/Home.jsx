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
		<div>
			<Navbar/>
			
		<Jumbotron/>
		
		
		<div className="contain-fluid d-flex justify-content-center m-auto">
			  <div className="row d-flex flex-row">
				<div className="col-12  d-flex flex-column flex-sm-column flex-md-column flex-lg-column flex-xl-row">
			<CardFinal/>
			</div>
</div>
</div>
			
		 
		
    
    
		<Footer/>
		</div>

		
		
		
		
	

	
	);
};

export default Home;