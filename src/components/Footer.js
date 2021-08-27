import React from "react"
import '../App.css'

const Footer = () =>{
    return(
        <>

            <footer>
                <div className = "ContenedorFooter">
                    <div className = "titulofooter">
                          <span href = '#subir'>TodoPelis</span>
                    </div>
                    <div className = "Redes__Sociales">
                        <li className ="Redes__Sociales--whats">
                            <img src = "https://image.flaticon.com/icons/png/128/1383/1383336.png" alt="Wp"/>
                            <span>3412136741</span>
                        </li>
                        <li class="Redes__Sociales--instagram">
                            <img src="https://image.flaticon.com/icons/png/512/725/725339.png" alt="instagram contactanos"/>
                            <span>@TodoPelis</span>
                        </li>
                    </div>
                    <div className="ContactosFooter">
                        Alvear 126 - Rosario - Argentina - Tel (341) 2136741
                    </div>
                    <div className="DerechosFooter">
                        <p>@TodoPelis - Todos los derechos reservados</p>
                    </div>
                </div>
            </footer>
 
        </>
    )
}

export default Footer