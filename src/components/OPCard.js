import React, {useState} from 'react'
import ReactPlayer from "react-player"

function OPCard({card: {age, altImage, bio, weapon, episode, quote, id, name, image}}) {

const [flipCards, setFlipCards] = useState(true)

function handleClick () {

 setFlipCards((currentSide)=> !currentSide)

}


return (
    <>
    {flipCards ? (
     <div className="container" onClick = {handleClick}>
    <li className = "card">
    <img src = {image} alt = "" />
    <br></br>
    <br></br>
    <ul>Name: {name}</ul>
    <br></br>
    <ul>Age: {age}</ul>
    <br></br>
    <ul>Quote: {quote}</ul>
    </li>
    </div>
  

    ) :  (

        <div className="container" onClick = {handleClick}>    
         <li className = "card">
            <img src = {altImage} alt = "" />
            <br></br>
            <br></br>
        <ul>Bio: {bio}</ul>
            <br></br>
        <ul>Weapon: {weapon}</ul>
            <br></br>
       <ul>Episode: {episode}</ul>
         </li>
    
       </div>
       )}

       </>
        
        
   )}

   export default OPCard;