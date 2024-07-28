import React from "react";
import Navigation from "../components/Navigation";
import Banner from '../assets/img-about.png';
import '../sass/about.scss'
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import aboutJson from "../data/data-about.json"

const About = () => {

    const fiabilite = aboutJson.find((element) => element.title == "Fiabilité")
    const respect = aboutJson.find((element) => element.title == "Respect")
    const service = aboutJson.find((element) => element.title == "Service")
    const securite = aboutJson.find((element) => element.title == "Sécurité")

    return (
        <div>
            <Navigation />
            <div className="about">
                <div className="banner">
                    <img src={Banner} alt="Paysage" />
                </div>
                <div className="collapse">
                    <Collapse description={fiabilite.description} title={fiabilite.title} />
                    <Collapse description={respect.description} title={respect.title} />
                    <Collapse description={service.description} title={service.title} />
                    <Collapse description={securite.description} title={securite.title} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;

//