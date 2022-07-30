import React from "react";
import Cardlist from "./Cardlist.css";
import Card from "../Card/Card";
function CardList(props) {
        return(
            <div className="cardList">
                {props.monsters.map((monster)=> (
                    <Card key = {monster.id} monster ={monster}/>
                ))}
            </div>
        );
};

export default CardList;