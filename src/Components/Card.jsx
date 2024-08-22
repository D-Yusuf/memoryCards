import React from "react";
import { useState } from "react";
import questionImg from "../images/question.png"
function Card({ card, addSelected, flip}) { 
  return (
    <div onClick={()=>flip(card)} className="p-4 w-56 h-96 border cursor-pointer" style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", }}>
        <div className="card-inner" style={{transform: card.isSelected ? "rotateY(180deg)" : ''}}>
            <div className="card-back relative p-2">
                <img src={card.img} alt={card.name} />
                <p className="absolute bottom-0 font-bold">{card.name}</p>

            </div>
            <div className="card-front">
                <img  src={questionImg} alt={card.name} />
            </div>

        </div>
    </div>
  );
}

export default Card;