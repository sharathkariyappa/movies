import "../css/Moviecard.css"
import { useMovieContext } from "../contexts/MovieContext"

function Moviecard({movie}){
    const {addtoFavorites,
        removeFromFavorites,
        isFavorites} = useMovieContext()
    const favorite = isFavorites(movie.id)

    function onFavoriteClick(){
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addtoFavorites(movie)
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    🤍
                </button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default Moviecard