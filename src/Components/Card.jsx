import React from "react";
import { useState } from "react";
function Card({ card, addSelected }) {
  const [on, setOn] = useState(true);

  function toggle() {
    setOn(!on);
    if(on){
        addSelected(card.name)
    }else{
        addSelected('')
    }
  }
  return (
    <div onClick={toggle} className={`${on ? "bg-green-400" : ""} flex justify-center items-center py-10 px-10`}>
      <img width={150} height={150} src={card.img} alt={card.name} />
    </div>
  );
}

export default Card;