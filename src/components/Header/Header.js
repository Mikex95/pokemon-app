import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../img/pokemon-logo-png-1421.png";
import modus from "../../img/Vector.png";

const Header = () => {
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
				<input type="text" name="" id="" placeholder="Search Pokemon" />
				<img src={modus} alt="modus" className="modus-icon" />
			</div>
		</header>
	);
};

export default Header;
