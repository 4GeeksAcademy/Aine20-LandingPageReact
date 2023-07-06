import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";


//create your first component
const Home = () => {

	let cards = [
		{ id: 1, image: "img", cardTitle: "Card Title 1", cardText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis et excepturi fugiat modi est quo rerum voluptate. Molestiae, expedita reprehenderit!" },
		{ id: 2, image: "img", cardTitle: "Card Title 2", cardText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis et excepturi fugiat modi est quo rerum voluptate. Molestiae, expedita reprehenderit!" },
		{ id: 3, image: "img", cardTitle: "Card Title 3", cardText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis et excepturi fugiat modi est quo rerum voluptate. Molestiae, expedita reprehenderit!" },
		{ id: 4, image: "img", cardTitle: "Card Title 4", cardText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis et excepturi fugiat modi est quo rerum voluptate. Molestiae, expedita reprehenderit!" }
	];

	const images = [
		"https://picsum.photos/600/600?random=1",
		"https://picsum.photos/600/600?random=2",
		"https://picsum.photos/600/600?random=3",
		"https://picsum.photos/600/600?random=4"
	];


	return (
		<>
			<Navbar />

			<div className="container">
				<Jumbotron />

				<div className="card-group py-4 text-center justify-content-evenly">
					{cards.map((card, index) => (
						<Card
							key={card.id}
							image={images[index]}
							cardTitle="Card Title"
							cardText={card.cardText}
							buttonLabel="Find Out More"
						/>
					))}
				</div>
			</div>

			<Footer />
		</>

	);
};

export default Home;
