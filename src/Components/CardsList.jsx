import React, { useState, useEffect } from "react";
import Card from "./Card";
import cardsData from "../cardsData";

function CardsList() {
  const [selectedCards, setSelectedCards] = useState([]);
  function addSelected(cardName) {

    if (!selectedCards.length) {
      setSelectedCards([cardName]);
    }else if(selectedCards.length && selectedCards.length !== 2){
      
      setSelectedCards([...selectedCards, cardName])
    }else {
      const firstCard = selectedCards[0]
      setSelectedCards([firstCard, cardName]);
    }
  }
  useEffect(() => {
    console.log(selectedCards)
  
    // return () => {
    //   second
    // }
  }, [selectedCards])
  

  const displayedCards = cardsData.map((data) => {
    return <Card addSelected={addSelected} card={data} />;
  });
  return <div className="flex flex-wrap gap-4 justify-center px-10">{displayedCards}</div>;
}

export default CardsList;