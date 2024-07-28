
import React from "react";
import Banner from '../assets/img-home.png';
import '../sass/home.scss';

import Navigation from "../components/Navigation";
import Logements from "../components/Logements";
import Footer from "../components/Footer.jsx"


const Home = () => {
    return (
        <div>
            <Navigation />

            <div className="home">
                <div className="banner">
                    <img src={Banner} alt="Paysage" />
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </div>
            <Logements />
            <Footer />
        </div>

    );
};

export default Home;