import "../css/Moviecard.css"

function Moviecard({movie}){

    function onliked(){
        alert("clikced")
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <button className="movie-overlay" onClick={onliked}>
                    🤍
                </button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default Moviecard