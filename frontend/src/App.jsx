import React from 'react'
import './App.css'
import Moviecard from './components/Moviecard'

function App() {
  const movieNumber =2

  return (
    <>
    {movieNumber === 1 ?(<Moviecard movie={{title: "Venom",release_date: "2024"}}/>)
    : 
    (<Moviecard movie={{title: "serpant",release_date: "2023"}}/>)}
    </>
  )
}

export default App
