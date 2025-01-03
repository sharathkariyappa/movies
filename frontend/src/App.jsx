import React from 'react'
import "./css/App.css"
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favorites from "./pages/Favorites"
import { MovieProvider } from './contexts/MovieContext'

function App() {
  return (
    <MovieProvider>
      <Navbar />   
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>

  )
}

export default App
