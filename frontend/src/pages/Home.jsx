import { useState } from "react"
import "../css/Home.css"
import Moviecard from "../components/Moviecard"


function Home(){
const [SeachQuery, setSearchQuery] = useState("")

    const movies = [
        {id : 1, title: "Venom", release_date: "2024"},
        {id : 2, title: "Ant", release_date: "2022"},
        {id : 3, title: "Hulk", release_date: "2020"},
        {id : 4, title: "Thor", release_date: "2022"},
    ]
    function onSearch (){
        
    }

    return (
        <div className="home">
            <form onSubmit={onSearch} className="search-form">
                <input type="text" 
                    placeholder="Search Movies here ..." 
                    className="search-input" 
                    value={SeachQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie)=> 
                    movie.title.toLowerCase().startsWith(SeachQuery) && 
                    (<Moviecard movie={movie} Key={movie.id} />))}
            </div>
        </div>
    )
}

export default Home