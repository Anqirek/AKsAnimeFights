
import React from 'react'


import { useHistory } from 'react-router-dom'


function OPCard({card: {age, altImage, bio, weapon, episode, quote, id, name, image}}) {

let history = useHistory() 


const charRedirect = () => {

history.push('./OPCharacterInfo')

}


    return (
        <>
         <div className="container" onClick = {charRedirect}>
        <li className = "card" >
        <img src = {image} alt = {altImage} />
        <br></br>
        <br></br>
        <ul>Name: {name}</ul>
        <br></br>
        <ul>Age: {age}</ul>
        <br></br>
        <ul>Quote: {quote}</ul>
        </li>
       
        </div>
       
</>
)}





export default OPCard;



