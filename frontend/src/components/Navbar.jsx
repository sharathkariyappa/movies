import React from "react"
import { Link } from "react-router-dom"

function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar-branding">
                <Link to="/">My movies</Link>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
            </div>
        </nav>
    )
}

export default Navbar