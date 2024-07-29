import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../components/Navigation";
import '../sass/location.scss'
import '../sass/collapse.scss'
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Footer from "../components/Footer";
import Error from "./Error";

//import Error from "./Error";
import { Routes, Route, useParams } from 'react-router-dom';

import Dataloges from '../data/dataloges.json'
import Collapse from "../components/Collapse";

const Location = () => {

    // Get the userId param from the URL.
    let { id } = useParams();
    // const navigate = useNavigate();

    const logement = Dataloges.find((element) => element.id == id)

    if (!logement) {
        return <Error />
    }

    return (
        <div>
            <Navigation />

            <section className="cardLogement">
                <Carousel />
                <div className="container">
                    <div className="container__infoLocation">
                        <h1 className="container__infoLocation--title">{logement.title}</h1>
                        <p className="container__infoLocation--localisation">{logement.location}</p>
                        <ul className="container__infoLocation--ul">
                            {logement.tags.map(tag => (
                                <li className="container__infoLocation--li" key={tag}>{tag}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="cardOwner">
                        <div className="mediaQueries">
                            <div className="cardOwner__info">
                                <p className="cardOwner__info--name">{logement.host.name}</p>
                                <img className="cardOwner__info--img" src={logement.host.picture} />
                            </div>
                            <div className="rating">
                                <Rating rating={logement.rating} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapseLocation">
                    <Collapse className="collapseLocation__description" description={logement.description} title="Description" />
                    <Collapse className="collapseLocation__equipements" description={logement.equipments} title="Équipements" />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Location;