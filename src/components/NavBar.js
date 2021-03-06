import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () =>{
    return (
        <div className = "NavBar">
            <Link to = '/'><h1 className = "TodoPelis">TODO PELIS</h1></Link>
            <Link to="/categoria/Accion">Accion</Link>
            <Link to="/categoria/Aventura">Aventura</Link>
            <Link to="/categoria/Animacion">Animacion</Link>
            <Link to = "/Cart"><CartWidget/></Link>
        </div>
    )
}

export default NavBar