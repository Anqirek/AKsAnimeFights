import { useState, useEffect } from "react";
import OPCard from "./OPCard";
import OPCharacterInfo from './OPCharacterInfo'

function OPContainer({setSelectChar}) {

const [cards, setCards] = useState([])


useEffect(getOpCards, [])

function getOpCards() {

fetch('http://localhost:3000/OP-Characters')
.then(res => res.json())
.then(setCards)
 

}

const filterChar = cards.filter(card => {
  return setSelectChar(card)})


const cardsMap = filterChar.map((card) => { 

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