import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../img/pokemon-logo-png-1421.png";
import modus from "../../img/Vector.png";

const Header = () => {
	const navigate = useNavigate();

	const searchHandler = (event) => {
		// Neu laden verhindern
		event.preventDefault();

		// Feld auslesen und leeren
		let inputValue = event.target[0].value.toLowerCase();
		event.target[0].value = "";

		// Fetch Pokemon-Daten
		fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
			.then((response) => response.json())
			.then((data) => {
				navigate(`/details/${data.id}`);
			});
	};

	return (
		<header>
			<div className="image-wrapper">
				<img src={logo} alt="Logo" className="logo" />
			</div>
			<div className="flex-container">
				<form onSubmit={searchHandler}>
					<input type="text" placeholder="Search Pokemon" />
				</form>

				<img src={modus} alt="modus" className="modus-icon" />
			</div>
		</header>
	);
};

export default Header;
