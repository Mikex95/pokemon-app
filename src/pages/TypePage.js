import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TypePage.css"
import logo from '../img/pokemon-logo-small.png';
import cancelButton from '../img/cancel.png';
import FilterResultPage from "./FilterResultPage"


const Typepage = () => {
    const [loading, setLoading] = useState(true)
    const [btnValue, setBtnValue] = useState("")
    const handleInput = (e) => {
        setBtnValue(e.target.value)
    }

    useEffect(() => {
        if (btnValue.length != 0) {
            
        setLoading(true)
        fetch(`https://pokeapi.co/api/v2/type/${btnValue}`)
                .then((response) => response.json())
                .then((types) => { console.log(types);
                    setBtnValue(types.pokemon);
                    setLoading(false)
                });
            }
        }, [btnValue]);
        // console.log(btnValue);

    const [filter, setFilter] = useState([])
    useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/`)
			.then((response) => response.json())
			.then((data) => {
                setFilter(data.results);
			});
    }, []);


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
            
            {filter.map((elt, index) => {
                return (
                    <div key={index}>
                    <Link>
                        <button onClick={handleInput} className="buttons" value={elt.name}>
                            {elt.name}
                        </button>
                    </Link> 
                    </div>
                );
            })}
            </div>

            {loading === false && btnValue.map((element, index) => {
                console.log(element);
                return (
                    <FilterResultPage
                     key={index}
                     names={element.pokemon.name}   
                     url={element.pokemon.url}
                    />
                );
            })}

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