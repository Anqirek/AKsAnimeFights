import React from "react";
import OPCard from "./OPCard";


function OPContainer({cards}) {

const cardsMap = cards.map((card) => { 

    return <OPCard 
     key = {card.id} 
     card = {card} 
     name = {card.name}
     image = {card.image}
     quote = {card.quote}
     altimage = {card.altimage}
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