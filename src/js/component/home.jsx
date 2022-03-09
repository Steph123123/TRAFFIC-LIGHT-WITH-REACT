import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<div class="header">
				<h1>Welcome to Steph`s Trafficlight</h1>
			</div>
			<div class="traffic">
				<div class="container">
					<div class="red"></div>
					<div class="yellow"></div>
					<div class="green"></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
