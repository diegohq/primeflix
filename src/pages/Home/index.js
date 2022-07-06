import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from '../../services/api';
import './home.css';

function Home() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadMovies() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: '5ff0b6f729a762e0d2a39c4295d6eb42',
                    page: 1
                }
            });

            setMovies(response.data.results);
            setLoading(false);

        }

        loadMovies();

    }, []);

    if(loading) {
        return (
            <div className="loading">
                <h2>Loading movies...</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="movies-list">
                {movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <Link to={`movie/${movie.id}`}>Acessar</Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;