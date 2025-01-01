import { useState,useEffect } from "react"
import "../css/Home.css"
import Moviecard from "../components/Moviecard"
import { popularMovies, searchMovies } from "../services/api"


function Home(){
    const [SeachQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const loadPopularMovies = async ()=>{
            try{
                const poppularmovies = await popularMovies();
                setMovies(poppularmovies);
            } catch(err) {
                console.log(err)
                setError("failed to fetch movies...")
            }
            finally{
                setLoading(false);
            }
        }
        loadPopularMovies();
    },[])
    

    // const movies = [
    //     {id : 1, title: "Venom", release_date: "2024"},
    //     {id : 2, title: "Ant", release_date: "2022"},
    //     {id : 3, title: "Hulk", release_date: "2020"},
    //     {id : 4, title: "Thor", release_date: "2022"},
    // ]

    const onSearch = async (e)=>{
        e.preventDefault();
        if(!SeachQuery.trim()) return
        if(loading) return
        setLoading(true)

        try{
            const searchResults = await searchMovies(SeachQuery);
            setMovies(searchResults)
            setError(null)
        } catch(err){
            console.log(err)
            setError("failed to search the movies")
        }
        finally {
            setLoading(false);
        }
    };

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

            {loading ?(
                <div className="loading">Loading...</div>
            ): (
                <div className="movies-grid">
                {movies.map((movie)=> 
                    movie.title.toLowerCase().startsWith(SeachQuery) && 
                    (<Moviecard movie={movie} Key={movie.id} />))}
            </div>
            )}
           
        </div>
    )
}

export default Home