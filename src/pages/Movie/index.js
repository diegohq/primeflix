import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from '../../services/api';
import './movie.css';

function Movie() {

    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        function loadMovie() {
            api.get(`/movie/${id}`, {
                params: {
                    api_key: '5ff0b6f729a762e0d2a39c4295d6eb42'
                }
            })
            .then((response) => setMovie(response.data))
            .catch(() => {
                navigate("/", {replace: true});
                return;
            })
        }

        loadMovie();
        setLoading(false);
    }, [id, navigate]);

    if(loading) {
        return (
            <div className="movie-info">
                <h1>Carregando filme...</h1>
            </div>
        );
    }

    return (
        <div className="movie-info">

            <h1>{movie.title}</h1>

            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />

            <h3>Overview</h3>
            <span>{movie.overview}</span>

            <strong>Score: {movie.vote_average} / 10</strong>

            <div className="buttons">
                <button>Save</button>
                <button><a target="_blank" rel="noreferrer" href={`https://youtube.com/results?search_query=${movie.title} trailer`}>Trailer</a></button>
            </div>

        </div>
    );
}

export default Movie;