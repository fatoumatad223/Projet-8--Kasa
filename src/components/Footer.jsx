import React from "react";
import '../sass/footer.scss';
import logoFooter from '../assets/logoFooter.png'


const Footer = () => {
    return (
        
        <section className="footer">
            <img className="logoFooter"src={logoFooter} alt='Logo Kasa' />
            <p> <i className="fa-regular fa-copyright"/> 2020 Kasa. All rights reserved </p>
        </section>
    );
}

export default Footer;
