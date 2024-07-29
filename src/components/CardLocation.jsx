import React from "react";
import { Link } from "react-router-dom";
import '../data/dataloges.json'


function LogementCard(props) {

    return (
        <Link
            to={`/logement/${props.id}`}
            state={{ logementById: props.id }}
            className="logementCard">

            <img src={props.imageUrl} alt={props.title} className="logementCard__image" />
            <h3 className="logementCard__title">{props.title}</h3>

        </Link>
    );
};


export default LogementCard;