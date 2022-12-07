import "./GridItem.css";
import { useEffect, useState } from "react";

const GridItem = (props) => {
	const [pokeInfo, setPokeInfo] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch(props.url)
			.then((response) => response.json())
			.then((data) => {
				setPokeInfo(data);
				setLoading(false);
			});
	}, [props.url]);

	if (loading) {
		return "Waiting......";
	}

	return (
		<article className="pokemon-grid-item">
			<div>
				<div className="grid-item__top">
					<img
						src={pokeInfo.sprites.other.home.front_shiny}
						alt="pokemon"
						className="pokemon-item-img"
					/>
				</div>
				<div className="grid-item__bottom">
					<p>#{pokeInfo.id}</p>
					<p>{pokeInfo.name}</p>
				</div>
			</div>
		</article>
	);
};

export default GridItem;
