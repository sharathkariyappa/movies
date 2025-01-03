import { useState, useContext,useEffect, createContext } from "react";

const MovieContext = createContext();

export const useMovieContext = ()=> useContext(MovieContext);

export const MovieProvider = ()=>{
    
}