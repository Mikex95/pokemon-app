import {useState, useEffect} from "react"
import Header from "../components/Header/Header";
import GridItem from "../components/Pokemon-Overview/GridItem";
import "./HomePage.css";

const HomePage = () => {

	const [pokemon, setPokemon] = useState([])
	const [loading, setLoading] = useState(true)
	const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
	const [nextPageUrl, setNextPageUrl] = useState()
	const [previousPageUrl, setPreviousPageUrl] = useState()

	useEffect(() => {
		setLoading(true)
		fetch(currentPageUrl)
    .then(response => response.json())
    .then(data => {
		setPokemon(data)
		setNextPageUrl(data.next)
		setPreviousPageUrl(data.previous)
		setLoading(false)
		
	})
  }, [currentPageUrl])
  console.log(pokemon);
  console.log(nextPageUrl);
  console.log(previousPageUrl);
	
  if (loading) {
	return "Waiting......"
  }

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
