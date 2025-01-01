import Moviecard from "../components/Moviecard"


function Home(){
    const movies = [
        {id : 1, title: "Venom", release_date: "2024"},
        {id : 2, title: "Ant", release_date: "2022"},
        {id : 3, title: "Hulk", release_date: "2020"},
        {id : 4, title: "Thor", release_date: "2022"},
    ]
    
    return (
        <div className="home">
            <div className="movies-grid">
                {movies.map((movie)=>(<Moviecard movie={movie} Key={movie.id} />))}
            </div>
        </div>
    )
}

export default Home