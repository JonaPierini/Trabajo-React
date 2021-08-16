import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () =>{
    return (
        <div className = "NavBar">
            <Link to = "/">Inicio</Link>
            <Link to = "/Cart">Carrito</Link>
        </div>
    )
}

export default NavBar