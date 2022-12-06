import "./GridItem.css";
import pikachu from "../../img/pikachu.png";

const GridItem = () => {
	return (
		<article className="pokemon-grid-item">
			<div>
				<div className="grid-item__top">
					<img src={pikachu} alt="pokemon" className="pokemon-item-img" />
				</div>
				<div className="grid-item__bottom">
					<p>#001</p>
					<p>Pikachu</p>
				</div>
			</div>
		</article>
	);
};

export default GridItem;
