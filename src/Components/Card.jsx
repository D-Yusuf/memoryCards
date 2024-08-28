import React from "react";
import { useState } from "react";
import questionImg from "../images/question.png"
function Card({ card, addSelected, flip}) { 
  return (
    <div onClick={()=>flip(card)} className=" lg:w-56 w-28  lg:h-96 h-56 border cursor-pointer" style={{ }}>
        <div className="card-inner " style={{transform: card.isSelected ? "rotateY(180deg)" : ''}}>
            <div className="card-back relative p-2">
                <img className="drop-shadow-lg" src={card.img} alt={card.name} />
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