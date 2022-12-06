import { Link } from "react-router-dom";
import "./TypePage.css"


const Typepage = () => {
    return ( <section className="typepage">
        <h1>TYPE</h1>
        <div className="typepage-grid">
        <Link to="/">
            <button className="button-green">
                BUG
            </button>
        </Link>
        <Link to="/">
            <button className="button-dark">
                DARK
            </button>
        </Link>
        <Link to="/">
            <button className="button-darkblue">
                DRAGON
            </button>
        </Link>
        <Link to="/">
            <button className="button-yellow">
                ELECTRIC
            </button>
        </Link>
        <Link to="/">
            <button className="button-lightpink">
                FAIRY
            </button>
        </Link>
        <Link to="/">
            <button className="button-red">
                FIGHTING
            </button>
        </Link>
        <Link to="/">
            <button className="button-orange">
                FIRE
            </button>
        </Link>
        <Link to="/">
            <button className="button-lightgray">
                FLYING
            </button>
        </Link>
        <Link to="/">
            <button className="button-purple">
                GHOST
            </button>
        </Link>
        <Link to="/">
            <button className="button-darkgreen">
                GRASS
            </button>
        </Link>
        <Link to="/">
            <button className="button-brown">
                GROUND
            </button>
        </Link>
        <Link to="/">
            <button className="button-lightblue">
                ICE
            </button>
        </Link>
        <Link to="/">
            <button className="button-lightgray">
                NORMAL
            </button>
        </Link>
        <Link to="/">
            <button className="button-lightgreen">
                PLANT
            </button>
        </Link>
        <Link to="/">
            <button className="button-lightpurple">
                POISON
            </button>
        </Link>
        <Link to="/">
            <button className="button-pink">
                PSYCHIC
            </button>
        </Link>
        <Link to="/">
            <button className="button-darkyellow">
                ROCK
            </button>
        </Link>
        <Link to="/">
            <button className="button-darkblue">
                STEEL
            </button>
        </Link>
        <Link to="/">
            <button className="button-blue">
                WATER
            </button>
        </Link>
        </div>
        <div className="typepage-search-button">
        <Link to="/">
            <button className="button-yellow">
                SEARCH
            </button>
        </Link>
        </div>
    </section> );
}
 
export default Typepage;