import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import './favorites.css';

function Favorites() {

    const [movies, setMovies] = useState([]);
    
    useEffect(() => {

        const myList = localStorage.getItem("@primeflix");
        setMovies(JSON.parse(myList) || []);

    }, []);

    function deleteMovie(movieId) {

        let moviesFiltered = movies.filter((movie) => {
            return movie.id !== movieId;
        });

        localStorage.setItem("@primeflix", JSON.stringify(moviesFiltered));
        setMovies(moviesFiltered);

        toast.success("Movie deleted");
    }

    return (
        <div className="my-movies">
            <h1>My movies</h1>

            {movies.length === 0 && <span>You haven't saved any movie</span>}

            <ul>
                {movies.map((movie) => {
                    return (
                        <li key={movie.id}>
                            <span>{movie.title}</span>
                            <div>
                                <Link to={`/movie/${movie.id}`}>Go to movie</Link>
                                <button onClick={ () => deleteMovie(movie.id) }>Delete</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Favorites;