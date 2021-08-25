import React from "react";
import "./Card.css";
const Card = ({ monster }) => {
    return (
        <div key={monster.id} className="card-container">
            <img
                src={`https://robohash.org/${monster.id}/?set=set2&size=180x120`}
                alt=""
            />
            <h1>{monster.name}</h1>
            <p>{monster.email}</p>
        </div>
    );
};

export default Card;
