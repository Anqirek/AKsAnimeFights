import React, {useState} from 'react';
import Header from './Header'
// import NewOPForm from './NewOPForm'
import OPContainer from './OPContainer'
import OPCard from './OPCard'
import OPCharacterInfo from './OPCharacterInfo';
import {Switch, Route} from 'react-router-dom'



function App() {

  const [selectChar, setSelectChar] = useState([])


  return (

    <div className = "App">
      <Switch>
        <Route path = "/OPContainer">
          <OPContainer setSelectChar = {setSelectChar}/>
        </Route>

        <Route path = "/OPCard">
          <OPCard  />
        </Route>
        <Route exact path = "/">
          <Header />
        </Route>
        <Route path = "/OPCharacterInfo">
        <OPCharacterInfo selectChar = {selectChar} />
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
