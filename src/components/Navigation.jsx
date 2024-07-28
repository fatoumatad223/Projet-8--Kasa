import React from "react";
import { NavLink } from 'react-router-dom';
import logoKasa from '../assets/logoKasa.png';
import '../sass/navigation.scss'

const Navigation = () => {
    return (
        <div className="navigation">
            <img src={logoKasa} alt='Logo Kasa' />
            <nav>
                <ul>
                    <NavLink to="/" className={({isActive}) => (isActive ? "underline" : "" )}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about" className={({isActive}) => (isActive ? "underline" : "" )}>
                        <li>À Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;