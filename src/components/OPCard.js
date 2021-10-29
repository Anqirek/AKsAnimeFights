import React, {useState} from 'react'
import OPCharacterInfo from './OPCharacterInfo'
 import {Route} from 'react-router-dom'
//   import { useHistory } from 'react-router-dom'



function OPCard({card: {age, altImage, bio, weapon, episode, quote, id, name, image}}) {

const [front,setFront] = useState(true)

//  let history = useHistory() 
 

// const backCard =  <OPCharacterInfo

//  key = {id}
//  bio = {bio} 
//  weapon = {weapon} 
//  altImage = {altImage} 
//  episode = {episode} 
//  />


const charRedirect = () => {
    
//  history.push(
//      './OPCharacterInfo')
 setFront(current => !current)
}

 

    return (
        <>
         {front ? (
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
    
         

         ) : ( <Route>
             <OPCharacterInfo key = {id}
            bio = {bio} 
            weapon = {weapon} 
            altImage = {altImage} 
            episode = {episode} />
            </Route>)

         }
       
</>


)}





export default OPCard;



