import React, { useState, useEffect } from "react";
import Card from "./Card";
import cardsData from "../cardsData";

function CardsList({incrementScore, incrementFail}) {
  const [data, setData] = useState(cardsData)
  function flipCard(card){
    setData(data.map(_card=>{
      return _card.id === card.id ? {..._card, isSelected: !_card.isSelected} : _card
    }))
  }
  function checkCards(cards){
    console.log(cards[0].name, cards[1].name)
    if(cards[0].name === cards[1].name){
      incrementScore()
    }else{
      incrementFail()
    }
    
    setData(cardsData)
  }
  useEffect(() => {
    const flippedCards = data.filter(card=> card.isSelected)
    async function gameManager(){
      if(flippedCards.length === 2){
        console.log(flippedCards, "yayayayay")
        await new Promise(res=> setTimeout(()=> res(checkCards(flippedCards)), 600)) // wait for timeout to finish
        console.log("dad")
      }

    }
    gameManager()
  }, [data])
  

  const displayedCards = data.map((card) => {
    return <Card key={card.id} flip={flipCard} card={card} />;
  });
  return <div className="flex flex-wrap gap-4 justify-center px-10">{displayedCards}</div>;
}

export default CardsList;