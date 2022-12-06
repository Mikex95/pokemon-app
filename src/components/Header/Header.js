import "./Header.css";

import logo from "../Header/pokemon-logo-png-1421.png";
import modus from "../Header/Vector.png";

const Header = () => {
  return (
    <header>
      <p className="image-wrapper">
        <img src={logo} alt="Logo" className="logo" />
      </p>
      <div>
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <input type="text" name="" id="" placeholder="  Search Pokemon" />
        <p>
          <img src={modus} alt="modus" />
        </p>
      </div>
    </header>
  );
};

export default Header;
