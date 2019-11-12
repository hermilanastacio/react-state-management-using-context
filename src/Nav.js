import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieContext } from './MovieContext';


const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Default</a>
            <span className="float-right text-white">List of movies: {movies.length}</span>
        </nav>
    );
}

export default Nav;