import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../img/pokemon-logo-png-1421.png";
import modus from "../../img/Vector.png";

const Header = () => {
	const searchHandler = (event) => {
		event.preventDefault();

		console.log(event.target[0].value.toLowerCase());
		event.target[0].value = "";
	};

	return (
		<header>
			<div className="image-wrapper">
				<img src={logo} alt="Logo" className="logo" />
			</div>
			<div className="flex-container">
				<Link to={"/types"}>
					<div className="menu-icon">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</Link>

				<form onSubmit={searchHandler}>
					<input type="text" placeholder="Search Pokemon" />
				</form>

				<img src={modus} alt="modus" className="modus-icon" />
			</div>
		</header>
	);
};

export default Header;
