import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = props => {
    return (
        <div>
            Navbar
            <Link to="/">Profile</Link>
            <Link to="/gallery">Gallery</Link>
        </div>
    )
    
}
