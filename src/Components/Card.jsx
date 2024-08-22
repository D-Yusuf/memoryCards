import React from "react";
import { useState } from "react";
import questionImg from "../images/question.png"
function Card({ card, addSelected, flip}) { 
  return (
    <div data-checked={card.isSelected} onClick={()=>flip(card)} className="p-4 w-56 h-96 border " style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", }}>
        <div className="card-inner" style={{transform: card.isSelected ? "rotateY(180deg)" : ''}}>
            <div className="card-back">
            <img src={card.img} alt={card.name} />

            </div>
            <div className="card-front">

                <img  src={questionImg} alt={card.name} />
            </div>

        </div>
    </div>
  );
}

export default Card;