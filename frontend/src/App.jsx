import React from 'react'
import "./css/App.css"
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favorites from "./pages/Favorites"

function App() {
  const movieNumber =2

  return (
    <main className='main-content'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </main>

  )
}

export default App
