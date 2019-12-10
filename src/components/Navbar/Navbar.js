import React from 'react'
import { NavLink } from 'react-router-dom'
//import RocksOnSand from '../../assets/img/rocks_on_sand.jpg'
import Blonde from '../../assets/img/blonde.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss'

export const Navbar = props => {
    return (
        <div className="navbar__container">
            <div className="navbar__top-img" />
            <nav className="navbar__navigation">
                <div className="navbar__avatar">
                    <img src={Blonde} alt='Blonde' />
                </div>
                <div className="navbar__buttons">
                    <NavLink to="/" exact={true} className="navbar__icon" activeClassName="navbar__icon--active">
                        <FontAwesomeIcon icon={faUser} size="2x" />
                    </NavLink>
                    <NavLink to="/gallery" className="navbar__icon" activeClassName="navbar__icon--active">
                        <FontAwesomeIcon icon={faImage} size="2x" />
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}
