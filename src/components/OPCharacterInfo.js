import React from 'react'


function OPCharacterInfo({bio, weapon, altImage, episode, id}) {



    return (

    <>
 <div className="container-character" >
  <li> 
    <img src = {altImage} alt = "loading..." />   
    <br></br>
    <br></br>
  <ul> Bio:{bio} </ul>
    <br></br>
  <ul> Weapon:{weapon}</ul>
    <br></br>
  <ul> Episode:{episode} </ul>
 </li>
</div>
   </>
    )
}





export default OPCharacterInfo;