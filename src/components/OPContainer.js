import React, { useState, useEffect } from "react";
import OPCard from "./OPCard";
import OPCharacterInfo from './OPCharacterInfo'

function OPContainer({cards}) {
console.log(cards)

const cardsMap = cards.map((card) => { 

    return <OPCard 
     key = {card.id} 
     card = {card} 
     name = {card.name}
     image = {card.image}
     quote = {card.quote}
     altImage = {card.altimage}
     bio = {card.bio}
     weapon = {card.weapon}
     episode = {card.episode}
     /> 
})




return (
    <>
    
    <ul className="cards">{cardsMap}</ul>

   
  </>
)

}




export default OPContainer;