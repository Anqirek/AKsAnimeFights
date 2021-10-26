import React from 'react'

function OPCard({card: {age, altImage, bio, weapon, episode, quote, id, name, image}}) {

    return (
        <>
         <div className="container">
         <h4>{name}</h4>
        <li className = "card">
        <img src = {image} alt = {altImage} />
        <ul>Name: {name}</ul>
        <br></br>
        <ul>Bio: {bio}</ul>
        <br></br>
        <ul>quote: {quote}</ul>
        </li>
       
        </div>
        </>
    )
    
    }



export default OPCard;