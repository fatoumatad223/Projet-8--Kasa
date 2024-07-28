import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import "../sass/carousel.scss";
import Dataloges from '../data/dataloges.json';

import arrowLeft from '../assets/arrowLeft.png';
import arrowRight from '../assets/arrowRight.png';

const Carousel = () => {
    const [src, setSrc] = useState(0);
    let { id } = useParams();

    const logement = Dataloges.find((element) => element.id == id);

    useEffect(() => {
        setSrc(0);
    }, [id]);

    const previousClick = () => {
        setSrc((prevIndex) =>
            prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
        );
    };

    const nextClick = () => {
        setSrc((prevIndex) =>
            prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel">
            <button className="carousel__button carousel__button--left" onClick={previousClick}>
                <img src={arrowLeft} alt="Image précédente" />
            </button>
            <div className="carrousel__image--container">
                <img className="carousel__image" src={logement.pictures[src]} alt="Logement" />
                <div className="carousel__counter">
                    {src + 1} / {logement.pictures.length}                          
                </div>
            </div>
            <button className="carousel__button carousel__button--right" onClick={nextClick}>
                <img src={arrowRight} alt="Image suivante" />
            </button>
        </div>
    );
};

export default Carousel;
