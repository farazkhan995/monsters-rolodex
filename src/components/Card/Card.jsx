import React from "react";
import card from "./card.css";
function Card(props) {
    return(
        <div className="card">
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`} alt="monster"></img>
            <h3>{props.monster.name}</h3>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card;