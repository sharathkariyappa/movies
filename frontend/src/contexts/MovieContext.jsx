import { useState, useContext,useEffect, createContext } from "react";

const MovieContext = createContext();

export const useMovieContext = ()=> useContext(MovieContext);

export const MovieProvider = ({children})=>{

    const [favorites, setFavorites] = useState([])

    useEffect(()=>{
        const storedFavs = localStorage.getItem("favorites")
        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    },[])

    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])

    const addtoFavorites = (movie)=>{
        setFavorites(prev => [...prev, movie])
    }

    return <MovieContext.Provider>
        {children}
    </MovieContext.Provider>

}