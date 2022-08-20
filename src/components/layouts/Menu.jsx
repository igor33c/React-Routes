import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'


/* Link substitui o <a> */
const Menu = props => (
    <aside className='Menu'>
        <nav>
            <ul>
                <li>
                    <Link to ="/">Inicio</Link>
                </li>
                <li>
                    <Link to ="/About">Sobre</Link>
                </li>
                <li>
                    <Link to ="/Param/R$4,83">Param #01</Link>
                </li>
                <li>
                    <Link to ="/Param/R$3,21">Param #02</Link>
                </li>
                <li>
                    <Link to ="/Nao Existe">NotFound</Link>
                </li>
            </ul>
        </nav>
    </aside>

)

export default Menu