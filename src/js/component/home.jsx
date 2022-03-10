import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState(null);
	return (
		<div className="containercito">
			<div className="header">
				<h1>Welcome to Steph`s Traffic Light</h1>
			</div>
			<div className="contcenter">
				<div className="traffic">
					<div className="container">
						<div
							className={`red ${
								color === "red" ? "light" : null
							}`}
							onClick={() => setColor("red")}></div>
						<div
							className={`yellow ${
								color === "yellow" ? "light" : null
							}`}
							onClick={() => setColor("yellow")}></div>
						<div
							className={`green ${
								color === "green" ? "light" : null
							}`}
							onClick={() => setColor("green")}></div>
					</div>
				</div>
				<img
					src="https://i.pinimg.com/originals/49/51/86/495186babd73e488363da30a986a53a3.jpg"
					alt=""></img>
			</div>
		</div>
	);
};

export default Home;
