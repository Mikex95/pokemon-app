import Header from "../components/Header/Header";
import "./DetailsPage.css";
import pikachu from "../img/pikachu.png";

const DetailsPage = () => {
	return (
		<section className="details-page">
			<Header />

			<div className="pokemon-img__container">
				<div className="pokemon-img__box">
					<img src={pikachu} alt="pokemon" className="pokemon-img__img" />
				</div>
			</div>

			<h2>#004 Pikachu</h2>
		</section>
	);
};

export default DetailsPage;
