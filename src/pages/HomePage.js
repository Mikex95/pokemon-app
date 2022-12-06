import Header from "../components/Header/Header";
import GridItem from "../components/Pokemon-Overview/GridItem";
import "./HomePage.css";

const HomePage = () => {
	return (
		<section className="home-page">
			<Header />
			<div className="grid">
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
			</div>
		</section>
	);
};

export default HomePage;
