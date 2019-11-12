import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext'; //We import this to get/set data

const AddMovie = () => {
    const [name, setName] = useState(''); //This is how to declare state w/ default empty value
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext) //initialize context then get/set

    const updateName = (e) => { //This handles the onchange of state name
        setName(e.target.value)
    };

    const updatePrice = (e) => { //This handles the onchange of state price
        setPrice(e.target.value)
    };

    const AddMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, { name: name, price: price }]) //Modify the state
    };

    return (
        <form onSubmit={AddMovie}>
            <input type="text" name="name" value={name} onChange={updateName} />
            <input type="text" name="price" value={price} onChange={updatePrice} />
            <button>Submit</button>
        </form>
    );
}

export default AddMovie;