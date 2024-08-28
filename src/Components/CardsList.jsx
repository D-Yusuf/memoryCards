import React, { useState, useEffect } from "react";
import Card from "./Card";
import cardsData from "../cardsData";
import { shuffleArr } from "../cardsData";
function CardsList({incrementScore, incrementFail}) {
  const [data, setData] = useState(cardsData)
  const [finishedCards, setFinishedCards] = useState([])
  function flipCard(card, isFlipped = true){
    setData(data.map(_card=>{
      return _card.id === card.id ? {..._card, isSelected: isFlipped} : _card
    }))
  }
  
  function checkCards(cards){
    const [card1, card2] = cards
    if(card1.name === card2.name){
      incrementScore(2)
      setFinishedCards([...finishedCards, ...cards])
    }else{
      incrementFail(1)
      setData(prevState=>{
        return prevState.map(_card=>{
          if(_card.id === card1.id){
            return {...card1, isSelected: false}
          }else if(_card.id === card2.id){
            return {...card2, isSelected: false}
          }
          return _card
        }) 
      })
    }

    
    
  }
  useEffect(() => {
    const flippedCards = data.filter(card=> !finishedCards.includes(card)).filter(card=> card.isSelected)
    async function gameManager(){
      if(flippedCards.length === 2){
        
        await new Promise(res=> setTimeout(()=> res(checkCards(flippedCards)), 600)) // wait for timeout to finish
      }
      // if (flippedCards.length > 2){
        // flippedCards.forEach(card=> flipCard(card, false))
      // }

    }
    gameManager()
  }, [data])
  function resetCards(){
    setData(data.map(card=>{ return {...card, isSelected: false}}))
  }
  async function newGame(){
    resetCards()
    await new Promise(res=> setTimeout(()=> res(setData(shuffleArr(cardsData))), 600))
  }
  const displayedCards = data.map((card) => {
    return <Card key={card.id} flip={finishedCards.includes(card) ? ()=>{} : flipCard} card={card} />;
  });
  return (
    <div className="px-4  max-w-6xl mx-auto">
      <div className="flex w-full mb-3 gap-2">

      <button onClick={resetCards} className="bg-gray-600 w-full text-white px-3 py-2 text-center rounded-md break-words">Reset Game</button>
      <button onClick={newGame} className="bg-red-600 w-full text-white px-3 py-2 text-center rounded-md">New game</button>
      </div>
      <div className="px-10 grid place-items-center  grid-cols-3 gap-4 ">{displayedCards}</div>
    </div>
  );
}

export default CardsList;