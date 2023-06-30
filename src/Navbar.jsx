import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav--links link--myblog"><h1>📓My Blog</h1></Link>
            <ul>
                <Link to="/login" className="nav--links ul-link">Login</Link>
                <Link to="/profile" className="nav--links ul-link">Profile</Link>
            </ul>
        </nav>
    )
}