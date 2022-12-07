import { Link } from "react-router-dom";
import "./BackArrow";
import "./Header.css";
import logo from "../../img/pokemon-logo-png-1421.png";
import modus from "../../img/Vector.png";
import BackArrow from "./BackArrow";

const Header = (props) => {
  return (
    <header>
      <div className="image-wrapper">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="flex-container">
        {props.page == "Home" && (
          <Link to={"/types"}>
            <div id="webapp_cover">
              <div id="menu_button">
                <input type="checkbox" id="menu_checkbox" />
                <label for="menu_checkbox" id="menu_label">
                  <div id="menu_text_bar"></div>
                </label>
              </div>
            </div>
          </Link>
        )}

        {props.page == "Details" && (
          <Link to={"/"}>
            <BackArrow />
          </Link>
        )}

        <input type="text" name="" id="" placeholder="Search Pokemon" />
        <img src={modus} alt="modus" className="modus-icon" />
      </div>
    </header>
  );
};

export default Header;
