import { Link } from "react-router-dom";
import "./TypePage.css"
import logo from '../img/pokemon-logo-small.png';
import cancelButton from '../img/cancel.png';


const Typepage = () => {
    return ( <section className="typepage">
        <section className="typepage-wrapper-headarea">
            <div>
                <img src={logo} alt="pokemon-logo" />
            </div>
            <div>
            <Link to="/">
                <button className="typepage-closing-button">
                    <img className="cancel-button" src={cancelButton} alt="cancel-button" />
                </button>
            </Link>
            </div>
        </section>
        <h1>TYPE</h1>
        <div className="typepage-grid">
        <Link to="/">
            <button className="button-green buttons">
                BUG
            </button>
        </Link>
        <Link to="/">
            <button className="button-dark buttons">
                DARK
            </button>
        </Link>
        <Link to="/">
            <button className="button-darkblue buttons">
                DRAGON
            </button>
        </Link>
        <Link to="/">
            <button className="button-yellow buttons">
                ELECTRIC
            </button>
        </Link>
        <Link to="/">
            <button className="button-lightpink buttons">
                FAIRY
            </button>
        </Link>
        <Link to="/">
            <button className="button-red buttons">
                FIGHTING
            </button>
        </Link>
        <Link to="/">
            <button className="button-orange buttons">
                FIRE
            </button>
        </Link>
        <Link to="/">
            <button className="button-lightgray buttons">
                FLYING
            </button>
        </Link>
        <Link to="/">
            <button className="button-purple buttons">
                GHOST
            </button>
        </Link>
        <Link to="/">
            <button className="button-darkgreen buttons">
                GRASS
            </button>
        </Link>
        <Link to="/">
            <button className="button-brown buttons">
                GROUND
            </button>
        </Link>
        <Link to="/">
            <button className="button-lightblue buttons">
                ICE
            </button>
        </Link>
        <Link to="/">
            <button className="button-lightgray buttons">
                NORMAL
            </button>
        </Link>
        <Link to="/">
            <button className="button-lightgreen buttons">
                PLANT
            </button>
        </Link>
        <Link to="/">
            <button className="button-lightpurple buttons">
                POISON
            </button>
        </Link>
        <Link to="/">
            <button className="button-pink buttons">
                PSYCHIC
            </button>
        </Link>
        <Link to="/">
            <button className="button-darkyellow buttons">
                ROCK
            </button>
        </Link>
        <Link to="/">
            <button className="button-darkblue buttons">
                STEEL
            </button>
        </Link>
        <Link to="/">
            <button className="button-blue buttons">
                WATER
            </button>
        </Link>
        </div>
        <div className="typepage-search-button">
        <Link to="/">
            <button className="typepage-button-search">
                SEARCH
            </button>
        </Link>
        </div>
    </section> );
}
 
export default Typepage;