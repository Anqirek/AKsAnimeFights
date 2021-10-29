import React, {useEffect,useState} from 'react';
import Header from './Header'
import NewOPForm from './NewOPForm'
import OPContainer from './OPContainer'
import OPCard from './OPCard'
import OPCharacterInfo from './OPCharacterInfo';
import {Switch, Route} from 'react-router-dom'



function App() {

  const [selectChar, setSelectChar] = useState([])
  const [cards, setCards] = useState([])

useEffect(getOpCards, [])

function getOpCards() {
fetch('http://localhost:3000/OP-Characters')
.then(res => res.json())
.then(data=>setCards(data))
}

 function onSubmit(newOP) {
   setCards ([newOP,...cards])

 }

   console.log(cards)

  return (

    <div className = "App">

        <Switch>
        <Route path = "/OPContainer">
          <OPContainer cards={cards} setCards={setCards}/>
        </Route>
        <Route path = "/OPCard">
          <OPCard  />
        </Route>
        <Route exact path = "/">
        <NewOPForm onSubmit={onSubmit} />
          <Header />
        </Route>
        <Route path = "/OPCharacterInfo">
        <OPCharacterInfo />
        </Route>
        <Route path = "*">
          <h1>
          404 Not Found
          </h1>
        </Route>
        
      </Switch>

      
    </div>

        
  )  
}

export default App;
