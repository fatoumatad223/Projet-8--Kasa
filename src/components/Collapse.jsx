import React from "react";
import { useState } from "react";

import "../sass/collapse.scss";

import ArrowUp from '../assets/fleche-haut.png';
import ArrowDown from '../assets/fleche-bas.png';


const Collapse = ({description, title, className}) => {

    const [openDescription, setOpenDescription] = useState(false);
   
    const toggleDescription = () => {
        setOpenDescription(!openDescription);
    };

    return (
        <div className={`collapse ${className}`}>
            <button onClick={toggleDescription} className="collapse__button">
                {title} <img src={openDescription ? ArrowDown : ArrowUp} alt="Toggle Arrow" />
            </button>
            {openDescription && (
                <div className="collapse__content">
                    {Array.isArray(description) ? (
                        <ul className="collapse__list">
                            {description.map((item, index) => (
                                <li key={index} className="collapse__list-item">{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{description}</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Collapse;