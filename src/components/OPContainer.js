import { useState, useEffect } from "react";
import OPCard from "./OPCard";
import styled from "styled-components"


function OPContainer() {

const [cards, setCards] = useState([])

useEffect(getOpCards, [])

function getOpCards() {

fetch('http://localhost:3000/OP-Characters')
.then(res => res.json())
.then(setCards)
 

}

const cardsMap = cards.map((card) => { 

    return <OPCard  key = {card.id} card = {card} /> 
    
})

return (
    <ul className="cards">{cardsMap}</ul>
)

}




export default OPContainer;

