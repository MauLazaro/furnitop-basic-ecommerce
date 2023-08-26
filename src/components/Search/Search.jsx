import { useState } from 'react';
import product from "./../../data/products.json";
import { Link } from 'react-router-dom';

export const Search = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState(""); 

    const data = e => {
        e.preventDefault();
        fetch(product)
            .then(response => response.json())
            .then((json) => {
                const results = json.filter((titulo)=>{
                    return(
                        titulo &&
                        titulo.name &&
                        titulo.name.toLowerCase()
                    )
                })
                setProducts(results);
            });
    };

    const changeState = e => {
        setSearch(e.target.value);
    };


    return (
        <div className="search-box">
            <form className="search" onSubmit={data}>
                <span className="icon-large"><i className="ri-search-2-line"></i></span>
                <input type="search" placeholder="Buscar productos" onChange={changeState}/>
                <Link to={`/search/${search.toLowerCase()}`}><button type="submit">Buscar</button></Link>
            </form>
        </div>
    );
};

export default Search;
