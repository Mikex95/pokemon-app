import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import GridItem from "../components/Pokemon-Overview/GridItem";
import "./HomePage.css";

const HomePage = () => {
	const [pokemon, setPokemon] = useState([]);
	const [loading, setLoading] = useState(true);
	const [nextPageUrl, setNextPageUrl] = useState();
	const [previousPageUrl, setPreviousPageUrl] = useState();

	useEffect(() => {
		setLoading(true);
		fetch("https://pokeapi.co/api/v2/pokemon")
			.then((response) => response.json())
			.then((data) => {
				setPokemon(data.results);
				setNextPageUrl(data.next);
				setPreviousPageUrl(data.previous);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return "Waiting......";
	}

	return (
		<section className="home-page">
			<Header />
			<div className="grid">
				{pokemon.map((element) => {
					return <GridItem key={element.name} url={element.url} />;
				})}
			</div>
		</section>
	);
};

export default HomePage;
